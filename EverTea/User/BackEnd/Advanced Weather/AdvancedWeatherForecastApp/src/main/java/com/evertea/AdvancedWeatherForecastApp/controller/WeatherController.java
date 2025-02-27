package com.evertea.AdvancedWeatherForecastApp.controller;

import com.evertea.AdvancedWeatherForecastApp.DTO.WeatherData;
import com.evertea.AdvancedWeatherForecastApp.service.WeatherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/weather")
public class WeatherController {

    @Autowired
    private WeatherService service;

    @PostMapping("/setCity")
    public void setCity(@RequestBody WeatherData data){
        System.out.println("Fetched the city: "+ data.getCity());

        service.retrieveCity(data);
    }
}
