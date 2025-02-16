package com.user.user.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.ListIterator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.user.user.DTO.UserPlantationCreatingDTO;
import com.user.user.Repository.UserPlantationCreatingRepo;



@Service
public class UserPlantationCreatingService {

    @Autowired
    private UserPlantationCreatingRepo plantationCreation;

    //Varibles for this class
    
    private String lastDistrict; // Store last received district
    private Double lastArea; // Store last received area
    private Integer lastLandSlope; // Store last received landSlope
    private Integer lastTeaModel; // Store last received teaModel
    private Integer plantsForTheLand; // Store last received plants
    

    public List<String> districtChecker(String district) {
        this.lastDistrict = district; // Save district for later use in budgetrecommendation
        plantationCreation.districtCheckerMain(district);

        UserPlantationCreatingDTO teaModelMain = plantationCreation.recomendedTeaPlantMain(district);
        if (teaModelMain == null) {
            return null;
        }

        UserPlantationCreatingDTO teaModelSubs = plantationCreation.recomendedTeaPlantSubs(district);
        System.out.println(teaModelSubs.getTeaNamesSubDTO().size());
        // Array of all tea plant models

        List<String> teaList = new ArrayList<>();
        teaList.add(teaModelMain.getTeaNameMainDTO()); // Main tea model
        teaList.addAll(teaModelSubs.getTeaNamesSubDTO()); // Sub tea models


        return teaList;
    }

    // Saving other variables 
    public void variableSaver(Integer teaModel) {
        this.lastTeaModel = teaModel;
        System.out.println(lastTeaModel);
    }
    public void variableSaver(Double area, Integer landSlope){
        this.lastArea = area;
        this.lastLandSlope = landSlope;
        System.out.println(lastArea + lastLandSlope);
    }
    

    // Recommended Tea Plantation Budget Calculation and User Given Budget Calculation
    public String recommendedBudgetCalculator(UserPlantationCreatingDTO avgAreaForThePlant) {

        Integer avgAreaForTheplant = avgAreaForThePlant.getAvgAreaForATeaPlant().intValue();
        //Turns acre to meters to calculate uses squres for plant areas
        Integer plantsForTheLand = (lastArea.intValue()*4047) / (avgAreaForTheplant*avgAreaForTheplant);

        UserPlantationCreatingDTO avgplants = plantationCreation.avgPlantsForADistrict(lastDistrict);

        //Calculated using slope with district and with the given area to give an accurate number of plants
        Integer plants = avgplants.getAvgPlantsForADistrict()*lastArea.intValue();
        Integer extraPlants = plantsForTheLand - plants;
        System.out.println(extraPlants);
        System.out.println(avgAreaForTheplant + lastArea + lastDistrict + lastLandSlope + plantsForTheLand+ "\n" + "Recommended Plants : " + plants + " +- " + extraPlants);

        this.plantsForTheLand = plants;
        UserPlantationCreatingDTO teaModelPriceValue = plantationCreation.teaModelPrice(lastTeaModel);
        
        Integer estimatedCost = plants * teaModelPriceValue.getTeaModelPrice().intValue();
        return "Recommended Plants : " + plants + " +- " + extraPlants + "\nEstimated Cost for TeaPlants Rs: " + estimatedCost;
    }

    // User Given Budget Calculation
    public String userGivenDataBudgetCalculator(UserPlantationCreatingDTO avgAreaForThePlant){

        Integer avgAreaForTheplant = avgAreaForThePlant.getAvgAreaForATeaPlant().intValue();
        //Turns acre to meters to calculate uses squres for plant areas
        Integer plantsForTheLand = (lastArea.intValue()*4047) / (avgAreaForTheplant*avgAreaForTheplant);

        UserPlantationCreatingDTO avgplants = plantationCreation.avgPlantsForADistrict(lastDistrict);
        //Calculated using slope with district and with the given area to give an accurate number of plants
        Integer plants = avgplants.getAvgPlantsForADistrict()*lastArea.intValue();
        System.out.println(plants);
        System.out.println(avgAreaForTheplant + lastArea + lastDistrict + lastLandSlope + plantsForTheLand+ "\n" + "Recommended Plants : " + plants + " +- " + extraPlants);

        this.plantsForTheLand = plants;
        UserPlantationCreatingDTO teaModelPriceValue = plantationCreation.teaModelPrice(lastTeaModel);
        
        Integer userCost = plants * teaModelPriceValue.getTeaModelPrice().intValue();

        return "Your Plants : "+"Recommended Plants : " + plants + " +- " + extraPlants + "\nEstimated Cost for TeaPlants Rs: " + estimatedCost;
    }


    public String plantationCreation(){

        Integer userid = 1;
        String location = lastDistrict;
        Integer teamodelid = lastTeaModel;
        Integer plants = plantsForTheLand;

        return plantationCreation.plantationCreationRepo(userid, location, plants, teamodelid);
    }
}