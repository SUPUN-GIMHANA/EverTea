package com.EverTea.FinancialTracker.Model.service;

import com.EverTea.FinancialTracker.Model.entity.ExpenseRecord;
import com.EverTea.FinancialTracker.Model.entity.IncomeRecord;

import java.util.List;
import java.util.Map;

public interface TrackerService {
    List<ExpenseRecord> findAllExpensesOfTracker(int trackerId);
    List<IncomeRecord> findAllIncomeOfTracker(int trackerId);
    ExpenseRecord findExpenseById(int expenseId);
    IncomeRecord findIncomeById(int incomeId);
    Map<String,Float> calculateTotalExpense(int trackerId);
    Map<String,Float> calculateTotalIncome(int trackerId);
}
