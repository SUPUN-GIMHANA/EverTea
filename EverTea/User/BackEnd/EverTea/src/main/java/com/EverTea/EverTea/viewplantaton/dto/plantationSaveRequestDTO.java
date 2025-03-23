package com.EverTea.EverTea.viewplantaton.dto;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
public class plantationSaveRequestDTO {

    private int plantaionId;
    private String date;
    private String area;

    public int getPlantaionId() {
        return plantaionId;
    }

    public void setPlantaionId(int plantaionId) {
        this.plantaionId = plantaionId;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getArea() {
        return area;
    }

    public void setArea(String area) {
        this.area = area;
    }


}
