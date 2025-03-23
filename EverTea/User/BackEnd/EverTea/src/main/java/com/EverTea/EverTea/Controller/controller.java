package com.EverTea.EverTea.Controller;

import com.EverTea.EverTea.viewplantaton.dto.plantationSaveRequestDTO;
import com.EverTea.EverTea.viewplantaton.entity.plantationEntity;
import com.EverTea.EverTea.viewplantaton.service.PlantationSave;
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
