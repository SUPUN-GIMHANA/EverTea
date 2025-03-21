package com.growth_tracker.growth_tracker.service;

import com.growth_tracker.growth_tracker.dto.GrowthRecordDto;
import com.growth_tracker.growth_tracker.dto.PlantDetailsDto;
import com.growth_tracker.growth_tracker.dto.PlantDto;
import com.growth_tracker.growth_tracker.dto.UpdateHeightRequest;
import com.growth_tracker.growth_tracker.model.GrowthExpectation;
import com.growth_tracker.growth_tracker.model.GrowthRecord;
import com.growth_tracker.growth_tracker.model.Plant;
import com.growth_tracker.growth_tracker.repository.GrowthExpectationRepository;
import com.growth_tracker.growth_tracker.repository.GrowthRecordRepository;
import com.growth_tracker.growth_tracker.repository.PlantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.Period;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class PlantServiceImpl implements PlantService {

    private final PlantRepository plantRepository;
    private final GrowthRecordRepository growthRecordRepository;
    private final GrowthExpectationRepository growthExpectationRepository;

    @Autowired
    public PlantServiceImpl(
            PlantRepository plantRepository,
            GrowthRecordRepository growthRecordRepository,
            GrowthExpectationRepository growthExpectationRepository) {
        this.plantRepository = plantRepository;
        this.growthRecordRepository = growthRecordRepository;
        this.growthExpectationRepository = growthExpectationRepository;
    }

    @Override
    public List<PlantDto> getAllPlants() {
        return plantRepository.findAll().stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }

    @Override
    public PlantDetailsDto getPlantDetails(Long id) {
        Plant plant = plantRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Plant not found"));

        List<GrowthRecord> records = growthRecordRepository.findByPlantIdOrderByRecordDateDesc(id);

        PlantDetailsDto detailsDto = new PlantDetailsDto();
        detailsDto.setId(plant.getId());
        detailsDto.setName(plant.getName());

        Double currentHeight = null;
        if (!records.isEmpty()) {
            currentHeight = records.get(0).getHeight();
            detailsDto.setStatus(records.get(0).getStatus());
        }
        detailsDto.setCurrentHeight(currentHeight);

        // Set growth history - extract heights from records
        List<Double> growthHistory = records.stream()
                .map(GrowthRecord::getHeight)
                .collect(Collectors.toList());
        detailsDto.setGrowthHistory(growthHistory);

        // Set previous details
        List<GrowthRecordDto> previousDetails = records.stream()
                .map(this::convertToGrowthRecordDto)
                .collect(Collectors.toList());
        detailsDto.setPreviousDetails(previousDetails);

        return detailsDto;
    }

    @Override
    @Transactional
    public PlantDto createPlant(PlantDto plantDto) {
        Plant plant = new Plant();
        plant.setName(plantDto.getName());
        Plant savedPlant = plantRepository.save(plant);

        // Create initial growth record if height is provided
        if (plantDto.getCurrentHeight() != null) {
            GrowthRecord initialRecord = new GrowthRecord();
            initialRecord.setPlant(savedPlant);
            initialRecord.setRecordDate(LocalDate.now());
            initialRecord.setHeight(plantDto.getCurrentHeight());
            initialRecord.setStatus(evaluatePlantStatus(savedPlant.getId(), plantDto.getCurrentHeight()));
            initialRecord.setGrowthAmount(plantDto.getCurrentHeight() + " CM");
            growthRecordRepository.save(initialRecord);
        }

        return convertToDto(savedPlant);
    }

    @Override
    @Transactional
    public PlantDto updatePlantHeight(Long id, UpdateHeightRequest request) {
        Plant plant = plantRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Plant not found"));

        // Get or create today's record
        LocalDate today = LocalDate.now();
        GrowthRecord record = growthRecordRepository.findByPlantIdAndRecordDate(id, today)
                .orElse(new GrowthRecord());

        // Get previous record to calculate growth
        Optional<GrowthRecord> previousRecord = growthRecordRepository.findLatestByPlantId(id);

        Double previousHeight = previousRecord.map(GrowthRecord::getHeight).orElse(0.0);
        String growthAmount = "+" + (request.getHeight() - previousHeight) + " CM";

        // Update or set new record values
        record.setPlant(plant);
        record.setRecordDate(today);
        record.setHeight(request.getHeight());
        record.setStatus(evaluatePlantStatus(id, request.getHeight()));
        record.setGrowthAmount(growthAmount);

        growthRecordRepository.save(record);

        PlantDto dto = convertToDto(plant);
        dto.setCurrentHeight(request.getHeight());
        dto.setStatus(record.getStatus());

        return dto;
    }

    @Override
    public String evaluatePlantStatus(Long id, Double currentHeight) {

        Plant plant = plantRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Plant not found"));

        //calculate the plant age in month
        int plantAgeInMonths = Period.between(plant.getCreatedAt().toLocalDate(), LocalDate.now()).getMonths() +
                Period.between(plant.getCreatedAt().toLocalDate(), LocalDate.now()).getYears() * 12;


        // Find expected height for current month
        Optional<GrowthExpectation> expectation =
                growthExpectationRepository.findByPlantIdAndMonthNumber(id, plantAgeInMonths);

        if (expectation.isPresent()) {
            Double expectedHeight = expectation.get().getExpectedHeight();
            // If current height is less than expected, return Warning
            if (currentHeight < expectedHeight) {
                return "Warning";
            }
        }

        // Default to Good status
        return "Good";
    }

    private PlantDto convertToDto(Plant plant) {
        PlantDto dto = new PlantDto();
        dto.setId(plant.getId());
        dto.setName(plant.getName());

        // Get latest record if exists
        Optional<GrowthRecord> latestRecord = growthRecordRepository.findLatestByPlantId(plant.getId());
        if (latestRecord.isPresent()) {
            dto.setCurrentHeight(latestRecord.get().getHeight());
            dto.setStatus(latestRecord.get().getStatus());
        }

        return dto;
    }

    private GrowthRecordDto convertToGrowthRecordDto(GrowthRecord record) {
        GrowthRecordDto dto = new GrowthRecordDto();
        dto.setDate(record.getRecordDate().format(DateTimeFormatter.ISO_DATE));
        dto.setStatus(record.getStatus());
        dto.setGrowth(record.getGrowthAmount());
        return dto;
    }
}