package com.EverTea.EverTea.GrowthTracker.dto;

import lombok.Data;

@Data
public class UpdateHeightRequest {

    private Double height;


    public Double getHeight() {
        return height;
    }

    public void setHeight(Double height) {
        this.height = height;
    }
}
