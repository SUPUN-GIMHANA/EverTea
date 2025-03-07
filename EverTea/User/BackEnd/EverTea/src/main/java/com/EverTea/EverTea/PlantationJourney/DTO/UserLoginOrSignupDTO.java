package com.EverTea.EverTea.PlantationJourney.DTO;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserLoginOrSignupDTO {


    @JsonProperty("userName")
    private String userName;

    @JsonProperty("password")
    private String password;

    @JsonProperty("email")
    private String email; 

    @JsonProperty("phone")
    private Integer phone;

    @JsonProperty("nic")
    private String nic;
}