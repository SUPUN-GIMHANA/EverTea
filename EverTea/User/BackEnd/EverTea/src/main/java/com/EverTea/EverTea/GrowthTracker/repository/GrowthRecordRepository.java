package com.EverTea.EverTea.GrowthTracker.repository;

import com.EverTea.EverTea.GrowthTracker.model.GrowthRecord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Repository
public interface GrowthRecordRepository extends JpaRepository<GrowthRecord, Long> {
    List<GrowthRecord> findByPlantIdOrderByRecordDateDesc(Long plantId);

    @Query("SELECT g FROM GrowthRecord g WHERE g.plant.id = :plantId ORDER BY g.recordDate DESC LIMIT 1")
    Optional<GrowthRecord> findLatestByPlantId(Long plantId);

    Optional<GrowthRecord> findByPlantIdAndRecordDate(Long plantId, LocalDate recordDate);
}
