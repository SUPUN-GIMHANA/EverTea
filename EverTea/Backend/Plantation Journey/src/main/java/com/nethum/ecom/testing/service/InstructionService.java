package com.nethum.ecom.testing.service;

import com.nethum.ecom.testing.model.Instruction;
import com.nethum.ecom.testing.repo.InstructionRepository;
import com.nethum.ecom.testing.service.Interfaces.InstructionServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InstructionService implements InstructionServiceInterface {

    @Autowired
    private InstructionRepository instructionRepository;

    @Override
    public List<Instruction> getInstructionByTeaTypeId(Long teaTypeId){
        return instructionRepository.findByTeaType_TeaTypeId(teaTypeId);
    }

    @Override
    public Instruction saveInstructions(Instruction instruction) {
        return instructionRepository.save(instruction);
    }


}
