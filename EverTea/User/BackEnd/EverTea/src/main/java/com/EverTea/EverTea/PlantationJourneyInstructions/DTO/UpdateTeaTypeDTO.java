package com.EverTea.EverTea.PlantationJourneyInstructions.DTO;

/*
* */
public class UpdateTeaTypeDTO {

    private Long teaTypeId;
    private String name;
    private int lifecycleWeeks;
    private int waterIntervalDays;
    private String fertilizerSchedule;

    public Long getTeaTypeId() {
        return teaTypeId;
    }

    public void setTeaTypeId(Long teaTypeId) {
        this.teaTypeId = teaTypeId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getLifecycleWeeks() {
        return lifecycleWeeks;
    }

    public void setLifecycleWeeks(int lifecycleWeeks) {
        this.lifecycleWeeks = lifecycleWeeks;
    }

    public int getWaterIntervalDays() {
        return waterIntervalDays;
    }

    public void setWaterIntervalDays(int waterIntervalDays) {
        this.waterIntervalDays = waterIntervalDays;
    }

    public String getFertilizerSchedule() {
        return fertilizerSchedule;
    }

    public void setFertilizerSchedule(String fertilizerSchedule) {
        this.fertilizerSchedule = fertilizerSchedule;
    }

    @Override
    public String toString() {
        return "UpdateTeaTypeDTO{" +
                "teaTypeId=" + teaTypeId +
                ", name='" + name + '\'' +
                ", lifecycleWeeks=" + lifecycleWeeks +
                ", waterIntervalDays=" + waterIntervalDays +
                ", fertilizerSchedule='" + fertilizerSchedule + '\'' +
                '}';
    }
}
