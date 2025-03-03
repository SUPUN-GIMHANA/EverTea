package com.growth_tracker.growth_tracker.controller;

import com.growth_tracker.growth_tracker.entity.GrowthRecord;
import com.growth_tracker.growth_tracker.repository.GrowthRecordRepository;
import com.growth_tracker.growth_tracker.service.GrowthTrackerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/growth")
public class GrowthTrackerController {

    @Autowired
    private GrowthTrackerService growthTrackerService;

    @Autowired
    private final GrowthRecordRepository growthRecordRepository;

    public GrowthTrackerController(GrowthRecordRepository growthRecordRepository) {
        this.growthRecordRepository = growthRecordRepository;
    }

    @PostMapping("/check")
    public GrowthResponseDTO checkGrowth(@RequestBody GrowthRequestDTO requestDTO) {
        return growthTrackerService.compareHeight(requestDTO);
    }

    @GetMapping("/logs/{plantationId}")
    public ResponseEntity<?> getGrowthLogs(@PathVariable Long plantationId) {
        try {
            List<GrowthRecord> records = growthRecordRepository.findByPlantationId(plantationId);

            if (records == null || records.isEmpty()) {
                return ResponseEntity.notFound().build();
            }

            List<GrowthResponseDTO> response = records.stream()
                    .map(record -> new GrowthResponseDTO(
                            record.getPlantationId(),
                            record.getMonth(),
                            record.getLoggedHeight(),
                            record.getDefaultHeight(),
                            record.getLogMessage()
                    ))
                    .collect(Collectors.toList());

            return ResponseEntity.ok(response);

        } catch (NullPointerException e) {
            return ResponseEntity.status(500).body("Error: Null value encountered.");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("An unexpected error occurred.");
        }
    }





}
