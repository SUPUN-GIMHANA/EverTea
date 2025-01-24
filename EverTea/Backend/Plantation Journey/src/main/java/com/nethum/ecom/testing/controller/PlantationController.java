package com.nethum.ecom.testing.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.nethum.ecom.testing.service.PlantationService;

@RestController
@RequestMapping("/api/plantations")
@CrossOrigin
public class PlantationController {

    @Autowired
    private PlantationService plantationService;

    @GetMapping("/trigger-scheduler")
    public String triggerSchedulerManually() {
        plantationService.triggermanually();
        return "Scheduler logic triggered manually!";
    }


}
