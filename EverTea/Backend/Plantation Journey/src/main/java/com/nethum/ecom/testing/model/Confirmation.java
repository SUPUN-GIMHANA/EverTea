package com.nethum.ecom.testing.model;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
public class Confirmation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long confirmationId;

    @ManyToOne
    @JoinColumn(name = "plantation_instruction_id", nullable = false)
    private InstructionExecution instructionExecution;

    @Column(nullable = false)
    private LocalDateTime confirmationTime;

    public Long getConfirmationId() {
        return confirmationId;
    }

    public void setConfirmationId(Long confirmationId) {
        this.confirmationId = confirmationId;
    }

    public LocalDateTime getConfirmationTime() {
        return confirmationTime;
    }

    public void setConfirmationTime(LocalDateTime confirmationTime) {
        this.confirmationTime = confirmationTime;
    }

    public InstructionExecution getInstructionExecution() {
        return instructionExecution;
    }

    public void setInstructionExecution(InstructionExecution instructionExecution) {
        this.instructionExecution = instructionExecution;
    }
}
