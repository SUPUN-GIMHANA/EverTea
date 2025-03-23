package com.EverTea.EverTea.AdvancedWeather.DTO;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class PlantationData {

    @Id
    private int id;

    private String plantationAge;

    public PlantationData(int id, String plantationAge) {
        this.id = id;
        this.plantationAge = plantationAge;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getPlantationAge() {
        return plantationAge;
    }

    public void setPlantationAge(String plantationAge) {
        this.plantationAge = plantationAge;
    }
}
