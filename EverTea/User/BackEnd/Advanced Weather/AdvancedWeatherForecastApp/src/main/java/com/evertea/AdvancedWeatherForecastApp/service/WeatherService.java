package com.evertea.AdvancedWeatherForecastApp.service;

import com.evertea.AdvancedWeatherForecastApp.Model.WeatherData;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.net.HttpURLConnection;

@Service
public class WeatherService {

    //Declare city variable
    private String city;
    private double latitude = 0;
    private double longitude = 0;

    private static JSONObject getLocationData(String city){

        // create an object of weather data
        WeatherData weatherData = new WeatherData();

        city = city.replaceAll(" ", "+");
        weatherData.setCity(city);

        // Assigned the API key
        String urlString = "https://geocoding-api.open-meteo.com/v1/search?name=" +
                            city +
                            "&count=1&language=en&format=json";

        try{
            // Fetch the API response based on API link
            HttpURLConnection apiConnection = ApiResponse.fetchApiResponse(urlString);

            // Response status check
            if(apiConnection.getResponseCode() != 200){
                System.out.println("Error: could not connect API");
                return null;
            }

            // read the response and convert store string type
            String jsonResponse = ApiResponse.readApiResponses(apiConnection);

            System.out.println("API response: "+ jsonResponse.toString());

            // parse the string into a json object
            // create a instance of a JSON parser
            JSONParser parser = new JSONParser();
            JSONObject resultJsonObject = (JSONObject) parser.parse(jsonResponse);

            // retrieve location data
            JSONArray locationData = (JSONArray) resultJsonObject.get("results");
            return (JSONObject) locationData.get(0);



        }catch(IOException e){
            e.printStackTrace();

        } catch (ParseException e) {
            throw new RuntimeException(e);
        }

        return null;
    }

    public WeatherData getCity(WeatherData data){

        city = data.getCity();


        JSONObject cityLocationData = (JSONObject) getLocationData(city);

        latitude = (double) cityLocationData.get("latitude");
        longitude = (double) cityLocationData.get("longitude");

        return data;

    }
}
