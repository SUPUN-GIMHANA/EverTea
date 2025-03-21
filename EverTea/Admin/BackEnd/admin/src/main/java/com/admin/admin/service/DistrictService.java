package com.admin.admin.service;

import com.admin.admin.dto.request.DistrictSaveRequestDTO;
import com.admin.admin.entity.*;

import java.util.List;

public interface DistrictService {
    String saveDistrict(DistrictSaveRequestDTO saveRequestDTO);

    String saveTeaModel(DistrictSaveRequestDTO saveTeaModelRequestDTO);

    String saveTeaType(DistrictSaveRequestDTO saveTeaTypeRequestDTO);

    String saveInstruction(DistrictSaveRequestDTO saveInstructionRequestDTO);

    String saveWeather(DistrictSaveRequestDTO saveWeatherRequestDTO);

    List<District> getDistricts();

    List<Instruction> getInstruction();


    List<TeaModels> getTeaModel();

    List<TeaType> getTeaType();

    List<Weathr> getWeather();
}
