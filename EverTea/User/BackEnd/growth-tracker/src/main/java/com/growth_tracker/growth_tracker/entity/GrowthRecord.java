package com.growth_tracker.growth_tracker.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "growth_records")
@Data
public class GrowthRecord {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long plantationId;   // ID for each plantation
    private int month;           // Month number (1-12)
    private double defaultHeight; // Expected height for that month
    private Double loggedHeight;  // Height logged at end of month (nullable)
    private String logMessage;    // Log message (nullable)

    public GrowthRecord() {
    }

    public GrowthRecord(Long id, Long plantationId, int month, double defaultHeight, Double loggedHeight, String logMessage) {
        this.id = id;
        this.plantationId = plantationId;
        this.month = month;
        this.defaultHeight = defaultHeight;
        this.loggedHeight = loggedHeight;
        this.logMessage = logMessage;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getPlantationId() {
        return plantationId;
    }

    public void setPlantationId(Long plantationId) {
        this.plantationId = plantationId;
    }

    public int getMonth() {
        return month;
    }

    public void setMonth(int month) {
        this.month = month;
    }

    public double getDefaultHeight() {
        return defaultHeight;
    }

    public void setDefaultHeight(double defaultHeight) {
        this.defaultHeight = defaultHeight;
    }

    public Double getLoggedHeight() {
        return loggedHeight;
    }

    public void setLoggedHeight(Double loggedHeight) {
        this.loggedHeight = loggedHeight;
    }

    public String getLogMessage() {
        return logMessage;
    }

    public void setLogMessage(String logMessage) {
        this.logMessage = logMessage;
    }
}
