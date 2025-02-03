package com.EverTea.FinancialTracker.Model.dao;

import com.EverTea.FinancialTracker.Model.entity.ExpenseRecord;
import com.EverTea.FinancialTracker.Model.entity.FinancialTracker;
import com.EverTea.FinancialTracker.Model.entity.IncomeRecord;
import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Repository
public class TrackerDAOImpl implements TrackerDAO{

    private EntityManager entityManager;

    @Autowired
    public TrackerDAOImpl(EntityManager entityManager){
        this.entityManager = entityManager;
    }

    // Returns all expenses related to a particular financial tracker
    @Override
    public List<ExpenseRecord> findAllExpensesOfTracker(int trackerId) {
        TypedQuery<FinancialTracker> query = entityManager.createQuery("SELECT t FROM FinancialTracker t " +
                "JOIN FETCH t.expenses WHERE t.id = :trackerId",FinancialTracker.class);
        /* Join Fetch returns the expenses along with the financial tracker (eager loading), a join fetch is
           used here since lazy loading is set to the financial tracker class so we only load the expenses
           when required
        */
        query.setParameter("trackerId",trackerId);
        FinancialTracker tracker = query.getSingleResult();
        List<ExpenseRecord> expenses = tracker.getExpenses();
        return expenses;
    }

    // Returns all income sources related to a particular financial tracker
    @Override
    public List<IncomeRecord> findAllIncomeOfTracker(int trackerId) {
        TypedQuery<FinancialTracker> query = entityManager.createQuery("SELECT t FROM FinancialTracker t " +
                "JOIN FETCH t.income WHERE t.id = :trackerId",FinancialTracker.class);
        /* Join Fetch returns all the income sources along with the financial tracker (eager loading), a join fetch is
           used here since lazy loading is set to the financial tracker class so we only load the income sources
           when required
        */
        query.setParameter("trackerId",trackerId);
        FinancialTracker tracker = query.getSingleResult();
        List<IncomeRecord> income = tracker.getIncome();
        return income;
    }

    // Finds a particular expense record by its Id
    @Override
    public ExpenseRecord findExpenseById(int expenseId) {
        ExpenseRecord expense = entityManager.find(ExpenseRecord.class,expenseId);
        return expense;
    }

    @Override
    public IncomeRecord findIncomeById(int incomeId) {
        IncomeRecord income = entityManager.find(IncomeRecord.class,incomeId);
        return income;
    }
}
