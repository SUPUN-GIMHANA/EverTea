package com.evertea.AdvancedWeatherForecastApp.controller;

import com.evertea.AdvancedWeatherForecastApp.DTO.LocationAndTokenReceiver;
import com.evertea.AdvancedWeatherForecastApp.service.FirebaseMessagingService;
import com.evertea.AdvancedWeatherForecastApp.service.WeatherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/weather")
public class WeatherController {

    @Autowired
    private WeatherService service;

    @Autowired
    private FirebaseMessagingService firebaseMessagingService;

    @PostMapping("/location")
    public void locationAndTokenReceiver(@RequestBody LocationAndTokenReceiver receiver){

        System.out.println("Token: "+receiver.getFcmToken());

        // weatherService class
        service.retrieveLocation(receiver);

        firebaseMessagingService.getTokenFromController(receiver);


    }
}
