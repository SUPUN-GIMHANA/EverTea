package com.growth_tracker.growth_tracker.model;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "plants")
@Data
public class Plant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @OneToMany(mappedBy = "plant", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<GrowthRecord> growthRecords = new ArrayList<>();

    @OneToMany(mappedBy = "plant", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<GrowthExpectation> growthExpectations = new ArrayList<>();

    @CreationTimestamp
    private LocalDateTime createdAt;

    @UpdateTimestamp
    private LocalDateTime updatedAt;

    public Plant(Long id, String name, List<GrowthRecord> growthRecords, List<GrowthExpectation> growthExpectations, LocalDateTime createdAt, LocalDateTime updatedAt) {
        this.id = id;
        this.name = name;
        this.growthRecords = growthRecords;
        this.growthExpectations = growthExpectations;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    public Plant() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<GrowthRecord> getGrowthRecords() {
        return growthRecords;
    }

    public void setGrowthRecords(List<GrowthRecord> growthRecords) {
        this.growthRecords = growthRecords;
    }

    public List<GrowthExpectation> getGrowthExpectations() {
        return growthExpectations;
    }

    public void setGrowthExpectations(List<GrowthExpectation> growthExpectations) {
        this.growthExpectations = growthExpectations;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(LocalDateTime updatedAt) {
        this.updatedAt = updatedAt;
    }
}
