package com.evertea.AdvancedWeatherForecastApp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class AdvancedWeatherForecastAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(AdvancedWeatherForecastAppApplication.class, args);

		System.out.println("Hello world");
	}

}
