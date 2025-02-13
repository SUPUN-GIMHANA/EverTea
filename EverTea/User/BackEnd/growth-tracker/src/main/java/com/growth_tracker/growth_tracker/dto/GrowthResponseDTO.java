package com.growth_tracker.growth_tracker.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
public class GrowthResponseDTO {

    private Long plantationId;
    private int month;
    private double enteredHeight;
    private double defaultHeight;
    private String message;

    public GrowthResponseDTO() {
    }

    public GrowthResponseDTO(Long plantationId, int month, double enteredHeight, double defaultHeight, String message) {
        this.plantationId = plantationId;
        this.month = month;
        this.enteredHeight = enteredHeight;
        this.defaultHeight = defaultHeight;
        this.message = message;
    }

    public Long getPlantationId() {
        return plantationId;
    }

    public void setPlantationId(Long plantationId) {
        this.plantationId = plantationId;
    }

    public int getMonth() {
        return month;
    }

    public void setMonth(int month) {
        this.month = month;
    }

    public double getEnteredHeight() {
        return enteredHeight;
    }

    public void setEnteredHeight(double enteredHeight) {
        this.enteredHeight = enteredHeight;
    }

    public double getDefaultHeight() {
        return defaultHeight;
    }

    public void setDefaultHeight(double defaultHeight) {
        this.defaultHeight = defaultHeight;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
