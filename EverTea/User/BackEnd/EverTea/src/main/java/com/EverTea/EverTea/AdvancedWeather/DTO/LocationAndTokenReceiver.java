package com.EverTea.EverTea.AdvancedWeather.DTO;

import org.springframework.stereotype.Component;

@Component
public class LocationAndTokenReceiver {

    private double latitude;
    private double longitude;
    private String fcmToken;


    public double getLatitude() {
        return latitude;
    }

    public void setLatitude(double latitude) {
        this.latitude = latitude;
    }

    public double getLongitude() {
        return longitude;
    }

    public void setLongitude(double longitude) {
        this.longitude = longitude;
    }

    public String getFcmToken() {
        return fcmToken;
    }

    public void setFcmToken(String fcmToken) {
        this.fcmToken = fcmToken;
    }
}
