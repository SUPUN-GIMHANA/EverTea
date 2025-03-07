package com.EverTea.EverTea.PlantationJourney.Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.EverTea.EverTea.PlantationJourney.DTO.UserPlantationCreatingDTO;
import com.EverTea.EverTea.PlantationJourney.Repository.UserPlantationCreatingRepo;



@Service
public class UserPlantationCreatingService {

    @Autowired
    private UserPlantationCreatingRepo plantationCreation;

    //Varibles for this class
    
    private String lastDistrict; // Store last received district
    private Double lastArea; // Store last received area
    private Integer lastLandSlope; // Store last received landSlope
    private Integer lastTeaModel; // Store last received teaModel
    private String lastTeaModelName; // Store last received teaModel
    private Integer plantsForTheLand; // Store last received plants
    private Double userPlantationPlantsInput;
    private Double userPlantationBudgetInput;
    private Integer plantsForTheLandREC; // Store last received plants
    private Integer plantsForTheLandUSER; // Store last received plants
    private Integer userChoiceForPlantationCreation; // Stores User's Choice
    private Integer cost; //Stores Cost for the plantation Universal
    private Integer userid;
    private String location;
    private Integer plants;
    private Integer teamodelid;
    private Integer recCost; //Stores Cost for the plantation by System
    private Integer userCost; //Stores Cost for the plantation by user




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
    public void variableSaver(String teaModelName) {
        this.lastTeaModelName = teaModelName;
        System.out.println(lastTeaModelName);
    }
    public void variableSaver(Double area, Integer landSlope){
        this.lastArea = area;
        this.lastLandSlope = landSlope;
        System.out.println(lastArea+ " "+ lastLandSlope);
    }
    public void variableSaver(Double budget, Double teaPlantsUser){
        this.userPlantationPlantsInput = teaPlantsUser;
        this.userPlantationBudgetInput = budget;
        System.out.println(userPlantationPlantsInput + userPlantationBudgetInput);
    }
    public void saveUserChoice(Integer userChoice){
        if (userChoice == null) {
            throw new IllegalArgumentException("User choice cannot be null");
        }
        this.userChoiceForPlantationCreation = userChoice;
        System.out.println(userChoiceForPlantationCreation);
    }
    
    

    // Recommended Tea Plantation Budget Calculation and User Given Budget Calculation
    public List<Integer> recommendedBudgetCalculator(UserPlantationCreatingDTO avgAreaForThePlant) {

        Integer avgAreaForTheplant = avgAreaForThePlant.getAvgAreaForATeaPlant().intValue();
        //Turns acre to meters to calculate uses squres for plant areas
        Integer plantsForTheLand = (lastArea.intValue()*4047) / (avgAreaForTheplant*avgAreaForTheplant);

        UserPlantationCreatingDTO avgplants = plantationCreation.avgPlantsForADistrict(lastDistrict);

        //Calculated using slope with district and with the given area to give an accurate number of plants
        Integer plants = avgplants.getAvgPlantsForADistrict()*lastArea.intValue();
        Integer extraPlants = plantsForTheLand - plants;
        System.out.println(extraPlants);
        System.out.println(avgAreaForTheplant + lastArea + lastDistrict + lastLandSlope + plantsForTheLand+ "\n" + "Recommended Plants : " + plants + " +- " + extraPlants);

        this.plantsForTheLandREC = plants;
        UserPlantationCreatingDTO teaModelPriceValue = plantationCreation.teaModelPrice(lastTeaModelName);
        
        Integer estimatedCost = plants * teaModelPriceValue.getTeaModelPrice().intValue();
        this.recCost = estimatedCost;
        List<Integer> recommendedBudget = new ArrayList<>();
        recommendedBudget.add(plants);
        recommendedBudget.add(extraPlants);
        recommendedBudget.add(estimatedCost);
        System.out.println("Recommended Plants : " + plants + " +- " + extraPlants + "\nEstimated Cost for TeaPlants Rs: " + estimatedCost);
        return recommendedBudget;
    }

    // User Given Budget Calculation
    public List<Integer> userGivenDataBudgetCalculator(UserPlantationCreatingDTO avgAreaForThePlant){

      
        this.plantsForTheLandUSER = userPlantationPlantsInput.intValue();
        UserPlantationCreatingDTO teaModelPriceValue = plantationCreation.teaModelPrice(lastTeaModelName);
        
        Integer userCost = plantsForTheLandUSER * teaModelPriceValue.getTeaModelPrice().intValue();

        List<Integer> userBudget = new ArrayList<>();
        userBudget.add(plantsForTheLandUSER);
        userBudget.add(userCost);

        return userBudget;
    }




    public String plantationCreation(Integer userChoice){

        if (userChoice == null) {
            throw new IllegalArgumentException("User choice cannot be null");
        }else{
            if (userChoice==1){
                this.userid = 1;
                this.location = lastDistrict;
                this.teamodelid = plantationCreation.teaModelIDFinder(lastTeaModelName);
                this.plants = plantsForTheLandREC;
                this.cost = recCost;

            }
            else{
                this.userid = 1;
                this.location = lastDistrict;
                this.teamodelid = plantationCreation.teaModelIDFinder(lastTeaModelName);
                this.plants = plantsForTheLandUSER;
                this.cost = userCost;
            }
        }

        

        return plantationCreation.plantationCreationRepo(userid, location, plants, teamodelid, cost);
    }
}