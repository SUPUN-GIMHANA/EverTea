package com.nethum.ecom.testing.model;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
public class Weather {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long weatherId;

    @Column(nullable = false, length = 100)
    private String location;

    @Column(nullable = false)
    private LocalDate date;

    @Column(name = "`weather_condition`", nullable = false)
    private int condition; //1 = Rain, 2 = small Rain, 3 = Dry

    @Column(nullable = false, length = 255)
    private String description;

    public Long getWeatherId() {
        return weatherId;
    }

    public void setWeatherId(Long weatherId) {
        this.weatherId = weatherId;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public int getCondition() {
        return condition;
    }

    public void setCondition(int condition) {
        this.condition = condition;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
