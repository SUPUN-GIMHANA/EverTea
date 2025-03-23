package com.viewplantation.viewplantaton.controller;

import com.viewplantation.viewplantaton.dto.plantationSaveRequestDTO;
import com.viewplantation.viewplantaton.entity.plantationEntity;
import com.viewplantation.viewplantaton.service.PlantationSave;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("api/v1/viewPlantation")
public class controller {


    @Autowired
    private PlantationSave plantationSave;

    @PostMapping(path = "/save-plantation")
    public String saveVivewPlantation(@RequestBody plantationSaveRequestDTO plantationSaveRequestDTO) {

        String message = plantationSave.savePlnatation(plantationSaveRequestDTO);
        return message;
    }

    @DeleteMapping(path = "/delete-plantation/{plantaion}")
    public String deleteVivewPlantation(@PathVariable(value = "plantaion") int customerId) {
        String message = plantationSave.deletePlantation(customerId);
        return message;
    }

    @GetMapping(path = "/get-plantation")
    public List<plantationEntity> getPlantation() {
        return plantationSave.getPlantation();
    }
}
