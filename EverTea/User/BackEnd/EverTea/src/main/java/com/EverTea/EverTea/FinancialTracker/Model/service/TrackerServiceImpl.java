package com.EverTea.EverTea.FinancialTracker.Model.service;

import com.EverTea.EverTea.FinancialTracker.Model.dao.TrackerDAO;
import com.EverTea.EverTea.FinancialTracker.Model.entity.ExpenseRecord;
import com.EverTea.EverTea.FinancialTracker.Model.entity.FinancialTracker;
import com.EverTea.EverTea.FinancialTracker.Model.entity.IncomeRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.ArrayList;
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

    // Finds all expenses related to a financial tracker for a particular time period
    @Override
    public List<ExpenseRecord> findAllExpensesOfTracker(int trackerId, LocalDateTime startDateTime, LocalDateTime endDateTime) {
        List<ExpenseRecord> allTimeExpenses = this.findAllExpensesOfTracker(trackerId);
        List<ExpenseRecord> expenses = new ArrayList<>(); // To store the expenses that occurred during the time period provided
        for (ExpenseRecord expense : allTimeExpenses){
            // checking if the expense occurred during the time period provided
            if (!(expense.getDate().isAfter(endDateTime) || expense.getDate().isBefore(startDateTime)))
            {
                expenses.add(expense);
            }
        }
        return expenses;
    }

    @Override
    public List<IncomeRecord> findAllIncomeOfTracker(int trackerId) {
        return  trackerDAO.findAllIncomeOfTracker(trackerId);
    }

    // Finds all income records related to a financial tracker for a particular time period
    @Override
    public List<IncomeRecord> findAllIncomeOfTracker(int trackerId, LocalDateTime startDateTime, LocalDateTime endDateTime) {
        List<IncomeRecord> allTimeIncome = this.findAllIncomeOfTracker(trackerId);
        List<IncomeRecord> incomeRecords = new ArrayList<>(); // To store the income records that occurred during the time period provided
        for (IncomeRecord income : allTimeIncome){
            // checking if the income record occurred during the time period provided
            if (!(income.getDate().isAfter(endDateTime) || income.getDate().isBefore(startDateTime)))
            {
                incomeRecords.add(income);
            }
        }
        return incomeRecords;
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

    // Calculate the total expense for a particular time period
    @Override
    public Map<String, Float> calculateTotalExpense(int trackerId, LocalDateTime startDateTime, LocalDateTime endDateTime) {
        float totalExpense = 0;
        List<ExpenseRecord> expenses = this.findAllExpensesOfTracker(trackerId,startDateTime,endDateTime);
        for (ExpenseRecord expense: expenses){
            totalExpense += expense.getAmount();
        }
        return Map.of("Total Expense: ", totalExpense);
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

    // Calculate the total income for a particular time period
    @Override
    public Map<String, Float> calculateTotalIncome(int trackerId, LocalDateTime startDateTime, LocalDateTime endDateTime) {
        float totalIncome = 0;
        List<IncomeRecord> incomeRecords = findAllIncomeOfTracker(trackerId, startDateTime, endDateTime);
        for (IncomeRecord incomeRecord : incomeRecords){
            totalIncome += incomeRecord.getAmount();
        }
        return Map.of("Total Income: ",totalIncome);
    }

    @Override
    public Map<String, Float> calculateProfit(int trackerId) {
        Map<String,Float> totalIncome = calculateTotalIncome(trackerId);
        Map<String,Float> totalExpense = calculateTotalExpense(trackerId);
        Float totalExpenseFloat = totalExpense.get("Total Expense: ");
        Float totalIncomeFloat = totalIncome.get("Total Income: ");
        Float profit = totalIncomeFloat - totalExpenseFloat;
        return Map.of("Profit: ",profit);
    }

    // Calculate the total profit for a particular time period
    @Override
    public Map<String, Float> calculateProfit(int trackerId, LocalDateTime startDateTime, LocalDateTime endDateTime) {
        Map<String,Float> totalIncome = this.calculateTotalIncome(trackerId,startDateTime,endDateTime);
        Map<String,Float> totalExpense = this.calculateTotalExpense(trackerId,startDateTime,endDateTime);
        Float totalIncomeFloat = totalIncome.get("Total Income: ");
        Float totalExpenseFloat = totalExpense.get("Total Expense: ");
        Float profit = totalIncomeFloat - totalExpenseFloat;
        return Map.of("Profit: ",profit);
    }

    @Transactional
    @Override
    public void save(FinancialTracker financialTracker) {
        trackerDAO.save(financialTracker);
    }

    @Override
    public FinancialTracker findTrackerById(int trackerId) {
        return trackerDAO.findTrackerById(trackerId);
    }

    @Transactional
    @Override
    public void save(int trackerId, ExpenseRecord expenseRecord) {
        // checking if the financial tracker id is invalid
        if (this.findTrackerById(trackerId) == null){
            throw new RuntimeException("Financial tracker Id is invalid");
        }
        trackerDAO.save(trackerId,expenseRecord);
    }

    @Transactional
    @Override
    public void save(int trackerId, IncomeRecord incomeRecord) {
        if (this.findTrackerById(trackerId) == null){
            throw new RuntimeException("Financial tracker Id is invalid");
        }
        trackerDAO.save(trackerId,incomeRecord);
    }

    @Transactional
    @Override
    public ExpenseRecord update(int expenseRecordId, ExpenseRecord expenseRecord) {
        // Retrieving the expense record from the database
        ExpenseRecord expenseRecordDB = this.findExpenseById(expenseRecordId);
        // checking if the client has sent an invalid expense record Id that does not exist
        if (expenseRecordDB ==  null){
            throw new RuntimeException("Expense Record not found");
        }
        // setting the new values sent by the client
        expenseRecordDB.setAmount(expenseRecord.getAmount());
        expenseRecordDB.setDescription(expenseRecord.getDescription());
        expenseRecordDB.setDate(expenseRecord.getDate());
        return trackerDAO.update(expenseRecordDB);
    }

    @Transactional
    @Override
    public IncomeRecord update(int incomeRecordId, IncomeRecord incomeRecord) {
        // Retrieving the income record from the database
        IncomeRecord incomeRecordDB = this.findIncomeById(incomeRecordId);
        // checking if the client has sent an invalid income record Id that does not exist
        if (incomeRecordDB == null){
            throw new RuntimeException("Income record not found");
        }

        // setting the new values sent by the client
        incomeRecordDB.setAmount(incomeRecord.getAmount());
        incomeRecordDB.setDescription(incomeRecord.getDescription());
        incomeRecordDB.setDate(incomeRecord.getDate());
        return trackerDAO.update(incomeRecordDB);
    }

    @Transactional
    @Override
    public void deleteAllIncomeRecords(int trackerId) {
        FinancialTracker tracker = this.findTrackerById(trackerId);
        // checking if the client has sent a tracker Id that does not exist
        if (tracker == null){
            throw new RuntimeException("Financial Tracker not found");
        }
        trackerDAO.deleteAllIncomeRecords(trackerId);
    }

    @Transactional
    @Override
    public void deleteAllExpenseRecords(int trackerId) {
        FinancialTracker tracker = this.findTrackerById(trackerId);
        // checking if the client has sent a tracker Id that does not exist
        if (tracker == null){
            throw new RuntimeException("Financial Tracker not found");
        }
        trackerDAO.deleteAllExpenseRecords(trackerId);
    }

    @Transactional
    @Override
    public void deleteExpenseRecord(int trackerId, int expenseId) {
        // checking if the client has sent an invalid id for the tracker or expense record
        FinancialTracker tracker = this.findTrackerById(trackerId);
        ExpenseRecord expenseRecord = this.findExpenseById(expenseId);
        if (tracker == null){
            throw new RuntimeException("Financial Tracker does not exist");
        }
        if (expenseRecord == null){
            throw new RuntimeException("Expense record does not exist");
        }
        trackerDAO.deleteExpenseRecord(expenseRecord);
    }

    @Transactional
    @Override
    public void deleteIncomeRecord(int trackerId, int incomeId) {
        // checking if the client has sent an invalid id for the tracker or income record
        FinancialTracker tracker = this.findTrackerById(trackerId);
        IncomeRecord incomeRecord = this.findIncomeById(incomeId);
        if (tracker == null){
            throw new RuntimeException("Financial Tracker does not exist");
        }
        if (incomeRecord == null){
            throw new RuntimeException("Expense record does not exist");
        }
        trackerDAO.deleteIncomeRecord(incomeRecord);
    }

}
