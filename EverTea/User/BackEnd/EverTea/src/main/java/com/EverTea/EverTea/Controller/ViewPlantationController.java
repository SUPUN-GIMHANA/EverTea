package com.EverTea.EverTea.Controller;


import com.EverTea.EverTea.ViewPlantations.entity.PlantationEntity;
import com.EverTea.EverTea.ViewPlantations.service.ViewPlantationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("api/v1/viewPlantation")
public class ViewPlantationController {


    @Autowired
    private ViewPlantationService viewPlantationService;



//    @PostMapping(path = "/save-plantation")
//    public String saveVivewPlantation(@RequestBody plantationSaveRequestDTO plantationSaveRequestDTO) {
//
//        String message = plantationSave.savePlnatation(plantationSaveRequestDTO);
//        return message;
//    }

    @DeleteMapping(path = "/delete-plantation/{userId}/{plantationId}")
    public String deletePlantation(@PathVariable Long userId, @PathVariable Long plantationId) {
        String message = viewPlantationService.deletePlantation(userId, plantationId);
        return message;
    }

    @GetMapping(path = "/get-plantation/{userId}")
    public List<PlantationEntity> getPlantation(@PathVariable Long userId) {
        return viewPlantationService.getPlantationByUserId(userId);
    }
}
