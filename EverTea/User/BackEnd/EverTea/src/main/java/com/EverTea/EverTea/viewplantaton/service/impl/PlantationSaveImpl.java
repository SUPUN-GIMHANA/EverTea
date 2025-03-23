package com.EverTea.EverTea.viewplantaton.service.impl;

import com.EverTea.EverTea.viewplantaton.dto.plantationSaveRequestDTO;
import com.EverTea.EverTea.viewplantaton.entity.plantationEntity;
import com.EverTea.EverTea.viewplantaton.repo.saveRepo;
import com.EverTea.EverTea.viewplantaton.service.PlantationSave;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlantationSaveImpl implements PlantationSave {

    @Autowired
    private saveRepo saveRepo;

    @Override
    public String savePlnatation(plantationSaveRequestDTO plantationSaveRequestDTO) {

        plantationEntity plantationEntity = new plantationEntity(
                plantationSaveRequestDTO.getPlantaionId(),
                plantationSaveRequestDTO.getDate(),
                plantationSaveRequestDTO.getArea()
        );
        saveRepo.save(plantationEntity);

        return "view plantation table save";
    }

    @Override
    public String deletePlantation(int customerId) {
        if(saveRepo.existsById(customerId)) {
            saveRepo.deleteById(customerId);
            return customerId + " has been deleted";
        }else {
            return customerId + " has not been deleted";
        }

    }

    @Override
    public List<plantationEntity> getPlantation() {
        return saveRepo.findAll();
    }
}
