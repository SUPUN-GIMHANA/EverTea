package com.EverTea.EverTea.AdvancedWeather.repo;

import com.EverTea.EverTea.AdvancedWeather.DTO.WeatherNotification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@Repository
@EnableJpaRepositories
public interface NotificationRepository extends JpaRepository<WeatherNotification, Integer> {
    WeatherNotification findById(int id);
}
