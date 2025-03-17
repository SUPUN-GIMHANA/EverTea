package com.EverTea.EverTea.PlantationJourneyInstructions.repo;

import com.EverTea.EverTea.PlantationJourneyInstructions.model.Instruction;
import com.EverTea.EverTea.PlantationJourneyInstructions.model.InstructionExecution;
import com.EverTea.EverTea.PlantationJourneyInstructions.model.Plantation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface InstructionExecutionRepository extends JpaRepository<InstructionExecution, Long> {

    Optional<InstructionExecution> findTopByPlantationAndInstructionOrderByExecutionDateDesc(Plantation plantation, Instruction instruction);
}
