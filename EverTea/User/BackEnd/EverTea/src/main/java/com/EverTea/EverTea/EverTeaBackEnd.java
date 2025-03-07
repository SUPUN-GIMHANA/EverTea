package com.EverTea.EverTea;

import java.io.IOException;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.core.io.ClassPathResource;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.messaging.FirebaseMessaging;

@SpringBootApplication
public class EverTeaBackEnd {

	public static void main(String[] args) {
		SpringApplication.run(EverTeaBackEnd.class, args);
		System.out.println("EverTea User Backend Started");
	}

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

}
