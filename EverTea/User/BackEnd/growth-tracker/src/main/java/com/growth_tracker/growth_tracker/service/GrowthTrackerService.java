package com.growth_tracker.growth_tracker.service;

import com.growth_tracker.growth_tracker.dto.GrowthRequestDTO;
import com.growth_tracker.growth_tracker.dto.GrowthResponseDTO;
import com.growth_tracker.growth_tracker.entity.GrowthRecord;
import com.growth_tracker.growth_tracker.repository.GrowthRecordRepository;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class GrowthTrackerService {

    private final GrowthRecordRepository growthRecordRepository;

    public GrowthTrackerService(GrowthRecordRepository growthRecordRepository) {
        this.growthRecordRepository = growthRecordRepository;
    }

    /**
     * Compare user entered height with default height from database
     */
    public GrowthResponseDTO compareHeight(GrowthRequestDTO requestDTO) {
        Optional<GrowthRecord> optionalRecord = growthRecordRepository.findByPlantationIdAndMonth(
                requestDTO.getPlantationID(), requestDTO.getMonth());

        if (optionalRecord.isEmpty()) {
            return new GrowthResponseDTO(
                    requestDTO.getPlantationID(),
                    requestDTO.getMonth(),
                    requestDTO.getHeight(),
                    0.0,
                    "No data available."
            );
        }

        // Retrieve the actual GrowthRecord from Optional
        GrowthRecord record = optionalRecord.get();

        // Compare heights and calculate percentage deviation
        double deviation = ((requestDTO.getHeight() - record.getDefaultHeight()) / record.getDefaultHeight()) * 100;

        String message;
        if (requestDTO.getHeight() < record.getDefaultHeight()) {
            // Growth is below expected
            if (deviation < -20) {
                message = "Urgent action needed! Growth significantly below expected.";
            } else {
                message = "Action needed. Growth below expected level.";
            }
        } else if (requestDTO.getHeight() > record.getDefaultHeight() * 1.2) {
            // Growth is significantly above expected (20% more)
            message = "Note: Growth is above expected levels.";
        } else {
            // Growth is within expected range
            message = "No action needed. Growth on track!";
        }

        // Update the growth record with the logged height
        record.setLoggedHeight(requestDTO.getHeight());
        record.setLogMessage(message);
        growthRecordRepository.save(record);

        return new GrowthResponseDTO(
                requestDTO.getPlantationID(),
                requestDTO.getMonth(),
                requestDTO.getHeight(),
                record.getDefaultHeight(),
                message
        );
    }

    /**
     * Logs plantation height automatically at month-end.
     */
    @Scheduled(cron = "0 59 23 L * ?") // Runs at 11:59 PM on the last day of the month
    public void logMonthlyHeight() {
        int currentMonth = LocalDate.now().getMonthValue();
        List<GrowthRecord> records = growthRecordRepository.findAll();

        for (GrowthRecord record : records) {
            if (record.getMonth() == currentMonth && record.getLoggedHeight() == null) {
                try {
                    // Try to fetch current height from actual data source
                    double currentHeight = fetchCurrentHeight(record.getPlantationId());

                    // Determine status message based on height comparison
                    String logMessage;
                    if (currentHeight < record.getDefaultHeight()) {
                        logMessage = "Growth below expected level.";
                    } else {
                        logMessage = "Growth on track.";
                    }

                    // Update record with actual data
                    record.setLoggedHeight(currentHeight);
                    record.setLogMessage(logMessage);
                    growthRecordRepository.save(record);

                    // Log the operation
                    System.out.println("Monthly growth log created for plantation: " +
                            record.getPlantationId() + ", Month: " + currentMonth);
                } catch (Exception e) {
                    System.err.println("Error logging monthly growth for plantation: " +
                            record.getPlantationId() + ": " + e.getMessage());
                }
            }
        }
    }

    // In a real application, this would fetch from your actual data source
    private double fetchCurrentHeight(Long plantationId) {
        // TODO: Implement actual height fetching logic
        // For now, return a simulated value
        return 100.0; // Simulated value; replace with actual API call or database query
    }
    


}
