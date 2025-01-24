package com.nethum.ecom.testing.service;

import com.nethum.ecom.testing.model.Plantation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import com.nethum.ecom.testing.repo.PlantationRepository;

import java.time.Duration;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class PlantationService implements PlantationServiceInterface {

    @Autowired
    private PlantationRepository plantationRepository;

    @Override
    public void checkForWatering() {
        List<Plantation> plantationList = plantationRepository.findAll();
        for (Plantation plantation : plantationList) {
            LocalDateTime startTime = plantation.getPlantationStartDate().atStartOfDay();
            Duration duration = Duration.between(startTime, LocalDateTime.now());

            if (duration.toHours() >= 72) { // Only plantations that need watering
                System.out.println("Plantation " + plantation.getPlantationId() + " needs watering");
            }
        }
    }

    @Scheduled(fixedRate = 1000)
    @Override
    public void scheduledWateringCheck(){
        System.out.println("Scheduled triggered");
        checkForWatering();
    }

    @Override
    public void triggermanually(){
        scheduledWateringCheck();
    }

}
