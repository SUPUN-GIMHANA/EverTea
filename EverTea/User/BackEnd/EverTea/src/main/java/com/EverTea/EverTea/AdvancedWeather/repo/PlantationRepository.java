package com.EverTea.EverTea.AdvancedWeather.repo;

import com.EverTea.EverTea.AdvancedWeather.DTO.PlantationData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@Repository
public interface PlantationRepository extends JpaRepository<PlantationData, Integer> {

    PlantationData findBy(int id);
}
