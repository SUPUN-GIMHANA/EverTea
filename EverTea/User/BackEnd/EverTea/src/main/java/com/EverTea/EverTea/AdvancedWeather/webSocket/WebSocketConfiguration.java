package com.EverTea.EverTea.AdvancedWeather.webSocket;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

@Configuration
@EnableWebSocket
public class WebSocketConfiguration implements WebSocketConfigurer, WebSocketMessageBrokerConfigurer {

    @Autowired
    private final WeatherDataWebSocketHandler weatherDataWebSocketHandler;

    public WebSocketConfiguration(WeatherDataWebSocketHandler handler){
        this.weatherDataWebSocketHandler = handler;
    }

    @Override
    public void registerWebSocketHandlers(WebSocketHandlerRegistry registry){
        registry.addHandler(weatherDataWebSocketHandler, "/ws").setAllowedOrigins("*");
        System.out.println("Connected with front end");
    }
}
