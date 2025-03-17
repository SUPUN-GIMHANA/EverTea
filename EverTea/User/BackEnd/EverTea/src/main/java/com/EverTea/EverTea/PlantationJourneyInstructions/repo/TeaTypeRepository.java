package com.EverTea.EverTea.PlantationJourneyInstructions.repo;

import com.EverTea.EverTea.PlantationJourneyInstructions.model.TeaType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TeaTypeRepository extends JpaRepository<TeaType,Long>{
}
