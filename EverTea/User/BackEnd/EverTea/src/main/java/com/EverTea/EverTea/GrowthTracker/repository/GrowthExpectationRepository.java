package com.EverTea.EverTea.GrowthTracker.repository;

import com.EverTea.EverTea.GrowthTracker.model.GrowthExpectation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface GrowthExpectationRepository extends JpaRepository<GrowthExpectation, Long> {
    Optional<GrowthExpectation> findByPlantIdAndMonthNumber(Long plantId, Integer monthNumber);
}
