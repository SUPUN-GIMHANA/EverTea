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

    // @PostMapping("/plantationTeaModel")
    // public String plantationTeaModel(@RequestBody UserPlantationCreatingDTO districtPlantation) {

    //     String teaModel = districtPlantation.getTeaModel();;
        
    //     System.out.println("Received District: " + teaModel);
    //     return "District found " + DistrictPlant.districtChecker(teaModel);
    // }

    @PostMapping("/plantationAreaAndSlope")
    public String plantationArea(@RequestBody UserPlantationCreatingDTO districtPlantation) {

        Double area = districtPlantation.getArea();
        Integer landSlope = districtPlantation.getLandSlope();
        System.out.println("Received Area: " + area + " Received Slope: " + landSlope);

        return "Area Enetered " + area;
    }

    @PostMapping("/budgetAndTheTeaPlantsOfTheUser")
    public String budgetOfTheUser(@RequestBody UserPlantationCreatingDTO districtPlantation) {

        Double budget = districtPlantation.getBudget();
        Double teaPlantsUser = districtPlantation.getTeaPlantsUser();
        System.out.println("Received Budget: " + budget + " Received TeaPlants: " + teaPlantsUser);

        return "Enetered Budget" + budget + " Enetered TeaPlants" + teaPlantsUser;
    }

    @PostMapping("/budgetRecommendation")
    public String budgetRecommendation(@RequestBody UserPlantationCreatingDTO districtPlantation) {

        String district = districtPlantation.getDistrict();
        Double area = districtPlantation.getArea();
        Double avgAreaForATeaPlant = districtPlantation.getAvgAreaForATeaPlant();
        Integer landSlope = districtPlantation.getLandSlope();
        Integer teaModel = districtPlantation.getTeaModel();

        DistrictPlant.recommendedBudgetCalculator(district, area, avgAreaForATeaPlant, landSlope, teaModel);     
        System.out.println("Started Calculating The Best Plan For The User");

        return "Started Calculating The Best Plan For The User";
    }
}