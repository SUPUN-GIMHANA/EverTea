package com.nethum.ecom.testing;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@SpringBootApplication
@EnableScheduling
/*@EnableScheduling is an annotation in Spring Framework that enables the scheduling of tasks.
It allows your application to run scheduled tasks automatically at defined intervals or specific times.*/
public class TestingApplication {

    public static void main(String[] args) {
        SpringApplication.run(TestingApplication.class, args);
    }

    @Component
    public static class Schduler {

        @Scheduled(fixedRate = 5000)
        public void runtask(){
            System.out.println("task excuted");
        }
    }
}
