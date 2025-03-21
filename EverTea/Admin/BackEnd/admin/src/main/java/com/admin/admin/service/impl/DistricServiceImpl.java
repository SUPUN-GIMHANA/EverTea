package com.admin.admin.service.impl;

import com.admin.admin.dto.request.DistrictSaveRequestDTO;
import com.admin.admin.entity.*;
//import com.admin.admin.entity.TeaType;
import com.admin.admin.repo.*;
//import com.admin.admin.repo.TeaModelsRepo;
import com.admin.admin.service.DistrictService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DistricServiceImpl implements DistrictService {

    @Autowired
    private DistrictRepo districtRepo;

    @Override
    public String saveDistrict(DistrictSaveRequestDTO saveRequestDTO) {

        District district = new District(
                saveRequestDTO.getDistrictId(),
                saveRequestDTO.getDistrictName(),
                saveRequestDTO.getMainPlant(),
                saveRequestDTO.getAvgPlants()
        );

        districtRepo.save(district);

        return "District table save";
    }


    @Autowired
    private TeaModelRepo teaTypeRepo;

    @Override
    public String saveTeaModel(DistrictSaveRequestDTO saveTeaModelRequestDTO) {

        TeaModels teaModels = new TeaModels(
                saveTeaModelRequestDTO.getTeaId(),
                saveTeaModelRequestDTO.getTeaName(),
                saveTeaModelRequestDTO.getDistrict(),
                saveTeaModelRequestDTO.getPrice()
        );

        teaTypeRepo.save(teaModels);

        return "Tea Model table save";
    }

    @Autowired
    private TeaTypeRepo teaModelRepo;

    @Override
    public String saveTeaType(DistrictSaveRequestDTO saveTeaTypeRequestDTO) {
        TeaType teaType = new TeaType(
                saveTeaTypeRequestDTO.getTeaTypeId(),
                saveTeaTypeRequestDTO.getFertilizerSchedule(),
                saveTeaTypeRequestDTO.getLifecycleWeek(),
                saveTeaTypeRequestDTO.getTeaName(),
                saveTeaTypeRequestDTO.getWateringIntervalDays()
        );

        teaModelRepo.save(teaType);
        return "Tea type table save";
    }

    @Autowired
    private InstructionRepo instructionRepo;

    @Override
    public String saveInstruction(DistrictSaveRequestDTO saveInstructionRequestDTO) {
        Instruction instruction = new Instruction(
               saveInstructionRequestDTO.getInstructionId(),
               saveInstructionRequestDTO.getAction(),
                saveInstructionRequestDTO.getDetails(),
                saveInstructionRequestDTO.getEndDay(),
                saveInstructionRequestDTO.getRecurringFrequencyWeek(),
                saveInstructionRequestDTO.getStartDay(),
                saveInstructionRequestDTO.getTriggerDay(),
                saveInstructionRequestDTO.getTeaTypeId1()
        );
        instructionRepo.save(instruction);
        return "Tea instruction table save";
    }

    @Autowired
    private WeatherRepo weatherRepo;

    @Override
    public String saveWeather(DistrictSaveRequestDTO saveWeatherRequestDTO) {
        Weathr weathr = new Weathr(
                saveWeatherRequestDTO.getWeatherId(),
                saveWeatherRequestDTO.getConditionType(),
                saveWeatherRequestDTO.getMessage(),
                saveWeatherRequestDTO.getPriority()
        );
        weatherRepo.save(weathr);
        return "weather table save";
    }



    @Override
    public List<District> getDistricts() {
        return districtRepo.findAll();
    }

    @Override
    public List<Instruction> getInstruction() {
        return instructionRepo.findAll();
    }

    @Override
    public List<TeaModels> getTeaModel() {
        return teaTypeRepo.findAll();
    }

    @Override
    public List<TeaType> getTeaType() {
       return teaModelRepo.findAll();
    }

    @Override
    public List<Weathr> getWeather() {
       return weatherRepo.findAll();
    }


}
