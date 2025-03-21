package com.admin.admin.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "instruction")
public class Instruction {

    @Id
    @Column(name = "instruction_id")
    private int instructionId;

    @Column(name = "action")
    private String action;

    @Column(name = "details")
    private String details;

    @Column(name = "end_day")
    private int endDay;

    @Column(name = "recurring_frequency_week")
    private int recurringFrequencyWeek;

    @Column(name = "start_day")
    private int startDay;

    @Column(name = "trigger_day")
    private int triggerDay;

    @Column(name = "tea_type_id")
    private int teaTypeId1;

    public Instruction() {
    }

    public Instruction(int instructionId, String action, String details, int endDay, int recurringFrequencyWeek, int startDay, int triggerDay, int teaTypeId1) {
        this.instructionId = instructionId;
        this.action = action;
        this.details = details;
        this.endDay = endDay;
        this.recurringFrequencyWeek = recurringFrequencyWeek;
        this.startDay = startDay;
        this.triggerDay = triggerDay;
        this.teaTypeId1 = teaTypeId1;
    }

    public int getInstructionId() {
        return instructionId;
    }

    public void setInstructionId(int instructionId) {
        this.instructionId = instructionId;
    }

    public String getAction() {
        return action;
    }

    public void setAction(String action) {
        this.action = action;
    }

    public String getDetails() {
        return details;
    }

    public void setDetails(String details) {
        this.details = details;
    }

    public int getEndDay() {
        return endDay;
    }

    public void setEndDay(int endDay) {
        this.endDay = endDay;
    }

    public int getRecurringFrequencyWeek() {
        return recurringFrequencyWeek;
    }

    public void setRecurringFrequencyWeek(int recurringFrequencyWeek) {
        this.recurringFrequencyWeek = recurringFrequencyWeek;
    }

    public int getStartDay() {
        return startDay;
    }

    public void setStartDay(int startDay) {
        this.startDay = startDay;
    }

    public int getTriggerDay() {
        return triggerDay;
    }

    public void setTriggerDay(int triggerDay) {
        this.triggerDay = triggerDay;
    }

    public int getTeaTypeId1() {
        return teaTypeId1;
    }

    public void setTeaTypeId1(int teaTypeId1) {
        this.teaTypeId1= teaTypeId1;
    }
}
