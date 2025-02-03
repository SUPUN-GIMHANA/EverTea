package com.EverTea.FinancialTracker.Model.service;

import com.EverTea.FinancialTracker.Model.entity.ExpenseRecord;
import com.EverTea.FinancialTracker.Model.entity.IncomeRecord;

import java.util.List;

public interface TrackerService {
    List<ExpenseRecord> findAllExpensesOfTracker(int trackerId);
    List<IncomeRecord> findAllIncomeOfTracker(int trackerId);
}
