package com.nethum.ecom.testing.model;

import jakarta.persistence.*;

@Entity
public class TeaType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long teaTypeId;

    @Column(nullable = false, unique = true, length = 50)
    private String name;

    @Column(nullable = false)
    private int lifecycleWeeks;

    @Column(nullable = false)
    private int wateringIntervalDays;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String fertilizerSchedule;

    public Long getTeaTypeId() {
        return teaTypeId;
    }

    public void setTeaTypeId(Long teaTypeId) {
        this.teaTypeId = teaTypeId;
    }

    public String getFertilizerSchedule() {
        return fertilizerSchedule;
    }

    public void setFertilizerSchedule(String fertilizerSchedule) {
        this.fertilizerSchedule = fertilizerSchedule;
    }

    public int getWateringIntervalDays() {
        return wateringIntervalDays;
    }

    public void setWateringIntervalDays(int wateringIntervalDays) {
        this.wateringIntervalDays = wateringIntervalDays;
    }

    public int getLifecycleWeeks() {
        return lifecycleWeeks;
    }

    public void setLifecycleWeeks(int lifecycleWeeks) {
        this.lifecycleWeeks = lifecycleWeeks;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "TeaType{" +
                "teaTypeId=" + teaTypeId +
                ", name='" + name + '\'' +
                ", lifecycleWeeks=" + lifecycleWeeks +
                ", wateringIntervalDays=" + wateringIntervalDays +
                ", fertilizerSchedule='" + fertilizerSchedule + '\'' +
                '}';
    }
}
