package com.EverTea.EverTea.AdvancedWeather.DTO;

import jakarta.persistence.*;
import org.apache.catalina.users.GenericRole;
import org.springframework.stereotype.Component;

import javax.annotation.processing.Generated;
import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;

@Entity
@Component
public class WeatherData implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int Id;

    private String city;
    private String dateTime;
    private double temp;
    private int relativeHumidity;
    private double precipitation;
    private double rain;
    private String weatherCode;
    private double windSpeed;
    private String windDirection;
    private double soilTemp;

    public WeatherData() {
    }

    public int getId() {
        return Id;
    }

    public WeatherData(int id, String city, String dateTime, double temp, int relativeHumidity, double precipitation, double rain, String weatherCode, double windSpeed, String windDirection, double soilTemp) {
        Id = id;
        this.city = city;
        this.dateTime = dateTime;
        this.temp = temp;
        this.relativeHumidity = relativeHumidity;
        this.precipitation = precipitation;
        this.rain = rain;
        this.weatherCode = weatherCode;
        this.windSpeed = windSpeed;
        this.windDirection = windDirection;
        this.soilTemp = soilTemp;
    }

    public void setId(int id) {
        Id = id;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getDateTime() {
        return dateTime;
    }

    public void setDateTime(String dateTime) {
        this.dateTime = dateTime;
    }

    public double getTemp() {
        return temp;
    }

    public void setTemp(double temp) {
        this.temp = temp;
    }

    public int getRelativeHumidity() {
        return relativeHumidity;
    }

    public void setRelativeHumidity(int relativeHumidity) {
        this.relativeHumidity = relativeHumidity;
    }

    public double getPrecipitation() {
        return precipitation;
    }

    public void setPrecipitation(double precipitation) {
        this.precipitation = precipitation;
    }

    public double getRain() {
        return rain;
    }

    public void setRain(double rain) {
        this.rain = rain;
    }

    public String getWeatherCode() {
        return weatherCode;
    }

    public void setWeatherCode(String weatherCode) {
        this.weatherCode = weatherCode;
    }

    public double getWindSpeed() {
        return windSpeed;
    }

    public void setWindSpeed(double windSpeed) {
        this.windSpeed = windSpeed;
    }

    public String getWindDirection() {
        return windDirection;
    }

    public void setWindDirection(String windDirection) {
        this.windDirection = windDirection;
    }

    public double getSoilTemp() {
        return soilTemp;
    }

    public void setSoilTemp(double soilTemp) {
        this.soilTemp = soilTemp;
    }
}
