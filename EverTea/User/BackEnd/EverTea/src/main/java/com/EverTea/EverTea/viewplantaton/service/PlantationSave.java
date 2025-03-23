package com.EverTea.EverTea.viewplantaton.service;

import com.EverTea.EverTea.viewplantaton.dto.plantationSaveRequestDTO;
import com.EverTea.EverTea.viewplantaton.entity.plantationEntity;

import java.util.List;

public interface PlantationSave {
    String savePlnatation(plantationSaveRequestDTO plantationSaveRequestDTO);

    String deletePlantation(int customerId);

    List<plantationEntity> getPlantation();
}
