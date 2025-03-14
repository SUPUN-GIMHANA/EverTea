package com.admin.admin.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "teaType")
public class TeaType {

    @Id
    @Column(name = "tea_type_id")
    private int teaTypeId;

    @Column(name = "fertilizer_schedule")
    private String fertilizerSchedule;

    @Column(name = "lifecycle_week")
    private int lifecycleWeek;

    @Column(name = "tea_type_name")
    private String teaName;

    @Column(name = "watering_interval_days")
    private int wateringIntervalDays;

    public TeaType() {
    }

    public TeaType(int teaTypeId, String fertilizerSchedule, int lifecycleWeek, String teaName, int wateringIntervalDays) {
        this.teaTypeId = teaTypeId;
        this.fertilizerSchedule = fertilizerSchedule;
        this.lifecycleWeek = lifecycleWeek;
        this.teaName = teaName;
        this.wateringIntervalDays = wateringIntervalDays;
    }

    public int getTeaTypeId() {
        return teaTypeId;
    }

    public void setTeaTypeId(int teaTypeId) {
        this.teaTypeId = teaTypeId;
    }

    public String getFertilizerSchedule() {
        return fertilizerSchedule;
    }

    public void setFertilizerSchedule(String fertilizerSchedule) {
        this.fertilizerSchedule = fertilizerSchedule;
    }

    public int getLifecycleWeek() {
        return lifecycleWeek;
    }

    public void setLifecycleWeek(int lifecycleWeek) {
        this.lifecycleWeek = lifecycleWeek;
    }

    public String getTeaName() {
        return teaName;
    }

    public void setTeaName(String teaName) {
        this.teaName = teaName;
    }

    public int getWateringIntervalDays() {
        return wateringIntervalDays;
    }

    public void setWateringIntervalDays(int wateringIntervalDays) {
        this.wateringIntervalDays = wateringIntervalDays;
    }
}
