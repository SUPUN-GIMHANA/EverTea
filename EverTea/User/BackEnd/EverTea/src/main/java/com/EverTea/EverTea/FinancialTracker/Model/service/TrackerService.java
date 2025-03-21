package com.EverTea.EverTea.FinancialTracker.Model.service;

import com.EverTea.EverTea.FinancialTracker.Model.entity.ExpenseRecord;
import com.EverTea.EverTea.FinancialTracker.Model.entity.FinancialTracker;
import com.EverTea.EverTea.FinancialTracker.Model.entity.IncomeRecord;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

public interface TrackerService {
    List<ExpenseRecord> findAllExpensesOfTracker(int trackerId);
    List<ExpenseRecord> findAllExpensesOfTracker(int trackerId, LocalDateTime startDateTime, LocalDateTime endDateTime);
    List<IncomeRecord> findAllIncomeOfTracker(int trackerId);
    List<IncomeRecord> findAllIncomeOfTracker(int trackerId, LocalDateTime startDateTime, LocalDateTime endDateTime);
    ExpenseRecord findExpenseById(int expenseId);
    IncomeRecord findIncomeById(int incomeId);
    Map<String,Float> calculateTotalExpense(int trackerId);
    Map<String, Float> calculateTotalExpense(int trackerId, LocalDateTime startDateTime, LocalDateTime endDateTime);
    Map<String,Float> calculateTotalIncome(int trackerId);
    Map<String,Float> calculateTotalIncome(int trackerId, LocalDateTime startDateTime, LocalDateTime endDateTime);
    Map<String,Float> calculateProfit(int trackerId);
    Map<String, Float> calculateProfit(int trackerId,LocalDateTime startDateTime, LocalDateTime endDateTime);
    void save(FinancialTracker financialTracker);
    FinancialTracker findTrackerById(int trackerId);
    void save(int trackerId,ExpenseRecord expenseRecord);
    void save(int trackerId, IncomeRecord incomeRecord);
    ExpenseRecord update(int expenseRecordId, ExpenseRecord expenseRecord);
    IncomeRecord update(int incomeRecordId, IncomeRecord incomeRecord);
    void deleteAllIncomeRecords(int trackerId);
    void deleteAllExpenseRecords(int trackerId);
    void deleteExpenseRecord(int trackerId, int expenseId);
    void deleteIncomeRecord(int trackerId, int incomeId);
}
