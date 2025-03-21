package com.EverTea.EverTea.GrowthTracker.service;


import com.EverTea.EverTea.GrowthTracker.dto.PlantDetailsDto;

import com.EverTea.EverTea.GrowthTracker.dto.PlantDto;

import com.EverTea.EverTea.GrowthTracker.dto.UpdateHeightRequest;

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
