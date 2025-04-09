package com.EverTea.EverTea.ViewPlantations.service;

//import com.viewplantation.viewplantaton.dto.plantationSaveRequestDTO;
import com.EverTea.EverTea.PlantationJourneyInstructions.model.Plantation;
import com.EverTea.EverTea.PlantationJourneyInstructions.repo.PlantationRepository;
import com.EverTea.EverTea.ViewPlantations.entity.PlantationEntity;
import com.EverTea.EverTea.ViewPlantations.repo.ViewPlantationRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ViewPlantationService {

    @Autowired
    private ViewPlantationRepo viewPlantationRepo;

    @Autowired
    private PlantationRepository plantationRepository;

//    @Override
//    public String savePlnatation(plantationSaveRequestDTO plantationSaveRequestDTO) {
//
//        plantationEntity plantationEntity = new plantationEntity(
//                plantationSaveRequestDTO.getPlantaionId(),
//                plantationSaveRequestDTO.getDate(),
//                plantationSaveRequestDTO.getLocation()
//        );
//        saveRepo.save(plantationEntity);
//
//        return "view plantation table save";
//    }


    // Delete plantation by userId and plantationId
    public String deletePlantation(Long userId, Long plantationId) {
        // Fetch PlantationEntity
        Optional<PlantationEntity> plantationEntityOptional = viewPlantationRepo.findByUserId_IdAndPlantationId(userId, plantationId);

        if (plantationEntityOptional.isPresent()) {
            PlantationEntity plantationEntity = plantationEntityOptional.get();

            // Map PlantationEntity to Plantation (PlantationJourneyInstructions.model.Plantation)
            Plantation plantation = new Plantation();
            plantation.setPlantationId(plantationEntity.getPlantationId());
            plantation.setPlantationStartDateTime(plantationEntity.getPlantationStartDateTime());
            plantation.setLocation(plantationEntity.getLocation());

            // Delete the Plantation from the PlantationRepo (real Plantation entity)
            plantationRepository.delete(plantation);  // Delete the actual Plantation entity from the database
            return "Plantation deleted successfully";
        } else {
            return "Plantation not found for this user";
        }
    }


    // Fetch plantations by userId and return them as simplified PlantationEntity
    public List<PlantationEntity> getPlantationByUserId(Long userId) {
        List<PlantationEntity> plantations = viewPlantationRepo.findByUserId_Id(userId);
        return plantations; // Directly return PlantationEntity list
    }
}
