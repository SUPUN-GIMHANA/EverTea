package com.evertea.admin.DTO;

import org.springframework.stereotype.Component;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Component
public class AdminLoginDTO {

    @JsonProperty("username")
    private String username;

    @JsonProperty("password")
    private String password;
}