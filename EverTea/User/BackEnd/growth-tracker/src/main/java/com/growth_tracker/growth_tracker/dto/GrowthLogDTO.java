package com.growth_tracker.growth_tracker.dto;

public class GrowthLogDTO {
    private Long plantationId;
    private int month;
    private double loggedHeight;
    private String logMessage;


    public GrowthLogDTO() {
    }

    public GrowthLogDTO(Long plantationId, int month, double loggedHeight, String logMessage) {
        this.plantationId = plantationId;
        this.month = month;
        this.loggedHeight = loggedHeight;
        this.logMessage = logMessage;
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

    public double getLoggedHeight() {
        return loggedHeight;
    }

    public void setLoggedHeight(double loggedHeight) {
        this.loggedHeight = loggedHeight;
    }

    public String getLogMessage() {
        return logMessage;
    }

    public void setLogMessage(String logMessage) {
        this.logMessage = logMessage;
    }
}


