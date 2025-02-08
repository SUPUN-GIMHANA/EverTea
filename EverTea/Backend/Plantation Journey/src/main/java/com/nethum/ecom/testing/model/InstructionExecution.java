package com.nethum.ecom.testing.model;

import jakarta.persistence.*;

import java.time.LocalDate;

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
    private String status;  //PENDING , COMPLETED

    @Column(nullable = false)
    private LocalDate executionDate;

    @Column(nullable = false)
    private boolean userConfirmed;

    public boolean isUserConfirmed() {
        return userConfirmed;
    }

    public void setUserConfirmed(boolean userConfirmed) {
        this.userConfirmed = userConfirmed;
    }

    public LocalDate getExecutionDate() {
        return executionDate;
    }

    public void setExecutionDate(LocalDate executionDate) {
        this.executionDate = executionDate;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
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
