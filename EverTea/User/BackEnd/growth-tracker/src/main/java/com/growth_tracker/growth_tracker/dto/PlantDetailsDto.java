package com.growth_tracker.growth_tracker.dto;

import lombok.Data;

import java.util.List;

@Data
public class PlantDetailsDto {

    private Long id;
    private String name;
    private Double currentHeight;
    private String status;
    private List<Double> growthHistory;
    private List<GrowthRecordDto> previousDetails;

}
