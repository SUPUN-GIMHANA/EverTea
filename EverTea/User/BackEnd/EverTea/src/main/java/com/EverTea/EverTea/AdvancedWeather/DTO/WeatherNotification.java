package com.EverTea.EverTea.AdvancedWeather.DTO;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name="weather_condtions_month1")
public class WeatherNotification {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;

    private String notification_message;


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }


    public String getNotification_message() {
        return notification_message;
    }

    public void setNotification_message(String notification_message) {
        this.notification_message = notification_message;
    }


}
