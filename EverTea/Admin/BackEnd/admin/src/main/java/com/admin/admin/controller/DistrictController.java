package com.admin.admin.controller;


import com.admin.admin.dto.request.DistrictSaveRequestDTO;
import com.admin.admin.service.DistrictService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("api/v1/district")
public class DistrictController {

    @Autowired
    private DistrictService districtService;

    @PostMapping(path = "/save-district")
    public String saveDistrict(@RequestBody DistrictSaveRequestDTO saveRequestDTO) {

        String message = districtService.saveDistrict(saveRequestDTO);
        return message;
    }

    @PostMapping(path = "/save-teaModel")
    public String saveTeaModel(@RequestBody DistrictSaveRequestDTO saveTeaModelRequestDTO){

        String teamodelMessage = districtService.saveTeaModel(saveTeaModelRequestDTO);
        return teamodelMessage;
    }

    @PostMapping(path = "/save-teaType")
    public String saveTeaType(@RequestBody DistrictSaveRequestDTO saveTeaTypeRequestDTO){

        String teaTypemessage = districtService.saveTeaType(saveTeaTypeRequestDTO);
        return teaTypemessage ;
    }

    @PostMapping(path = "/save-instruction")
    public String instruction(@RequestBody DistrictSaveRequestDTO saveInstructionRequestDTO){

        String instructionMessage = districtService.saveInstruction(saveInstructionRequestDTO);
        return instructionMessage;
    }

    @PostMapping(path = "/save-weather")
    public String weather(@RequestBody DistrictSaveRequestDTO saveWeatherRequestDTO){

        String WeatherMessage = districtService.saveWeather(saveWeatherRequestDTO);
        return  WeatherMessage;
    }
}
