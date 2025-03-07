package com.EverTea.EverTea.Controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.EverTea.EverTea.PlantationJourney.DTO.UserPlantationCreatingDTO;
import com.EverTea.EverTea.PlantationJourney.Service.UserPlantationCreatingService;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/userPlantationCreating")
public class UserPlantationCreatingController {

    @Autowired
    private UserPlantationCreatingService DistrictPlant; // Using Service

    @PostMapping("/plantationDistrict")
    public ResponseEntity<List<String>> plantChoosingWithDistrict(@RequestBody UserPlantationCreatingDTO districtPlantation) {

        String district = districtPlantation.getDistrict().toLowerCase().trim().replaceAll("\\s+", " ");
        
        System.out.println("Received District: " + district);

        List<String> teaModels = DistrictPlant.districtChecker(district);

        return ResponseEntity.ok(teaModels);
    }

    @PostMapping("/plantationTeaModel")
    public String plantationTeaModel(@RequestBody UserPlantationCreatingDTO districtPlantation) {

        // Integer teaModel = districtPlantation.getTeaModel();

        String teaModelName = districtPlantation.getTeaModelName();
        System.out.println("Received TeaModel: " + teaModelName);
        DistrictPlant.variableSaver(teaModelName);

        return "District found ";
    }

    @PostMapping("/plantationAreaAndSlope")
    public String plantationArea(@RequestBody UserPlantationCreatingDTO districtPlantation) {

        Double area = districtPlantation.getArea();
        Integer landSlope = districtPlantation.getLandSlope();
        System.out.println("Received Area: " + area + " Received Slope: " + landSlope);

        DistrictPlant.variableSaver(area, landSlope);
        return "Area Enetered " + area;
    }

    @PostMapping("/budgetAndTheTeaPlantsOfTheUser")
    public String budgetOfTheUser(@RequestBody UserPlantationCreatingDTO districtPlantation) {

        Double budget = districtPlantation.getBudget();
        Double teaPlantsUser = districtPlantation.getTeaPlantsUser();
        System.out.println("Received Budget: " + budget + " Received TeaPlants: " + teaPlantsUser);

        DistrictPlant.variableSaver(budget, teaPlantsUser);

        return "Enetered Budget" + budget + " Enetered TeaPlants" + teaPlantsUser;
    }

    @PostMapping("/budgetRecommendation")
    public ResponseEntity<List<Integer>> budgetRecommendation(UserPlantationCreatingDTO districtPlantation) {

        System.out.println("Started Calculating The Best Plan For The User");
        List<Integer> budgets = new ArrayList<>();
        budgets.addAll(DistrictPlant.recommendedBudgetCalculator(districtPlantation));
        budgets.addAll(DistrictPlant.userGivenDataBudgetCalculator(districtPlantation));

        return ResponseEntity.ok(budgets);
        
    }

    @PostMapping("/plantationCreation")
    public String plantationCreation(@RequestBody UserPlantationCreatingDTO districtPlantation) {

        Integer userChoice = districtPlantation.getUserChoice();
        System.out.println("Recieved Users Choice. User Chose : " + userChoice + " as his budget plan");

        // DistrictPlant.saveUserChoice(userChoice);
        return DistrictPlant.plantationCreation(userChoice);
    }
}