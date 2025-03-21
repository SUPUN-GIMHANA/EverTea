package com.admin.admin.controller;


import com.admin.admin.dto.request.DistrictSaveRequestDTO;
import com.admin.admin.entity.*;
import com.admin.admin.service.DistrictService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("api/v1/district")
public class DistrictController {

    @Autowired
    private DistrictService districtService;

//    @PostMapping(path = "/save-district")
//    public String saveDistrict(@RequestBody DistrictSaveRequestDTO saveRequestDTO) {
//        String message = districtService.saveDistrict(saveRequestDTO);
//        return message;
//    }
    @PostMapping(path = "/save-districts")
    public String saveDistricts(@RequestBody List<DistrictSaveRequestDTO> saveRequestDTOs) {
        for (DistrictSaveRequestDTO saveRequestDTO : saveRequestDTOs) {
            districtService.saveDistrict(saveRequestDTO);
        }
        return "Districts saved successfully!";
    }

//    @PostMapping(path = "/save-teaModel")
//    public String saveTeaModel(@RequestBody DistrictSaveRequestDTO saveTeaModelRequestDTO){
//
//        String teamodelMessage = districtService.saveTeaModel(saveTeaModelRequestDTO);
//        return teamodelMessage;
//    }

    @PostMapping(path = "/save-teaModel")
    public String saveTeaModel(@RequestBody List<DistrictSaveRequestDTO> saveTeaModelRequestDTO){
        for (DistrictSaveRequestDTO saveRequestDTO : saveTeaModelRequestDTO) {
            districtService.saveTeaModel(saveRequestDTO);
        }
        return "TeaModel saved successfully!";
    }


    @PostMapping(path = "/save-teaType")
    public String saveTeaType(@RequestBody List<DistrictSaveRequestDTO> saveTeaTypeRequestDTO){
        for (DistrictSaveRequestDTO saveRequestDTO : saveTeaTypeRequestDTO) {
            districtService.saveTeaType(saveRequestDTO);
        }
        return "TeaType saved successfully!";
    }


//    @PostMapping(path = "/save-teaType")
//    public String saveTeaType(@RequestBody DistrictSaveRequestDTO saveTeaTypeRequestDTO){
//
//        String teaTypemessage = districtService.saveTeaType(saveTeaTypeRequestDTO);
//        return teaTypemessage ;
//    }

    @PostMapping(path = "/save-instruction")
    public String instruction(@RequestBody List<DistrictSaveRequestDTO> saveInstructionRequestDTO){
        for (DistrictSaveRequestDTO saveRequestDTO : saveInstructionRequestDTO) {
            districtService.saveInstruction(saveRequestDTO);
        }
        return "Instruction saved successfully!";
    }
//    @PostMapping(path = "/save-instruction")
//    public String instruction(@RequestBody DistrictSaveRequestDTO saveInstructionRequestDTO){
//
//        String instructionMessage = districtService.saveInstruction(saveInstructionRequestDTO);
//        return instructionMessage;
//    }


    @PostMapping(path = "/save-weather")
    public String weather(@RequestBody List<DistrictSaveRequestDTO> saveWeatherRequestDTO){
        for (DistrictSaveRequestDTO saveRequestDTO : saveWeatherRequestDTO) {
            districtService.saveWeather(saveRequestDTO);
        }
        return "Weather saved successfully!";
    }
//    @PostMapping(path = "/save-weather")
//    public String weather(@RequestBody DistrictSaveRequestDTO saveWeatherRequestDTO){
//
//        String WeatherMessage = districtService.saveWeather(saveWeatherRequestDTO);
//        return  WeatherMessage;
//    }

    @GetMapping(path = "/get-districts")
    public List<District> getDistricts() {
        return districtService.getDistricts();
    }

    @GetMapping(path = "/get-instruction")
    public List<Instruction> getInstruction() {
        return districtService.getInstruction();
    }

    @GetMapping(path = "/get-teaModel")
    public List<TeaModels> getTeaModel() {
        return districtService.getTeaModel();
    }

    @GetMapping(path = "/get-teaType")
    public List<TeaType> getTeaType() {
        return districtService.getTeaType();
    }

    @GetMapping(path = "/get-weather")
    public List<Weathr> getWeather() {
        return districtService.getWeather();
    }

}
