package com.EverTea.FinancialTracker.Model.service;

import com.EverTea.FinancialTracker.Model.dao.TrackerDAO;
import com.EverTea.FinancialTracker.Model.entity.ExpenseRecord;
import com.EverTea.FinancialTracker.Model.entity.IncomeRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class TrackerServiceImpl implements TrackerService{

    private TrackerDAO trackerDAO;

    @Autowired  // constructor injection (implementing dependency injection)
    public TrackerServiceImpl(TrackerDAO trackerDAO){
        this.trackerDAO = trackerDAO;
    }

    @Override
    public List<ExpenseRecord> findAllExpensesOfTracker(int trackerId) {
        return trackerDAO.findAllExpensesOfTracker(trackerId);
    }

    @Override
    public List<IncomeRecord> findAllIncomeOfTracker(int trackerId) {
        return  trackerDAO.findAllIncomeOfTracker(trackerId);
    }

    @Override
    public ExpenseRecord findExpenseById(int expenseId) {
        return trackerDAO.findExpenseById(expenseId);
    }

    @Override
    public IncomeRecord findIncomeById(int incomeId) {
        return trackerDAO.findIncomeById(incomeId);
    }

    @Override
    public Map<String, Float> calculateTotalExpense(int trackerId) {
        float totalExpense = 0;
        List<ExpenseRecord> expenses = this.findAllExpensesOfTracker(trackerId);
        for (ExpenseRecord expense: expenses){
            totalExpense += expense.getAmount();
        }
        return Map.of("Total Expense: ",totalExpense);
        // returning the total expense as an immutable map for JSON representation
    }

    @Override
    public Map<String, Float> calculateTotalIncome(int trackerId) {
        float totalIncome = 0;
        List<IncomeRecord> incomeRecords = this.findAllIncomeOfTracker(trackerId);
        for (IncomeRecord incomeRecord: incomeRecords){
            totalIncome += incomeRecord.getAmount();
        }
        return Map.of("Total Income: ",totalIncome);
        // returning the total income as an immutable map for JSON representation
    }

    @Override
    public Map<String, Float> calculateProfit(int trackerId) {
        Map<String,Float> totalIncome = calculateTotalIncome(trackerId);
        Map<String,Float> totalExpense = calculateTotalExpense(trackerId);
        Float totalExpenseFloat = totalExpense.get("Total Expense: ");
        Float totalIncomeFloat = totalIncome.get("Total Income: ");
        Float profit = totalIncomeFloat - totalExpenseFloat;
        return Map.of("Profit : ",profit);
    }
}
