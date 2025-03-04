package com.growth_tracker.growth_tracker.dto;

import lombok.Data;

@Data
public class PlantDto {

    private Long id;
    private String name;
    private Double currentHeight;
    private String status;


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
}
