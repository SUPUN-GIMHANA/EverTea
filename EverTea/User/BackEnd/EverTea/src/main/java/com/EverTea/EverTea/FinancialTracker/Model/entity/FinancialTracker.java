package com.EverTea.EverTea.FinancialTracker.Model.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "financial_tracker")
public class FinancialTracker {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "area_of_land")
    private float area;

    @Column(name = "tea_type")
    private String teaType;

    @Column(name = "budget")
    private float budget;

    @JsonManagedReference
    @OneToMany(mappedBy = "tracker",cascade = {CascadeType.MERGE,CascadeType.PERSIST,CascadeType.DETACH,CascadeType.REFRESH},fetch = FetchType.LAZY)
    @Column(name = "expenses")
    private List<ExpenseRecord> expenses;

    @JsonManagedReference
    @OneToMany(mappedBy = "tracker",cascade = {CascadeType.MERGE,CascadeType.PERSIST,CascadeType.DETACH,CascadeType.REFRESH},fetch = FetchType.LAZY)
    @Column(name = "income")
    private List<IncomeRecord> income;

    public FinancialTracker(){

    }

    public FinancialTracker(float area, String teaType, float budget) {
        this.area = area;
        this.teaType = teaType;
        this.budget = budget;
    }

    public float getArea() {
        return area;
    }

    public void setArea(float area) {
        this.area = area;
    }

    public String getTeaType() {
        return teaType;
    }

    public void setTeaType(String teaType) {
        this.teaType = teaType;
    }

    public float getBudget() {
        return budget;
    }

    public void setBudget(float budget) {
        this.budget = budget;
    }

    public List<ExpenseRecord> getExpenses() {
        return expenses;
    }

    public void setExpenses(List<ExpenseRecord> expenses) {
        this.expenses = expenses;
    }

    public List<IncomeRecord> getIncome() {
        return income;
    }

    public void setIncome(List<IncomeRecord> income) {
        this.income = income;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return "FinancialTracker{" +
                "id=" + id +
                ", area=" + area +
                ", teaType='" + teaType + '\'' +
                ", budget=" + budget +
                '}';
    }
}
