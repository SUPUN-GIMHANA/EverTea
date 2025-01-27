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


}
