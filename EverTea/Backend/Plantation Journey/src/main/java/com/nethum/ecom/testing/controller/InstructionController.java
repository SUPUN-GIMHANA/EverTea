package com.nethum.ecom.testing.controller;


import com.nethum.ecom.testing.model.Instruction;
import com.nethum.ecom.testing.service.InstructionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("ever-tea/instructions/")
@CrossOrigin
public class InstructionController {

    @Autowired
    private InstructionService instructionService;

    //EndPoint to get instructions for tea Type
    @GetMapping("get-instructions/tea-type/{teaTypeId}")
    public List<Instruction> getInstructionsByTeaTypeId(@PathVariable Long teaTypeId) {
        System.out.println(instructionService.getInstructionByTeaTypeId(teaTypeId));
        return instructionService.getInstructionByTeaTypeId(teaTypeId);
    }

    @PostMapping("post-instructions")
    public Instruction setInstructionsByTeaTypeId(@RequestBody Instruction instruction){
        return instructionService.saveInstructions(instruction);
    }

}
