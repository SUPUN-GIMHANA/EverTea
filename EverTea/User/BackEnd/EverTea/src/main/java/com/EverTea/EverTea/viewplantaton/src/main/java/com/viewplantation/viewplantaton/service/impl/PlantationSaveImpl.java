package com.viewplantation.viewplantaton.service.impl;

import com.viewplantation.viewplantaton.dto.plantationSaveRequestDTO;
import com.viewplantation.viewplantaton.entity.plantationEntity;
import com.viewplantation.viewplantaton.repo.saveRepo;
import com.viewplantation.viewplantaton.service.PlantationSave;
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
