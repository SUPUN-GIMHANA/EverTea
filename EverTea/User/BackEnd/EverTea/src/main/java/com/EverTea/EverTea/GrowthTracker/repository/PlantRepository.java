package com.EverTea.EverTea.GrowthTracker.repository;

import com.EverTea.EverTea.GrowthTracker.model.Plant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlantRepository extends JpaRepository<Plant, Long> {

}
