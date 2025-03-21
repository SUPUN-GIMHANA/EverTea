package com.growth_tracker.growth_tracker.dto;

import lombok.Data;

import java.util.List;

@Data
public class PlantDetailsDto {

    private Long id;
    private String name;
    private Double currentHeight;
    private String status;
    private List<Double> growthHistory;
    private List<GrowthRecordDto> previousDetails;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getCurrentHeight() {
        return currentHeight;
    }

    public void setCurrentHeight(Double currentHeight) {
        this.currentHeight = currentHeight;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public List<Double> getGrowthHistory() {
        return growthHistory;
    }

    public void setGrowthHistory(List<Double> growthHistory) {
        this.growthHistory = growthHistory;
    }

    public List<GrowthRecordDto> getPreviousDetails() {
        return previousDetails;
    }

    public void setPreviousDetails(List<GrowthRecordDto> previousDetails) {
        this.previousDetails = previousDetails;
    }
}
