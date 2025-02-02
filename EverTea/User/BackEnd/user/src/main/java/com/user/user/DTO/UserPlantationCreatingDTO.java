package com.user.user.DTO;


import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserPlantationCreatingDTO {

    @JsonProperty("district")
    private String district;

    private String teaNameDTO;
}