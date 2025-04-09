package com.EverTea.EverTea.ViewPlantations.entity;


import java.time.LocalDateTime;



public class PlantationEntity {


    private long plantationId;


    private LocalDateTime plantationStartDateTime;


    private String location;



    public PlantationEntity(long plantationId, LocalDateTime plantationStartDateTime, String location) {
        this.plantationId = plantationId;
        this.plantationStartDateTime = plantationStartDateTime;
        this.location = location;
    }

    public long getPlantationId() {
        return plantationId;
    }

    public void setPlantaionId(long plantationId) {
        this.plantationId = plantationId;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public LocalDateTime getPlantationStartDateTime() {
        return plantationStartDateTime;
    }

    public void setPlantationStartDateTime(LocalDateTime plantationStartDateTime) {
        this.plantationStartDateTime = plantationStartDateTime;
    }
}
