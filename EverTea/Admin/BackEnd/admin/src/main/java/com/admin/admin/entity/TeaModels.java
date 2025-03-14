package com.admin.admin.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "TeaModels")
public class TeaModels {
    @Id
    @Column(name = "tea_Id")
    private int teaId;

    @Column(name = "tea_Name")
    private String teaName;

    @Column(name = "district")
    private String district;

    @Column(name = "price")
    private int price;

    public TeaModels() {
    }

    public TeaModels(int teaId, String teaName, String district, int price) {
        this.teaId = teaId;
        this.teaName = teaName;
        this.district = district;
        this.price = price;
    }

    public int getTeaId() {
        return teaId;
    }

    public void setTeaId(int teaId) {
        this.teaId = teaId;
    }

    public String getTeaName() {
        return teaName;
    }

    public void setTeaName(String teaName) {
        this.teaName = teaName;
    }

    public String getDistrict() {
        return district;
    }

    public void setDistrict(String district) {
        this.district = district;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }
}
