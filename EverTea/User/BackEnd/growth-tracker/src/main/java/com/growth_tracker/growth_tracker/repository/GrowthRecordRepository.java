package com.growth_tracker.growth_tracker.repository;

import com.growth_tracker.growth_tracker.entity.GrowthRecord;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GrowthRecordRepository extends JpaRepository<GrowthRecord, Long> {
    GrowthRecord findByPlantationIdAndMonth(Long plantationId, int month);
}
