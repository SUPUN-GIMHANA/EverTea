package com.growth_tracker.growth_tracker.model;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Entity
@Table(name = "growth_expectations")
@Data
public class GrowthExpectation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "plant_id")
    private Plant plant;

    private Integer monthNumber;  // 1-12 for Jan-Dec

    private Double expectedHeight;

    @CreationTimestamp
    private LocalDateTime createdAt;
}
