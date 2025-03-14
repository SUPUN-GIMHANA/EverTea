package com.admin.admin.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "weather")
public class Weathr {

    @Id
    @Column(name = "weather_id")
    public int weatherId;

    @Column(name = "condition_type")
    public String conditionType;

    @Column(name = "message")
    public String message;

    @Column(name = "priority")
    public int priority;

    public Weathr() {
    }

    public Weathr(int weatherId, String conditionType, String message, int priority) {
        this.weatherId = weatherId;
        this.conditionType = conditionType;
        this.message = message;
        this.priority = priority;
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
