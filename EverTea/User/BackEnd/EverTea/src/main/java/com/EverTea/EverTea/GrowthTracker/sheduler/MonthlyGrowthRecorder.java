package com.EverTea.EverTea.GrowthTracker.sheduler;

import com.growth_tracker.growth_tracker.model.GrowthRecord;
import com.growth_tracker.growth_tracker.model.Plant;
import com.growth_tracker.growth_tracker.repository.GrowthRecordRepository;
import com.growth_tracker.growth_tracker.repository.PlantRepository;
import com.growth_tracker.growth_tracker.service.PlantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Component
public class MonthlyGrowthRecorder {

    private final PlantRepository plantRepository;
    private final GrowthRecordRepository growthRecordRepository;
    private final PlantService plantService;

    @Autowired
    public MonthlyGrowthRecorder(
            PlantRepository plantRepository,
            GrowthRecordRepository growthRecordRepository,
            PlantService plantService) {
        this.plantRepository = plantRepository;
        this.growthRecordRepository = growthRecordRepository;
        this.plantService = plantService;
    }

    // Run at midnight on the last day of each month
    @Scheduled(cron = "0 0 0 L * ?")
    @Transactional
    public void recordMonthlyGrowth() {
        List<Plant> plants = plantRepository.findAll();
        LocalDate today = LocalDate.now();

        for (Plant plant : plants) {
            // Check if we already have a record for today
            Optional<GrowthRecord> existingRecord =
                    growthRecordRepository.findByPlantIdAndRecordDate(plant.getId(), today);

            if (existingRecord.isPresent()) {
                continue; // Skip if already recorded today
            }

            // Get the latest record to use its height
            Optional<GrowthRecord> latestRecord =
                    growthRecordRepository.findLatestByPlantId(plant.getId());

            if (latestRecord.isPresent()) {
                Double currentHeight = latestRecord.get().getHeight();
                Double previousHeight = 0.0;

                // Get the record before latest to calculate growth amount
                List<GrowthRecord> records =
                        growthRecordRepository.findByPlantIdOrderByRecordDateDesc(plant.getId());
                if (records.size() > 1) {
                    previousHeight = records.get(1).getHeight();
                }

                // Create new monthly record
                GrowthRecord newRecord = new GrowthRecord();
                newRecord.setPlant(plant);
                newRecord.setRecordDate(today);
                newRecord.setHeight(currentHeight);
                newRecord.setStatus(plantService.evaluatePlantStatus(plant.getId(), currentHeight));
                newRecord.setGrowthAmount("+" + (currentHeight - previousHeight) + " CM");

                growthRecordRepository.save(newRecord);
            }
        }
    }
}