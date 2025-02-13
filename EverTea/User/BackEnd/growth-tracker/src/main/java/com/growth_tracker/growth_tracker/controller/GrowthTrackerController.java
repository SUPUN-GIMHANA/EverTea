package com.growth_tracker.growth_tracker.controller;

import com.growth_tracker.growth_tracker.dto.GrowthRequestDTO;
import com.growth_tracker.growth_tracker.dto.GrowthResponseDTO;
import com.growth_tracker.growth_tracker.service.GrowthTrackerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/growth")
public class GrowthTrackerController {

    @Autowired
    private GrowthTrackerService growthTrackerService;

    @PostMapping("/check")
    public GrowthResponseDTO checkGrowth(@RequestBody GrowthRequestDTO requestDTO) {
        return growthTrackerService.compareHeight(requestDTO);
    }

}
