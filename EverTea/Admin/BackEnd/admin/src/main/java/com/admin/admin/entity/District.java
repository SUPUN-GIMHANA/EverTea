
package com.admin.admin.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "district")
public class District {

    @Id
    @Column(name = "district_id")
    private int districtId;

    @Column(name = "district_name", nullable = false)
    private String districtName;

    @Column(name = "main_plant", nullable = false)
    private String mainPlant;

    @Column(name = "avg_plants", nullable = false)
    private int avgPlants;

    public District() {
    }

    public District(int districtId, String districtName, String mainPlant, int avgPlants) {
        this.setDistrictId(districtId);
        this.setDistrictName(districtName);
        this.setMainPlant(mainPlant);
        this.setAvgPlants(avgPlants);
    }

    public int getDistrictId() {
        return districtId;
    }

    public void setDistrictId(int districtId) {
        this.districtId = districtId;
    }

    public String getDistrictName() {
        return districtName;
    }

    public void setDistrictName(String districtName) {
        this.districtName = districtName;
    }

    public String getMainPlant() {
        return mainPlant;
    }

    public void setMainPlant(String mainPlant) {
        this.mainPlant = mainPlant;
    }

    public int getAvgPlants() {
        return avgPlants;
    }

    public void setAvgPlants(int avgPlants) {
        this.avgPlants = avgPlants;
    }
}
