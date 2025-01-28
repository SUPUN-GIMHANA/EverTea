package com.nethum.ecom.testing.service;

import com.nethum.ecom.testing.model.Instruction;
import com.nethum.ecom.testing.repo.InstructionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InstructionServices {

    @Autowired
    private InstructionRepository instructionRepository;

    public List<Instruction> getInstructionByTeaTypeId(Long teaTypeId){
        return instructionRepository.findByTeaType_TeaTypeId(teaTypeId);
    }

}
