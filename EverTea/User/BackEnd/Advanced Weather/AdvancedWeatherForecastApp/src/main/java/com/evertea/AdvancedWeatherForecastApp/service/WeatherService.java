package com.evertea.AdvancedWeatherForecastApp.service;

import com.evertea.AdvancedWeatherForecastApp.Model.WeatherData;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.net.HttpURLConnection;

@Service
public class WeatherService {

    //Declare city variable
    private String city;

    public void retrieveCity(WeatherData data){

        city = data.getCity();
        System.out.println("City from retrieveCity method:" + city);


        JSONObject cityLocationData = (JSONObject) getLocationData(city);

        double latitude = (double) cityLocationData.get("latitude");
        double longitude = (double) cityLocationData.get("longitude");

        displayWeatherData(latitude, longitude);

    }

    private static JSONObject getLocationData(String city){

        System.out.println("Get location Data: "+ city);
        // create an object of weather data
        WeatherData weatherData = new WeatherData();

        city = city.replaceAll(" ", "+");
        weatherData.setCity(city);

        // checking purpose
        System.out.println("location method called");
        System.out.println("------------------------------------------------------------------");
        System.out.println("City name from get location method: "+ city);

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

            System.out.println("API response: "+ jsonResponse);

            // parse the string into a json object
            // create an instance of a JSON parser
            JSONParser parser = new JSONParser();
            JSONObject resultJsonObject = (JSONObject) parser.parse(jsonResponse);

            if(resultJsonObject == null){
                throw new RuntimeException("API response is null. Check the API URL or parameters.");
            }
            // retrieve location data
            JSONArray locationData = (JSONArray) resultJsonObject.get("results");
            return (JSONObject) locationData.get(0);



        }catch(Exception e){
            e.printStackTrace();

        }



