package com.user.user.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.user.user.DTO.UserPlantationCreatingDTO;
import com.user.user.Service.UserPlantationCreatingService;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/user")
public class UserPlantationCreatingController {

    @Autowired
    private UserPlantationCreatingService DistrictPlant; // Using Service

    @GetMapping("/plantationDistrict")
    public String plantChoosingWithDistrict(@RequestBody UserPlantationCreatingDTO districtPlantation) {

        String district = districtPlantation.getDistrict();
        
        System.out.println("Received District: " + district);
        return "District found " + DistrictPlant.districtChecker(district);
    }

    
}