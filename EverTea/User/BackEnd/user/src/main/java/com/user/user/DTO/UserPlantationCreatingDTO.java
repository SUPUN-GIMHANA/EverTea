package com.user.user.DTO;


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
    // private String teaNameSubDTO;
    private ArrayList<String> teaNameSubDTO = new ArrayList<>();

    //Land Page
    @JsonProperty("area")
    private Double area;
    private Integer landSlope;


    //Budget Page
    @JsonProperty("budget")
    private Double budget;
    private Double teaPlantsUser;



    //Budget Recommendation Page
    private String budgetPlanSystem;
    private String budgetPlanUser;
    private Double avgAreaForATeaPlant = 3.0;
    private Double teaModelPrice = 0.0;


    //Plantation Creating Data Array
    private ArrayList<String> plantationUserData = new ArrayList<>();

}