package com.nethum.ecom.testing.model;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
public class InstructionExecution {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long InstructionExecutionId;

    @ManyToOne      //each plantation can have multiple specific instructions
    @JoinColumn(name = "plantation_id", nullable = false)
    private Plantation plantation;

    @ManyToOne
    @JoinColumn(name = "instruction_id", nullable = false)  //Detailed instruction
    private Instruction instruction;


    @Column(nullable = false)
    private LocalDateTime executionDate;


    public InstructionExecution(){

    }

    public InstructionExecution(Long instructionId, Long plantationId, LocalDateTime executionDate) {
        this.instruction = new Instruction();
        this.instruction.setInstructionId(instructionId);
        this.plantation = new Plantation();
        this.plantation.setPlantationId(plantationId);

        this.executionDate = executionDate;
    }



    public LocalDateTime getExecutionDate() {
        return executionDate;
    }

    public void setExecutionDate(LocalDateTime executionDate) {
        this.executionDate = executionDate;
    }



    public Instruction getInstruction() {
        return instruction;
    }

    public void setInstruction(Instruction instruction) {
        this.instruction = instruction;
    }

    public Plantation getPlantation() {
        return plantation;
    }

    public void setPlantation(Plantation plantation) {
        this.plantation = plantation;
    }

    public Long getInstructionExecutionId() {
        return InstructionExecutionId;
    }

    public void setInstructionExecutionId(Long instructionExecutionId) {
        InstructionExecutionId = instructionExecutionId;
    }
}
