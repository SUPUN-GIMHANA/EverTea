package com.EverTea.FinancialTracker.Model.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "income_record")
public class IncomeRecord {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id")
    private int id;

    @Column(name = "amount")
    private float amount;

    @Column(name = "description")
    private String description;

    @Column(name = "date")
    private String date;

    @ManyToOne(cascade = {CascadeType.MERGE,CascadeType.PERSIST,CascadeType.DETACH,CascadeType.REFRESH},fetch = FetchType.LAZY)
    @JoinColumn(name = "tracker_id")
    private FinancialTracker tracker;

    public IncomeRecord(){

    }

    public IncomeRecord(float amount, String description, String date) {
        this.amount = amount;
        this.description = description;
        this.date = date;
    }

    public float getAmount() {
        return amount;
    }

    public void setAmount(float amount) {
        this.amount = amount;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public FinancialTracker getTracker() {
        return tracker;
    }

    public void setTracker(FinancialTracker tracker) {
        this.tracker = tracker;
    }
}
