package com.growth_tracker.growth_tracker.service;


import com.growth_tracker.growth_tracker.dto.PlantDetailsDto;
import com.growth_tracker.growth_tracker.dto.PlantDto;
import com.growth_tracker.growth_tracker.dto.UpdateHeightRequest;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface PlantService {
    List<PlantDto> getAllPlants();

    PlantDetailsDto getPlantDetails(Long id);

    PlantDto createPlant(PlantDto plantDto);

    PlantDto updatePlantHeight(Long id, UpdateHeightRequest request);

    String evaluatePlantStatus(Long id, Double currentHeight);
}
