package com.EverTea.EverTea.PlantationJourneyInstructions.model;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
public class Plantation {

    @Id //primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY) //plantationId will be auto generated
    private long plantationId;

    @ManyToOne
    @JoinColumn(name = "tea_type_id", nullable = false) //foriegn fey from tea_type table
    private TeaType teaType;

    @Column(nullable = false) // Non-nullable date
    private LocalDateTime plantationStartDateTime;  //The date and time of plantation created

    @Column(nullable = false, length = 100) // Plantation name with max length 100
    private String plantationName;  //Plantation Name


    @Column(nullable = false, length = 100) // Location as string
    private String location;

    @Column(nullable = false) // Plantation size in acres
    private Double plantationSize;

    @Column(nullable = false) // Amount of plants in plantation
    private int plantasCount;

    @Column(nullable = false) // Plantation age (1-96 weeks) by days
    private double plantationAge;

    @Column(nullable = false) // Plantation angle as percentage
    private Double plantationAngle;

    @Column(nullable = false, length = 20) // Obstacle area in percentage
    private String obstacleArea;

    // Getters and setters
    public Long getPlantationId() {
        return plantationId;
    }

    public void setPlantationId(Long plantationId) {
        this.plantationId = plantationId;
    }

    public LocalDateTime getPlantationStartDateTime() {
        return plantationStartDateTime;
    }

    public void setPlantationStartDateTime(LocalDateTime plantationStartDateTime) {
        this.plantationStartDateTime = plantationStartDateTime;
    }

    public String getPlantationName() {
        return plantationName;
    }

    public void setPlantationName(String plantationName) {
        this.plantationName = plantationName;
    }

    public TeaType getTeaType() {
        return teaType;
    }

    public void setTeaType(TeaType teaType) {
        this.teaType = teaType;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public Double getPlantationSize() {
        return plantationSize;
    }

    public void setPlantationSize(Double plantationSize) {
        this.plantationSize = plantationSize;
    }


    public double getPlantationAge() {
        return plantationAge;
    }

    public void setPlantationAge(double plantationAge) {
        this.plantationAge = plantationAge;
    }

    public Double getPlantationAngle() {
        return plantationAngle;
    }

    public void setPlantationAngle(Double plantationAngle) {
        this.plantationAngle = plantationAngle;
    }

    public String getObstacleArea() {
        return obstacleArea;
    }

    public void setObstacleArea(String obstacleArea) {
        this.obstacleArea = obstacleArea;
    }
}
