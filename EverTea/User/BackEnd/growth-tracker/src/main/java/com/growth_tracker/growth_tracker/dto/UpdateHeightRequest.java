package com.growth_tracker.growth_tracker.dto;

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
