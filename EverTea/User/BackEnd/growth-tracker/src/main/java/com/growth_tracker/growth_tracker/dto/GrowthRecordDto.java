package com.growth_tracker.growth_tracker.dto;

import lombok.Data;

@Data
public class GrowthRecordDto {

    private String date;
    private String status;
    private String growth;

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getGrowth() {
        return growth;
    }

    public void setGrowth(String growth) {
        this.growth = growth;
    }
}
