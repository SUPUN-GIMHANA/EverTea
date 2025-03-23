package com.EverTea.EverTea.viewplantaton.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "view_plantation")
public class plantationEntity {

    @Id
    @Column(name = "plantaion_id" , nullable = false)
    private int plantaionId;

    @Column(name = "date" , nullable = false)
    private String date;

    @Column(name = "area" , nullable = false)
    private String area;



    public plantationEntity() {
    }

    public plantationEntity(int plantaionId, String date, String area) {
        this.setPlantaionId(plantaionId);
        this.setDate(date);
        this.setArea(area);
    }

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
