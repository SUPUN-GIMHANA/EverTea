package com.evertea.AdvancedWeatherForecastApp;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.messaging.FirebaseMessaging;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.core.io.ClassPathResource;
import org.springframework.scheduling.annotation.EnableScheduling;

import java.io.IOException;

@SpringBootApplication
@EnableScheduling
public class AdvancedWeatherForecastAppApplication {

	@Bean
	FirebaseMessaging firebaseMessaging() throws IOException{
		System.out.println("firebaseMessaging method called");
		GoogleCredentials googleCredentials = GoogleCredentials
				.fromStream(new ClassPathResource("firebase-service-account.json").getInputStream());

		FirebaseOptions firebaseOptions = FirebaseOptions.builder()
				.setCredentials(googleCredentials).build();
		FirebaseApp firebaseApp = FirebaseApp.initializeApp(firebaseOptions, "my-app");

		return FirebaseMessaging.getInstance(firebaseApp);
	}
	public static void main(String[] args) {
		SpringApplication.run(AdvancedWeatherForecastAppApplication.class, args);

		System.out.println("------------------Advanced Weather Forecast Application------------------");
	}

}
