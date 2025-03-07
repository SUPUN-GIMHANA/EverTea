package com.evertea.AdvancedWeatherForecastApp.repo;

import com.evertea.AdvancedWeatherForecastApp.DTO.WeatherNotification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@Repository
@EnableJpaRepositories
public interface NotificationRepository extends JpaRepository<WeatherNotification, Long> {

    WeatherNotification findById(int id);
}
