package com.growth_tracker.growth_tracker.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
public class GrowthRequestDTO {

    private Long plantationID;
    private int month;
    private double height;

    public GrowthRequestDTO() {
    }

    public GrowthRequestDTO(Long plantationID, int month, double height) {
        this.plantationID = plantationID;
        this.month = month;
        this.height = height;
    }

    public Long getPlantationID() {
        return plantationID;
    }

    public void setPlantationID(Long plantationID) {
        this.plantationID = plantationID;
    }

    public int getMonth() {
        return month;
    }

    public void setMonth(int month) {
        this.month = month;
    }

    public double getHeight() {
        return height;
    }

    public void setHeight(double height) {
        this.height = height;
    }
}
