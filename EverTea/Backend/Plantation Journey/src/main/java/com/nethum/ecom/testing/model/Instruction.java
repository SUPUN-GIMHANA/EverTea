package com.nethum.ecom.testing.model;

import jakarta.persistence.*;

@Entity
public class Instruction {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long InstructionId;

    @ManyToOne
    @JoinColumn(name = "tea_type_id", nullable = false)
    private TeaType teaType;

    @Column(nullable = false, length = 255)
    private String action;

    @Column(nullable = false, length = 255)
    private String details;

    @Column(nullable = false)
    private int triggerWeek;

    @Column(nullable = true)
    private Integer recurringFrequencyWeek;

    public Long getInstructionId() {
        return InstructionId;
    }

    public void setInstructionId(Long instructionId) {
        InstructionId = instructionId;
    }

    public Integer getRecurringFrequencyWeek() {
        return recurringFrequencyWeek;
    }

    public void setRecurringFrequencyWeek(Integer recurringFrequencyWeek) {
        this.recurringFrequencyWeek = recurringFrequencyWeek;
    }

    public int getTriggerWeek() {
        return triggerWeek;
    }

    public void setTriggerWeek(int triggerWeek) {
        this.triggerWeek = triggerWeek;
    }

    public String getDetails() {
        return details;
    }

    public void setDetails(String details) {
        this.details = details;
    }

    public TeaType getTeaType() {
        return teaType;
    }

    public void setTeaType(TeaType teaType) {
        this.teaType = teaType;
    }

    public String getAction() {
        return action;
    }

    public void setAction(String action) {
        this.action = action;
    }

    @Override
    public String toString() {
        return "Instruction{" +
                "InstructionId=" + InstructionId +
                ", teaType=" + teaType +
                ", action='" + action + '\'' +
                ", details='" + details + '\'' +
                ", triggerWeek=" + triggerWeek +
                ", recurringFrequencyWeek=" + recurringFrequencyWeek +
                '}';
    }
}
