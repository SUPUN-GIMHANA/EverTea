package com.EverTea.EverTea.AdvancedWeather.repo;

import com.EverTea.EverTea.AdvancedWeather.DTO.WeatherData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@Repository

public interface DataRetrievalRepository extends JpaRepository<WeatherData, Integer> {

    WeatherData findById(int id);
}
