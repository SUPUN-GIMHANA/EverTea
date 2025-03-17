package com.nethum.ecom.testing.service.Interfaces;

import com.nethum.ecom.testing.Exceptions.IDNotFoundException;
import com.nethum.ecom.testing.model.Instruction;

import java.util.List;

public interface InstructionServiceInterface {

    List<Instruction> getInstructionByTeaTypeId(Long teaTypeId) throws IDNotFoundException;

    Instruction saveInstructions(Instruction instruction);
}
