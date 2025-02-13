package com.growth_tracker.growth_tracker.service;

import com.growth_tracker.growth_tracker.dto.GrowthRequestDTO;
import com.growth_tracker.growth_tracker.dto.GrowthResponseDTO;
import com.growth_tracker.growth_tracker.entity.GrowthRecord;
import com.growth_tracker.growth_tracker.repository.GrowthRecordRepository;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class GrowthTrackerService {

    private final GrowthRecordRepository growthRecordRepository;

    public GrowthTrackerService(GrowthRecordRepository growthRecordRepository) {
        this.growthRecordRepository = growthRecordRepository;
    }


    /**
     * Compare user entered height with default height from database
     */
    public GrowthResponseDTO compareHeight(GrowthRequestDTO requestDTO){
        GrowthRecord record = growthRecordRepository.findByPlantationIdAndMonth(requestDTO.getPlantationID(), requestDTO.getMonth());
        if(record==null){
            return new GrowthResponseDTO(requestDTO.getPlantationID(), requestDTO.getMonth(), requestDTO.getHeight(), 0.0, "No data available.");
        }

        String message = (requestDTO.getHeight()<record.getDefaultHeight())?"Action needed" : "No Action needed!";
        return new GrowthResponseDTO(requestDTO.getPlantationID(), requestDTO.getMonth(), requestDTO.getHeight(), record.getDefaultHeight(), message);

    }

    /**
     * Logs plantation height automatically at month-end.
     */
    @Scheduled(cron = "0 59 23 L * ?")  // Runs at 11:59 PM on the last day of the month
    public void logMonthlyHeight() {
        int currentMonth = LocalDate.now().getMonthValue();
        List<GrowthRecord> records = growthRecordRepository.findAll();
        for (GrowthRecord record : records) {
            if (record.getMonth() == currentMonth && record.getLoggedHeight() == null) {
                double currentHeight = fetchCurrentHeight(record.getPlantationId());
                String logMessage = (currentHeight < record.getDefaultHeight()) ? "Growth below expected." : "On track!";
                record.setLoggedHeight(currentHeight);
                record.setLogMessage(logMessage);
                growthRecordRepository.save(record);
            }
        }
    }

    private double fetchCurrentHeight(Long plantationId) {
        return 100.0; // Simulated; replace with actual API call
    }


}
