package com.EverTea.EverTea.ViewPlantations.repo;


import com.EverTea.EverTea.PlantationJourneyInstructions.model.Plantation;
import com.EverTea.EverTea.ViewPlantations.entity.PlantationEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ViewPlantationRepo extends JpaRepository<Plantation, Long> {

    // Corrected method: Fetch plantations by userId (compare userId's ID to Long)
    List<PlantationEntity> findByUserId_Id(Long userId);  // Use "userId.id" for the correct query

    // Corrected method to find plantation by userId and plantationId
    Optional<PlantationEntity> findByUserId_IdAndPlantationId(Long userId, Long plantationId);
}
