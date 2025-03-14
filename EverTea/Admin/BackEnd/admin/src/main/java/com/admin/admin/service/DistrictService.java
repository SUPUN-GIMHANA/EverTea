package com.admin.admin.service;

import com.admin.admin.dto.request.DistrictSaveRequestDTO;

public interface DistrictService {
    String saveDistrict(DistrictSaveRequestDTO saveRequestDTO);

    String saveTeaModel(DistrictSaveRequestDTO saveTeaModelRequestDTO);

    String saveTeaType(DistrictSaveRequestDTO saveTeaTypeRequestDTO);

    String saveInstruction(DistrictSaveRequestDTO saveInstructionRequestDTO);

    String saveWeather(DistrictSaveRequestDTO saveWeatherRequestDTO);
}
