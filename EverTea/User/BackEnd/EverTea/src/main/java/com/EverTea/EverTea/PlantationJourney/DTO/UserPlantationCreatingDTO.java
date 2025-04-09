package com.EverTea.EverTea.PlantationJourney.DTO;


import java.util.ArrayList;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserPlantationCreatingDTO {


    //District Page
    @JsonProperty("district")
    private String district;
    private String teaNameMainDTO;
    private Integer teaModel;
    private String teaModelName;
    // private String teaNameSubDTO;
    private ArrayList<String> teaNamesSubDTO = new ArrayList<>();
    private ArrayList<Integer> teaSubIds = new ArrayList<>(); // New field to store tea IDs


    //Land Page
    @JsonProperty("area")
    private Double area;
    private Integer landSlope;


    //Budget Page
    @JsonProperty("budget")
    
    private Double budget;
    private Double teaPlantsUser;

    private String plantationName;

    //Budget Recommendation Page
    private String budgetPlanSystem;
    private String budgetPlanUser;
    private Double avgAreaForATeaPlant = 3.0;
    private Double teaModelPrice = 0.0;
    private Integer avgPlantsForADistrict;

    public String getDistrict() {
        return district;
    }

    public void setDistrict(String district) {
        this.district = district;
    }

    public String getTeaNameMainDTO() {
        return teaNameMainDTO;
    }

    public void setTeaNameMainDTO(String teaNameMainDTO) {
        this.teaNameMainDTO = teaNameMainDTO;
    }

    public Integer getTeaModel() {
        return teaModel;
    }

    public void setTeaModel(Integer teaModel) {
        this.teaModel = teaModel;
    }

    public String getTeaModelName() {
        return teaModelName;
    }

    public void setTeaModelName(String teaModelName) {
        this.teaModelName = teaModelName;
    }

    public ArrayList<String> getTeaNamesSubDTO() {
        return teaNamesSubDTO;
    }

    public void setTeaNamesSubDTO(ArrayList<String> teaNamesSubDTO) {
        this.teaNamesSubDTO = teaNamesSubDTO;
    }

    public ArrayList<Integer> getTeaSubIds() {
        return teaSubIds;
    }

    public void setTeaSubIds(ArrayList<Integer> teaSubIds) {
        this.teaSubIds = teaSubIds;
    }

    public Double getArea() {
        return area;
    }

    public void setArea(Double area) {
        this.area = area;
    }

    public Integer getLandSlope() {
        return landSlope;
    }

    public void setLandSlope(Integer landSlope) {
        this.landSlope = landSlope;
    }

    
    public String getPlantationName() {
        return plantationName;
    }
    public Double getBudget() {
        return budget;
    }

    public void setBudget(Double budget) {
        this.budget = budget;
    }

    public Double getTeaPlantsUser() {
        return teaPlantsUser;
    }

    public void setTeaPlantsUser(Double teaPlantsUser) {
        this.teaPlantsUser = teaPlantsUser;
    }

    public String getBudgetPlanSystem() {
        return budgetPlanSystem;
    }

    public void setBudgetPlanSystem(String budgetPlanSystem) {
        this.budgetPlanSystem = budgetPlanSystem;
    }

    public String getBudgetPlanUser() {
        return budgetPlanUser;
    }

    public void setBudgetPlanUser(String budgetPlanUser) {
        this.budgetPlanUser = budgetPlanUser;
    }

    public Double getAvgAreaForATeaPlant() {
        return avgAreaForATeaPlant;
    }

    public void setAvgAreaForATeaPlant(Double avgAreaForATeaPlant) {
        this.avgAreaForATeaPlant = avgAreaForATeaPlant;
    }

    public Double getTeaModelPrice() {
        return teaModelPrice;
    }

    public void setTeaModelPrice(Double teaModelPrice) {
        this.teaModelPrice = teaModelPrice;
    }

    public Integer getAvgPlantsForADistrict() {
        return avgPlantsForADistrict;
    }

    public void setAvgPlantsForADistrict(Integer avgPlantsForADistrict) {
        this.avgPlantsForADistrict = avgPlantsForADistrict;
    }

    public ArrayList<String> getPlantationUserData() {
        return plantationUserData;
    }

    public void setPlantationUserData(ArrayList<String> plantationUserData) {
        this.plantationUserData = plantationUserData;
    }

    public Integer getUserChoice() {
        return userChoice;
    }

    public void setUserChoice(Integer userChoice) {
        this.userChoice = userChoice;
    }

    //Plantation Creating Data Array
    private ArrayList<String> plantationUserData = new ArrayList<>();
    private Integer userChoice;

     // Nested class to hold tea ID and name
     @Data
     @AllArgsConstructor
     @NoArgsConstructor
     public static class TeaInfo {
         public int getTeaId() {
             return teaId;
         }

         public void setTeaId(int teaId) {
             this.teaId = teaId;
         }

         public String getTeaName() {
             return teaName;
         }

         public void setTeaName(String teaName) {
             this.teaName = teaName;
         }

         private int teaId;
         private String teaName;
     }
}