package com.growth_tracker.growth_tracker.dto;

import lombok.Data;

@Data
public class PlantDto {

    private Long id;
    private String name;
    private Double currentHeight;
    private String status;

}
