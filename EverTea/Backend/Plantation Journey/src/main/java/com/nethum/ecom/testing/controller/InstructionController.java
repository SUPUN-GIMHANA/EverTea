package com.nethum.ecom.testing.controller;


import com.nethum.ecom.testing.model.Instruction;
import com.nethum.ecom.testing.service.InstructionServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/instructions")
@CrossOrigin
public class InstructionController {

    @Autowired
    private InstructionServices instructionService;

    //EndPoint to get instructions for tea Type
    @GetMapping("/tea-type/{teaTypeId}")
    public List<Instruction> getInstructionsByTeaTypeId(@PathVariable Long teaTypeId) {
        System.out.println(instructionService.getInstructionByTeaTypeId(teaTypeId));
        return instructionService.getInstructionByTeaTypeId(teaTypeId);
    }

}
