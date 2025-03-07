package com.EverTea.EverTea.AdvancedWeather.service;

import com.EverTea.EverTea.AdvancedWeather.DTO.LocationAndTokenReceiver;
import com.EverTea.EverTea.AdvancedWeather.DTO.WeatherData;
import com.EverTea.EverTea.AdvancedWeather.repo.WeatherRepository;
import com.EverTea.EverTea.AdvancedWeather.webSocket.WeatherDataWebSocketHandler;
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
    double latitude = 0;
    double longitude = 0;

    @Autowired
    private WeatherRepository weatherRepository;

    @Autowired
    private WeatherNotificationService notificationService;

    @Autowired
    private WeatherDataWebSocketHandler webSocketHandler;

    public void retrieveLocation(LocationAndTokenReceiver receiver){

        latitude = receiver.getLatitude();
        longitude = receiver.getLongitude();

        System.out.println("lat: "+ latitude);
        System.out.println("lon: "+ longitude);

    }


    @Scheduled(fixedRate = 10000, initialDelay = 6000)
    private void displayWeatherData(){

        // prevent the program execute until get the API response
        if(latitude == 0 && longitude == 0){
            System.out.println("Latitude and Longitude is null, waiting for API response...");
            return;
        }

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


            if(!weatherRepository.doesCityTableExist(String.valueOf(latitude), String.valueOf(longitude))){
                weatherRepository.createCityTableIfTableNotExist(String.valueOf(latitude), String.valueOf(longitude));
            }else{
                System.out.println(latitude+"_"+longitude+ "_weather_table is already created");
            }



            for(int i=0; i < 1; i++){

                String date = (String) timeArray.get(i);
                weatherData.setDateTime(date);
                System.out.println(date);
                notifyWeatherDataWebSocket(date, "date");

                int cloudCover = ((Number) currentWeatherJson.get("cloud_cover")).intValue();
                String feelsLike;

                if(cloudCover >=0 && cloudCover <= 10){
                    feelsLike= "Clear";
                    weatherData.setCloudCover(feelsLike);
                    System.out.println("cloudCover" +feelsLike);
                    notifyWeatherDataWebSocket(feelsLike,"Coverage");
                }else if(cloudCover >= 11 && cloudCover <= 25){
                    feelsLike="Mostly Sunny";
                    weatherData.setCloudCover(feelsLike);
                    System.out.println("cloudCover" +feelsLike);
                    notifyWeatherDataWebSocket(feelsLike,"Coverage");
                }else if(cloudCover >= 26 && cloudCover <= 50){
                   feelsLike ="Partly Cloudy";
                    weatherData.setCloudCover(feelsLike);
                    System.out.println("cloudCover" +feelsLike);
                    notifyWeatherDataWebSocket(feelsLike,"Coverage");
                }else if(cloudCover >= 51 && cloudCover <= 75){
                    feelsLike = "Mostly Cloudy";
                    weatherData.setCloudCover(feelsLike);
                    System.out.println("cloudCover" +feelsLike);
                    notifyWeatherDataWebSocket(feelsLike,"Coverage");
                }else{
                    feelsLike = "Overcast";
                    weatherData.setCloudCover(feelsLike);
                    System.out.println("cloudCover" +feelsLike);
                    notifyWeatherDataWebSocket(feelsLike,"Coverage");
                }

                double currentTemp = Math.round(((Number) currentWeatherJson.get("temperature_2m")).doubleValue());
                weatherData.setCurrentTemp(currentTemp);
                System.out.println("Current temperature: "+ currentTemp);
                notifyWeatherDataWebSocket(String.valueOf(currentTemp), "Current Temperature");

                double tempMax = Math.round(((Number) temperatureMaxArray.get(i)).doubleValue());
                weatherData.setTempMax(tempMax);
                System.out.println("Maximum Temperature(2m) C: "+ tempMax);
                notifyWeatherDataWebSocket(String.valueOf(tempMax),"Maximum Temperature (2m)");

                double tempMin = Math.round(((Number) temperatureMinArray.get(i)).doubleValue());
                weatherData.setTempMin(tempMin);
                System.out.println("Minimum Temperature(2m) C: "+ tempMin);
                notifyWeatherDataWebSocket(String.valueOf(tempMin), "Minimum Temperature");

                long dayLight = Math.round(((Number) dayLightArray.get(i)).longValue());
                long dayLightHour = dayLight / 3600;
                weatherData.setDayLight(dayLightHour);
                System.out.println("Day Light (hourly): "+ dayLightHour);
                notifyWeatherDataWebSocket(String.valueOf(dayLightHour),"Day Light Hour");

                long sunShine = Math.round(((Number) sunShineArray.get(i)).longValue());
                long sunShineHour = sunShine / 3600;
                weatherData.setSunShine(sunShineHour);
                System.out.println("Sun Shine (h)"+ sunShineHour);
                notifyWeatherDataWebSocket(String.valueOf(sunShineHour), "Sun Shine Hour");

                double uvIndexMax = Math.round(((Number) uvIndexArray.get(i)).doubleValue());
                weatherData.setUvIndexMax(uvIndexMax);
                System.out.println("UV index max: "+ uvIndexMax);
                notifyWeatherDataWebSocket(String.valueOf(uvIndexMax), "UV index");

                double precipitationSum = Math.round(((Number) precipitationSumArray.get(i)).doubleValue());
                weatherData.setPrecipitationSum(precipitationSum);
                System.out.println("Precipitation Sum"+ precipitationSum);
                notifyWeatherDataWebSocket(String.valueOf(precipitationSum), "Precipitation sum");

                double rainSum = Math.round(((Number) rainSumArray.get(i)).doubleValue());
                weatherData.setRainSum(rainSum);
                System.out.println("Rain sum"+ rainSum);
                notifyWeatherDataWebSocket(String.valueOf(rainSum), "Rain sum");

                double windSpeedMax = Math.round(((Number) windSpeedArray.get(i)).doubleValue());
                weatherData.setWindSpeedMax(windSpeedMax);
                System.out.println("Wind speed 10m"+ windSpeedMax);
                notifyWeatherDataWebSocket(String.valueOf(windSpeedMax), "Wind Speed");

                long windDirection = Math.round(((Number) windDirectionArray.get(i)).longValue());

                String message;

                if(windDirection >= 338 || windDirection < 23){
                    message = "North (N)";
                    weatherData.setWindDirection(message);
                    System.out.println(message);
                    notifyWeatherDataWebSocket(message, "Wind Direction");
                }else if(windDirection < 68){
                    message = "North-East(NE)";
                    weatherData.setWindDirection(message);
                    System.out.println(message);
                    notifyWeatherDataWebSocket(message, "Wind Direction");
                }else if(windDirection < 113){
                    message = "East (E)";
                    weatherData.setWindDirection(message);
                    System.out.println(message);
                    notifyWeatherDataWebSocket(message, "Wind Direction");
                }else if(windDirection < 158){
                    message = "South-East (SE)";
                    weatherData.setWindDirection(message);
                    System.out.println(message);
                    notifyWeatherDataWebSocket(message, "Wind Direction");
                }else if(windDirection < 203){
                    message = "South (S)";
                    weatherData.setWindDirection(message);
                    System.out.println(message);
                    notifyWeatherDataWebSocket(message, "Wind Direction");
                }else if(windDirection < 248){
                    message = "South-West (SW)";
                    weatherData.setWindDirection(message);
                    System.out.println(message);
                    notifyWeatherDataWebSocket(message, "Wind Direction");
                }else if(windDirection < 293){
                    message = "West (W)";
                    weatherData.setWindDirection(message);
                    System.out.println(message);
                    notifyWeatherDataWebSocket(message, "Wind Direction");
                }else{
                    message = "North-West (NW)";
                    weatherData.setWindDirection(message);
                    System.out.println(message);
                    notifyWeatherDataWebSocket(message, "Wind Direction");
                }


                weatherRepository.insertWeatherData(String.valueOf(latitude),
                        String.valueOf(longitude),
                        weatherData.getDateTime(),
                        weatherData.getCloudCover(),
                        weatherData.getCurrentTemp(),
                        weatherData.getTempMax(),
                        weatherData.getTempMin(),
                        weatherData.getDayLight(),
                        weatherData.getSunShine(),
                        weatherData.getUvIndexMax(),
                        weatherData.getPrecipitationSum(),
                        weatherData.getRainSum(),
                        weatherData.getWindSpeedMax(),
                        weatherData.getWindDirection());


            }

            notificationService.getNotificationMessage(weatherData);

        }catch(IOException e){
            e.printStackTrace();
        }catch(ParseException e){
            e.printStackTrace();
        }
    }


    private void notifyWeatherDataWebSocket(String data, String type){
        try{
            String message = data
                    .replace("\\", "\\\\")  // Escape backslashes
                    .replace("\"", "\\\"")  // Escape double quotes
                    .replace("\n", "\\n")   // Escape newlines
                    .replace("\r", "\\r")   // Escape carriage returns
                    .replace("\t", "\\t");  // Escape tabs

            String dataJson = String.format(
                    "{\"type\": \"%s\", \"message\": \"%s\"}",
                    type,
                    message
            );

            webSocketHandler.broadCast(dataJson);
            System.out.println("Weather data send");

        }catch(Exception e){
            System.out.println("Error while notifying log websocket: "+ e.getMessage());
        }

    }



}
