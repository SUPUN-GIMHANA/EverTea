package com.EverTea.EverTea.GrowthTracker.repository;

import com.EverTea.EverTea.GrowthTracker.model.Plant;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlantRepository extends JpaRepository<Plant, Long> {

}
