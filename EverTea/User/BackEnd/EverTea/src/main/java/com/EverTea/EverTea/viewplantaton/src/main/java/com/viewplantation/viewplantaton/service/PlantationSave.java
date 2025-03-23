package com.viewplantation.viewplantaton.service;

import com.viewplantation.viewplantaton.dto.plantationSaveRequestDTO;
import com.viewplantation.viewplantaton.entity.plantationEntity;

import java.util.List;

public interface PlantationSave {
    String savePlnatation(plantationSaveRequestDTO plantationSaveRequestDTO);

    String deletePlantation(int customerId);

    List<plantationEntity> getPlantation();
}
