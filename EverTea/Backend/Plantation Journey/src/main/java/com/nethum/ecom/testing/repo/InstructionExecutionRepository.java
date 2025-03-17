package com.nethum.ecom.testing.repo;

import com.nethum.ecom.testing.model.Instruction;
import com.nethum.ecom.testing.model.InstructionExecution;
import com.nethum.ecom.testing.model.Plantation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface InstructionExecutionRepository extends JpaRepository<InstructionExecution, Long> {

    Optional<InstructionExecution> findTopByPlantationAndInstructionOrderByExecutionDateDesc(Plantation plantation, Instruction instruction);
}
