package com.nethum.ecom.testing.model;

import jakarta.persistence.*;

@Entity
public class Instruction {

    @Id //primary key
    @GeneratedValue(strategy = GenerationType.AUTO) //InstructionId will be auto increm
    private Long InstructionId;     // Instruction id for identify what is the instruction

    @ManyToOne
    @JoinColumn(name = "tea_type_id", nullable = false)
    private TeaType teaType;        // foreign key from tea_type table

    @Column(nullable = false, length = 255)
    private String action;          // What is the type of action (ex : Watering , Fertilizing)

    @Column(nullable = false, length = 255)
    private String details;         // Explanation of action. (ex : Explanation of watering)

    @Column(nullable = false)
    private int triggerDay;     // The day instruction should be executed based on tea_type

    @Column(nullable = true)
    private Integer recurringFrequencyWeek; // How much times should continue the instruction per week



    // getters and setters
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

    public int getTriggerDay() {
        return triggerDay;
    }

    public void setTriggerDay(int triggerDay) {
        this.triggerDay = triggerDay;
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
                ", triggerWeek=" + triggerDay +
                ", recurringFrequencyWeek=" + recurringFrequencyWeek +
                '}';
    }
}
