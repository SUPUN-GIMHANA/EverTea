package com.EverTea.EverTea.AdvancedWeather.DTO;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import org.springframework.stereotype.Component;

import java.io.Serializable;

@Entity
@Component
public class WeatherData implements Serializable {
    @Id
    private int Id;

    private String city;
    private String dateTime;
    private String cloudCover;
    private double currentTemp;
    private double tempMax;
    private double tempMin;
    private long dayLight;
    private long sunShine;
    private double uvIndexMax;
    private double precipitationSum;
    private double rainSum;
    private double windSpeedMax;
    private String windDirection;

    public WeatherData() {
    }

    public WeatherData(int id, String city, String dateTime, String cloudCover, double currentTemp, double tempMax, double tempMin, long datLight, long sunShine, double uvIndexMax, double precipitationSum, double rainSum, double windSpeedMax, String windDirection) {
        Id = id;
        this.city = city;
        this.dateTime = dateTime;
        this.cloudCover = cloudCover;
        this.currentTemp = currentTemp;
        this.tempMax = tempMax;
        this.tempMin = tempMin;
        this.dayLight = datLight;
        this.sunShine = sunShine;
        this.uvIndexMax = uvIndexMax;
        this.precipitationSum = precipitationSum;
        this.rainSum = rainSum;
        this.windSpeedMax = windSpeedMax;
        this.windDirection = windDirection;
    }

    public int getId() {
        return Id;
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

    public String getCloudCover() {
        return cloudCover;
    }

    public void setCloudCover(String cloudCover) {
        this.cloudCover = cloudCover;
    }

    public double getCurrentTemp() {
        return currentTemp;
    }

    public void setCurrentTemp(double currentTemp) {
        this.currentTemp = currentTemp;
    }

    public double getTempMax() {
        return tempMax;
    }

    public void setTempMax(double tempMax) {
        this.tempMax = tempMax;
    }

    public double getTempMin() {
        return tempMin;
    }

    public void setTempMin(double tempMin) {
        this.tempMin = tempMin;
    }

    public long getDayLight() {
        return dayLight;
    }

    public void setDayLight(long datLight) {
        this.dayLight = datLight;
    }

    public long getSunShine() {
        return sunShine;
    }

    public void setSunShine(long sunShine) {
        this.sunShine = sunShine;
    }

    public double getUvIndexMax() {
        return uvIndexMax;
    }

    public void setUvIndexMax(double uvIndexMax) {
        this.uvIndexMax = uvIndexMax;
    }

    public double getPrecipitationSum() {
        return precipitationSum;
    }

    public void setPrecipitationSum(double precipitationSum) {
        this.precipitationSum = precipitationSum;
    }

    public double getRainSum() {
        return rainSum;
    }

    public void setRainSum(double rainSum) {
        this.rainSum = rainSum;
    }

    public double getWindSpeedMax() {
        return windSpeedMax;
    }

    public void setWindSpeedMax(double windSpeedMax) {
        this.windSpeedMax = windSpeedMax;
    }

    public String getWindDirection() {
        return windDirection;
    }

    public void setWindDirection(String windDirection) {
        this.windDirection = windDirection;
    }
}
