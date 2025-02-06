package com.nethum.ecom.testing.service;

import com.nethum.ecom.testing.Exceptions.IDNotFoundException;
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
    public List<Instruction> getInstructionByTeaTypeId(Long teaTypeId) throws IDNotFoundException{
        List<Instruction> instructions = instructionRepository.findByTeaType_TeaTypeId(teaTypeId);
        if(instructions.isEmpty()){
            throw new IDNotFoundException("Tea Type "+teaTypeId+ "Can not found");
        }
        return instructions;
    }

    @Override
    public Instruction saveInstructions(Instruction instruction) {
        return instructionRepository.save(instruction);
    }


}
