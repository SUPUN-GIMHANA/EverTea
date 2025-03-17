package com.EverTea.EverTea.GrowthTracker.repository;

import com.EverTea.EverTea.GrowthTracker.model.GrowthExpectation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface GrowthExpectationRepository extends JpaRepository<GrowthExpectation, Long> {
    Optional<GrowthExpectation> findByPlantIdAndMonthNumber(Long plantId, Integer monthNumber);
}
