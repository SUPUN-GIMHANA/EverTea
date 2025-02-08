package com.user.user.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.user.user.DTO.UserPlantationCreatingDTO;
import com.user.user.Repository.UserPlantationCreatingRepo;

@Service
public class UserPlantationCreatingService {

    @Autowired
    private UserPlantationCreatingRepo plantationCreation;

    public String districtChecker(String district) {
        plantationCreation.districtCheckerMain(district);

        UserPlantationCreatingDTO teaModel = plantationCreation.recomendedTeaPlantMain(district);
        if (teaModel == null) {
            return "No recommended Tea Models found";
        }

        plantationCreation.recomendedTeaPlantSubs(district);
        return "Recommended Tea Models for " + district + " is " + teaModel.getTeaNameMainDTO();
    }

    // Recommended Tea Plantation Budget Calculation and User Given Budget Calculation
    public String recommendedBudgetCalculator(String district, Double area, Double avgAreaForATeaPlant, Integer landSlope, Double teaModelPrice) {

        Integer plantsForTheLand = (area.intValue()*4047) / avgAreaForATeaPlant.intValue() ;
        Integer plants = 500*area.intValue();
        Integer extraPlants = plantsForTheLand - plants;
        System.out.println(avgAreaForATeaPlant + area + district + landSlope + plantsForTheLand+ "\n" + "Recommended Plants" + plants + " Extra Plants" + extraPlants);

        plantationCreation.teaModelPrice(teaModelPrice);
        
        Integer estimatedCost = plants * teaModelPrice.intValue();
        System.out.println(estimatedCost);
        return null;
    }
}