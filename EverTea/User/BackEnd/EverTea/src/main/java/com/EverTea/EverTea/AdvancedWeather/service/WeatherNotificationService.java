package com.EverTea.EverTea.AdvancedWeather.service;

import com.EverTea.EverTea.AdvancedWeather.DTO.WeatherData;
import com.EverTea.EverTea.AdvancedWeather.DTO.WeatherNotification;
import com.EverTea.EverTea.AdvancedWeather.repo.NotificationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class WeatherNotificationService {

    @Autowired
    private NotificationRepository notificationRepository;

    @Autowired
    private FirebaseMessagingService firebaseMessagingService;

    public void getNotificationMessage(WeatherData weatherData){
        int[] notificationIdArray = new int[15];

        if(weatherData.getTempMax() > 35){
            System.out.println("1");
            notificationIdArray[0] = 1;
        }if(weatherData.getTempMin() < 20){
            System.out.println("2");
            notificationIdArray[1] = 2;
        }if(weatherData.getRainSum() >= 20){
            System.out.println("3");
            notificationIdArray[2] = 3;
        }if(weatherData.getRainSum() >= 5){
            System.out.println("4");
            notificationIdArray[3] = 4;
        }if(weatherData.getRainSum() == 0){
            System.out.println("5");
            notificationIdArray[4] = 5;
        }if(weatherData.getWindSpeedMax() >= 30){
            System.out.println("6");
            notificationIdArray[5] = 6;
        }if(weatherData.getWindSpeedMax() >= 10){
            System.out.println("7");
            notificationIdArray[6] = 7;
        }if(weatherData.getWindSpeedMax() < 10){
            System.out.println("8");
            notificationIdArray[7] = 8;
        }if(weatherData.getUvIndexMax() > 8){
            System.out.println("9");
            notificationIdArray[8] = 9;
        }if(weatherData.getSunShine() < 5){
            System.out.println("10");
            notificationIdArray[9] = 10;
        }if(weatherData.getPrecipitationSum() > 50){
            System.out.println("11");
            notificationIdArray[10] = 12;
        }if(weatherData.getPrecipitationSum() >= 20 && weatherData.getPrecipitationSum() <= 50){
            System.out.println("13");
            notificationIdArray[11] = 13;
        }if(weatherData.getPrecipitationSum() >= 5 && weatherData.getPrecipitationSum() <= 20){
            System.out.println("14");
            notificationIdArray[12] = 14;
        }if(weatherData.getPrecipitationSum() >= 1 && weatherData.getPrecipitationSum() <= 5){
            System.out.println("15");
            notificationIdArray[13] = 15;
        }if(weatherData.getPrecipitationSum() == 0){
            System.out.println("16");
            notificationIdArray[14] = 16;
        }

        System.out.println("---------------Weather Notifications--------------");


        for(int i =0; i< notificationIdArray.length; i++){
            if(notificationIdArray[i] != 0){
                WeatherNotification notification = notificationRepository.findById(notificationIdArray[i]);
                System.out.println("* "+notification.getMessage());
                firebaseMessagingService.sendNotificationByToken(notification.getMessage());
                System.out.println();
            }

        }
    }
}
