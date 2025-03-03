package com.growth_tracker.growth_tracker.repository;

import com.growth_tracker.growth_tracker.entity.GrowthRecord;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface GrowthRecordRepository extends JpaRepository<GrowthRecord, Long> {
    Optional<GrowthRecord> findByPlantationIdAndMonth(Long plantationId, int month);
    List<GrowthRecord> findByPlantationId(Long plantationId);

}
