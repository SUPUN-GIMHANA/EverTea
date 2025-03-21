package com.EverTea.EverTea.AdvancedWeather.service;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Scanner;

@Service
public class ApiResponse {
    public static HttpURLConnection fetchApiResponse(String urlString){
        System.out.println("fetch Api method called");
        try{
            // attempt to create connection
            URL url = new URL(urlString);
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();

            //set request method to get
            connection.setRequestMethod("GET");

            return connection;
        }catch(IOException e){
            e.printStackTrace();
        }
        return null;
    }

    public static String readApiResponses(HttpURLConnection apiConnection){

        System.out.println("read API method called");
        try{
            // create a string builder to store the resulting JSON data
            StringBuilder resultJson = new StringBuilder();

            // create a scanner to read from the InputStream of the HttpURLConnection
            Scanner scanner = new Scanner(apiConnection.getInputStream());

            // loop through each line in the response and append it to the stringBuilder
            while(scanner.hasNext()){
                // read and append the current line to the StringBuilder
                resultJson.append(scanner.nextLine());
            }
            scanner.close();

            return resultJson.toString();

        }catch(IOException e){
            e.printStackTrace();
        }
        return null;

    }



}
