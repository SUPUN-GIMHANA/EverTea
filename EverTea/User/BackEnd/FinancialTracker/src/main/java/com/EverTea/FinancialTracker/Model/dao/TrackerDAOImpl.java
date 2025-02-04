package com.EverTea.FinancialTracker.Model.dao;

import com.EverTea.FinancialTracker.Model.entity.ExpenseRecord;
import com.EverTea.FinancialTracker.Model.entity.FinancialTracker;
import com.EverTea.FinancialTracker.Model.entity.IncomeRecord;
import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
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

    // Finds a particular income record by its Id
    @Override
    public IncomeRecord findIncomeById(int incomeId) {
        IncomeRecord income = entityManager.find(IncomeRecord.class,incomeId);
        return income;
    }

    // Saves a financial tracker to the database
    @Override
    public void save(FinancialTracker financialTracker) {
        entityManager.persist(financialTracker);
    }

    // Finds a financial tracker by its Id
    @Override
    public FinancialTracker findTrackerById(int trackerId) {
        return entityManager.find(FinancialTracker.class,trackerId);
    }

    // Saves an expense record to the database
    @Override
    public void save(int trackerId, ExpenseRecord expenseRecord) {
        FinancialTracker financialTracker = this.findTrackerById(trackerId);
        expenseRecord.setTracker(financialTracker);
        entityManager.persist(expenseRecord);
    }

    @Override
    public void save(int trackerId, IncomeRecord incomeRecord) {
        FinancialTracker financialTracker = this.findTrackerById(trackerId);
        incomeRecord.setTracker(financialTracker);
        entityManager.persist(incomeRecord);
    }

}
