package com.EverTea.EverTea.PlantationJourneyInstructions.service.Interfaces;

import com.EverTea.EverTea.PlantationJourneyInstructions.Exceptions.IDNotFoundException;
import com.EverTea.EverTea.PlantationJourneyInstructions.model.Instruction;

import java.util.List;

public interface InstructionServiceInterface {

    List<Instruction> getInstructionByTeaTypeId(Long teaTypeId) throws IDNotFoundException;

    Instruction saveInstructions(Instruction instruction);
}
