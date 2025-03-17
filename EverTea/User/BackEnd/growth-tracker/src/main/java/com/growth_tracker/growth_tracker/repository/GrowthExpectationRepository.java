package com.growth_tracker.growth_tracker.repository;

import com.growth_tracker.growth_tracker.model.GrowthExpectation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface GrowthExpectationRepository extends JpaRepository<GrowthExpectation, Long> {
    Optional<GrowthExpectation> findByPlantIdAndMonthNumber(Long plantId, Integer monthNumber);
}
