package com.growth_tracker.growth_tracker.repository;

import com.growth_tracker.growth_tracker.model.Plant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlantRepository extends JpaRepository<Plant, Long> {

}
