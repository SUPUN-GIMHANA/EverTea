package com.EverTea.FinancialTracker.Model.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "income_record")
public class IncomeRecord {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id")
    private int id;

    @ManyToOne
    @JoinColumn(name = "tracker_id")
    private FinancialTracker tracker;
}
