package com.admin.admin.dto.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;

@NoArgsConstructor
@AllArgsConstructor
//@Data

public class DistrictSaveRequestDTO {

    private int districtId;
    private String districtName;
    private String mainPlant;
    private int avgPlants;

    private int teaId;
    private String teaName;
    private int price;
    private String district;

    private int teaTypeId;
    private String fertilizerSchedule;
    private int lifecycleWeek;
    private int wateringIntervalDays;

    private int instructionId;
    private String action;
    private String details;
    private int endDay;
    private int recurringFrequencyWeek;
    private int startDay;
    private int triggerDay;
    private int teaTypeId1;

    public int weatherId;
    public String conditionType;
    public String message;
    public int priority;

    public String getDistrict(){
        return district;
    }

    public void setDistrict(String district) {
        this.district = district;
    }

    public int getDistrictId() {
        return districtId;
    }

    public void setDistrictId(int districtId) {
        this.districtId = districtId;
    }

    public String getDistrictName() {
        return districtName;
    }

    public void setDistrictName(String districtName) {
        this.districtName = districtName;
    }

    public String getMainPlant() {
        return mainPlant;
    }

    public void setMainPlant(String mainPlant) {
        this.mainPlant = mainPlant;
    }

    public int getAvgPlants() {
        return avgPlants;
    }

    public void setAvgPlants(int avgPlants) {
        this.avgPlants = avgPlants;
    }

    public int getTeaId() {
        return teaId;
    }

    public void setTeaId(int teaId) {
        this.teaId = teaId;
    }

    public String getTeaName() {
        return teaName;
    }

    public void setTeaName(String teaName) {
        this.teaName = teaName;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public int getTeaTypeId() {
        return teaTypeId;
    }

    public void setTeaTypeId(int teaTypeId) {
        this.teaTypeId = teaTypeId;
    }

    public String getFertilizerSchedule() {
        return fertilizerSchedule;
    }

    public void setFertilizerSchedule(String fertilizerSchedule) {
        this.fertilizerSchedule = fertilizerSchedule;
    }

    public int getLifecycleWeek() {
        return lifecycleWeek;
    }

    public void setLifecycleWeek(int lifecycleWeek) {
        this.lifecycleWeek = lifecycleWeek;
    }

    public int getWateringIntervalDays() {
        return wateringIntervalDays;
    }

    public void setWateringIntervalDays(int wateringIntervalDays) {
        this.wateringIntervalDays = wateringIntervalDays;
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
        this.teaTypeId1 = teaTypeId1;
    }

    public int getWeatherId() {
        return weatherId;
    }

    public void setWeatherId(int weatherId) {
        this.weatherId = weatherId;
    }

    public String getConditionType() {
        return conditionType;
    }

    public void setConditionType(String conditionType) {
        this.conditionType = conditionType;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public int getPriority() {
        return priority;
    }

    public void setPriority(int priority) {
        this.priority = priority;
    }
}
