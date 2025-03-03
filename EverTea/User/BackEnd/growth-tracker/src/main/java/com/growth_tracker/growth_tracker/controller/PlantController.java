package com.growth_tracker.growth_tracker.controller;


import com.growth_tracker.growth_tracker.dto.PlantDetailsDto;
import com.growth_tracker.growth_tracker.dto.PlantDto;
import com.growth_tracker.growth_tracker.dto.UpdateHeightRequest;
import com.growth_tracker.growth_tracker.service.PlantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/plants")
@CrossOrigin(origins = "*") // Configure properly for production
public class PlantController {

    private final PlantService plantService;

    @Autowired
    public PlantController(PlantService plantService) {
        this.plantService = plantService;
    }

    @GetMapping
    public ResponseEntity<List<PlantDto>> getAllPlants() {
        return ResponseEntity.ok(plantService.getAllPlants());
    }

    @GetMapping("/{id}")
    public ResponseEntity<PlantDetailsDto> getPlantDetails(@PathVariable Long id) {
        return ResponseEntity.ok(plantService.getPlantDetails(id));
    }

    @PostMapping
    public ResponseEntity<PlantDto> createPlant(@RequestBody PlantDto plantDto) {
        return ResponseEntity.ok(plantService.createPlant(plantDto));
    }

    @PutMapping("/{id}/height")
    public ResponseEntity<PlantDto> updateHeight(
            @PathVariable Long id,
            @RequestBody UpdateHeightRequest request) {
        return ResponseEntity.ok(plantService.updatePlantHeight(id, request));
    }

    @GetMapping("/{id}/status")
    public ResponseEntity<String> getPlantStatus(
            @PathVariable Long id,
            @RequestParam Double height) {
        return ResponseEntity.ok(plantService.evaluatePlantStatus(id, height));
    }
}

