package com.EverTea.EverTea.FinancialTracker.Model.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "expense_record")
public class ExpenseRecord {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id")
    private int id;

    @Column(name = "amount")
    private float amount;

    @Column(name = "description")
    private String description;

    @Column(name = "date")
    private LocalDateTime date;

    @JsonBackReference
    @ManyToOne(cascade = {CascadeType.MERGE,CascadeType.PERSIST,CascadeType.DETACH,CascadeType.REFRESH},fetch = FetchType.LAZY)
    @JoinColumn(name = "tracker_id") // refers to the foreign key in the database table
    private FinancialTracker tracker;

    public ExpenseRecord(){

    }

    public ExpenseRecord(float amount, String description, LocalDateTime date) {
        this.amount = amount;
        this.description = description;
        this.date = date;
    }

    public FinancialTracker getTracker() {
        return tracker;
    }

    public void setTracker(FinancialTracker tracker) {
        this.tracker = tracker;
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

    public LocalDateTime getDate() {
        return date;
    }

    public void setDate(LocalDateTime date) {
        this.date = date;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return "ExpenseRecord{" +
                "amount=" + amount +
                ", id=" + id +
                ", description='" + description + '\'' +
                ", date='" + date + '\'' +
                '}';
    }
}
