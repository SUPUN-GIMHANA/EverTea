package model;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
public class Plantation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long plantationId;

    @Column(nullable = false) // Non-nullable date
    private LocalDate plantationStartDate;

    @Column(nullable = false, length = 100) // Plantation name with max length 100
    private String plantationName;

    @Column(nullable = false, length = 10) // Tea variation like 2026,2032
    private String teaVariation;

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

//    public LocalDate getPlantationStartDate() {
//        return plantationStartDate;
//    }
//
//    public void setPlantationStartDate(LocalDate plantationStartDate) {
//        this.plantationStartDate = plantationStartDate;
//    }
//
//    public String getPlantationName() {
//        return plantationName;
//    }
//
//    public void setPlantationName(String plantationName) {
//        this.plantationName = plantationName;
//    }
//
//    public Integer getTeaVariation() {
//        return teaVariation;
//    }
//
//    public void setTeaVariation(Integer teaVariation) {
//        this.teaVariation = teaVariation;
//    }
//
//    public String getLocation() {
//        return location;
//    }
//
//    public void setLocation(String location) {
//        this.location = location;
//    }
//
//    public Double getPlantationSize() {
//        return plantationSize;
//    }
//
//    public void setPlantationSize(Double plantationSize) {
//        this.plantationSize = plantationSize;
//    }
//
//    public Double getAmount() {
//        return amount;
//    }
//
//    public void setAmount(Double amount) {
//        this.amount = amount;
//    }
//
//    public String getPlantationAge() {
//        return plantationAge;
//    }
//
//    public void setPlantationAge(String plantationAge) {
//        this.plantationAge = plantationAge;
//    }
//
//    public Double getPlantationAngle() {
//        return plantationAngle;
//    }
//
//    public void setPlantationAngle(Double plantationAngle) {
//        this.plantationAngle = plantationAngle;
//    }
//
//    public String getObstacleArea() {
//        return obstacleArea;
//    }
//
//    public void setObstacleArea(String obstacleArea) {
//        this.obstacleArea = obstacleArea;
//    }
}