        return null;
    }

    private void displayWeatherData(double latitude, double longitude){

        System.out.println("city : "+ city);
        // create an instance of WeatherData
        WeatherData weatherData = new WeatherData();

        try{
            //API key
            String url =    "https://api.open-meteo.com/v1/forecast?latitude="+
                            latitude +
                            "&longitude="+
                            longitude +
                            "&current=temperature_2m,cloud_cover&daily=temperature_2m_max,temperature_2m_min,daylight_duration,sunshine_duration,uv_index_max,precipitation_sum,rain_sum,wind_speed_10m_max,wind_direction_10m_dominant&timezone=auto";

            // fetch API response
            HttpURLConnection apiConnection = ApiResponse.fetchApiResponse(url);

            //check response status
            if(apiConnection.getResponseCode() != 200){
                System.out.println("Error: Could not connect to API");
                return;
            }

            // read the response and convert store String type
            String jsonResponse = ApiResponse.readApiResponses(apiConnection);

            // parse the string into a JSON
            JSONParser parser = new JSONParser();
            JSONObject jsonObject = (JSONObject) parser.parse(jsonResponse);
            JSONObject currentWeatherJson = (JSONObject) jsonObject.get("current");
            JSONObject dailyWeatherJson = (JSONObject) jsonObject.get("daily");

            // checking purpose
            System.out.println("Current Weather: "+ currentWeatherJson.toJSONString());
            System.out.println("Daily Weather: "+ dailyWeatherJson.toJSONString());

            JSONArray timeArray = (JSONArray) dailyWeatherJson.get("time");
            JSONArray temperatureMaxArray = (JSONArray) dailyWeatherJson.get("temperature_2m_max");
            JSONArray temperatureMinArray = (JSONArray) dailyWeatherJson.get("temperature_2m_min");
            JSONArray dayLightArray = (JSONArray) dailyWeatherJson.get("daylight_duration");
            JSONArray sunShineArray = (JSONArray) dailyWeatherJson.get("sunshine_duration");
            JSONArray uvIndexArray = (JSONArray) dailyWeatherJson.get("uv_index_max");
            JSONArray precipitationSumArray = (JSONArray) dailyWeatherJson.get("precipitation_sum");
            JSONArray rainSumArray = (JSONArray) dailyWeatherJson.get("rain_sum");
            JSONArray windSpeedArray = (JSONArray) dailyWeatherJson.get("wind_speed_10m_max");
            JSONArray windDirectionArray = (JSONArray) dailyWeatherJson.get("wind_direction_10m_dominant");

            for(int i=0; i < timeArray.size(); i++){

                String date = (String) timeArray.get(i);
                System.out.println(date);

                int cloudCover = ((Number) currentWeatherJson.get("cloud_cover")).intValue();
                String feelsLike;

                if(cloudCover >=0 && cloudCover <= 10){
                    feelsLike= "Clear";
                    System.out.println("cloud cover" +feelsLike);
                }else if(cloudCover >= 11 && cloudCover <= 25){
                    feelsLike="Mostly Sunny";
                    System.out.println("cloud cover" +feelsLike);
                }else if(cloudCover >= 26 && cloudCover <= 50){
                   feelsLike ="Partly Cloudy";
                    System.out.println("cloud cover" +feelsLike);
                }else if(cloudCover >= 51 && cloudCover <= 75){
                    feelsLike = "Mostly Cloudy";
                    System.out.println("cloud cover" +feelsLike);
                }else{
                    feelsLike = "Overcast";
                    System.out.println("cloud cover" +feelsLike);
                }

                double currentTemp = Math.round(((Number) currentWeatherJson.get("temperature_2m")).doubleValue());
                System.out.println("Current temperature: "+ currentTemp);

                double tempMax = Math.round(((Number) temperatureMaxArray.get(i)).doubleValue());
                System.out.println("Maximum Temperature(2m) C: "+ tempMax);

                double tempMin = Math.round(((Number) temperatureMinArray.get(i)).doubleValue());
                System.out.println("Minimum Temperature(2m) C: "+ tempMin);

                long dayLight = Math.round(((Number) dayLightArray.get(i)).longValue());
                long dayLightHour = dayLight / 3600;
                System.out.println("Day Light (hourly): "+ dayLightHour);

                long sunShine = Math.round(((Number) sunShineArray.get(i)).longValue());
                long sunShineHour = sunShine / 3600;
                System.out.println("Sun Shine (h)"+ sunShineHour);

                double uvIndexMax = Math.round(((Number) uvIndexArray.get(i)).doubleValue());
                System.out.println("UV index max: "+ uvIndexMax);

                double precipitationSum = Math.round(((Number) precipitationSumArray.get(i)).doubleValue());
                System.out.println("Precipitation Sum"+ precipitationSum);

                double rainSum = Math.round(((Number) rainSumArray.get(i)).doubleValue());
                System.out.println("Rain sum"+ rainSum);

                double windSpeedMax = Math.round(((Number) windSpeedArray.get(i)).doubleValue());
                System.out.println("Wind speed 10m"+ windSpeedMax);

                long windDirection = Math.round(((Number) windDirectionArray.get(i)).longValue());

                String message;

                if(windDirection >= 338 || windDirection < 23){
                    message = "North (N)";
                    System.out.println(message);
                }else if(windDirection < 68){
                    message = "North-East(NE)";
                    System.out.println(message);
                }else if(windDirection < 113){
                    message = "East (E)";
                    System.out.println(message);
                }else if(windDirection < 158){
                    message = "South-East (SE)";
                    System.out.println(message);
                }else if(windDirection < 203){
                    message = "South (S)";
                    System.out.println(message);
                }else if(windDirection < 248){
                    message = "South-West (SW)";
                    System.out.println(message);
                }else if(windDirection < 293){
                    message = "West (W)";
                    System.out.println(message);
                }else{
                    message = "North-West (NW)";
                    System.out.println(message);
                }
            }



        }catch(IOException e){
            e.printStackTrace();
        }catch(ParseException e){
            e.printStackTrace();
        }
    }



}
