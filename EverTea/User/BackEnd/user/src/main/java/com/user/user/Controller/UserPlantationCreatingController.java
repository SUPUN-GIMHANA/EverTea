package com.user.user.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.user.user.DTO.UserPlantationCreatingDTO;
import com.user.user.Service.UserPlantationCreatingService;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/user")
public class UserPlantationCreatingController {

    @Autowired
    private UserPlantationCreatingService DistrictPlant; // Using Service

    @PostMapping("/plantationDistrict")
    public String plantChoosingWithDistrict(@RequestBody UserPlantationCreatingDTO districtPlantation) {

        String district = districtPlantation.getDistrict().toLowerCase().trim().replaceAll("\\s+", " ");
        
        System.out.println("Received District: " + district);
        return "District found " + DistrictPlant.districtChecker(district);
    }

    @PostMapping("/plantationArea")
    public String plantationArea(@RequestBody UserPlantationCreatingDTO districtPlantation) {

        Double area = districtPlantation.getArea();
        
        System.out.println("Received Area: " + area);
        return "Area Enetered " + area;
    }
}