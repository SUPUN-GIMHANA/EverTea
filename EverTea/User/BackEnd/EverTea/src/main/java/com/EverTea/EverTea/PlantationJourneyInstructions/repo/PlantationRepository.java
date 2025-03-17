package com.EverTea.EverTea.PlantationJourneyInstructions.repo;

import com.EverTea.EverTea.PlantationJourneyInstructions.model.Plantation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlantationRepository extends JpaRepository<Plantation,Long>{
}
