package com.EverTea.EverTea.FinancialTracker.Model.dao;

import com.EverTea.EverTea.FinancialTracker.Model.entity.ExpenseRecord;
import com.EverTea.EverTea.FinancialTracker.Model.entity.FinancialTracker;
import com.EverTea.EverTea.FinancialTracker.Model.entity.IncomeRecord;
import jakarta.persistence.EntityManager;
import jakarta.persistence.Query;
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
        // sets the financial tracker to maintain the bi-directional relationship
        entityManager.persist(expenseRecord);
    }

    // Saves an income record to the database
    @Override
    public void save(int trackerId, IncomeRecord incomeRecord) {
        FinancialTracker financialTracker = this.findTrackerById(trackerId);
        incomeRecord.setTracker(financialTracker);
        // sets the financial tracker to maintain the bi-directional relationship
        entityManager.persist(incomeRecord);
    }

    // Updates an expense record
    @Override
    public ExpenseRecord update(ExpenseRecord expenseRecord) {
        return entityManager.merge(expenseRecord);
    }

    @Override
    public IncomeRecord update(IncomeRecord incomeRecord) {
        return entityManager.merge(incomeRecord);
    }

    @Override
    public void deleteAllIncomeRecords(int trackerId) {
        /* using the feature of the bi-directional relationship to find income
           records related to a financial tracker, querying from the child entity
           to find the related parent
           entity  */
        Query query = entityManager.createQuery("DELETE FROM IncomeRecord WHERE tracker.id =:trackerId");
        query.setParameter("trackerId",trackerId);
        query.executeUpdate();
    }

    @Override
    public void deleteAllExpenseRecords(int trackerId) {
        /* using the feature of the bi-directional relationship to find expense
           records related to a financial tracker, querying from the child entity
           to find the related parent
           entity  */
        Query query = entityManager.createQuery("DELETE FROM ExpenseRecord WHERE tracker.id = :trackerId");
        query.setParameter("trackerId",trackerId);
        query.executeUpdate();
    }

    @Override
    public void deleteExpenseRecord(ExpenseRecord expenseRecord) {
        entityManager.remove(expenseRecord);
    }

    @Override
    public void deleteIncomeRecord(IncomeRecord incomeRecord) {
        entityManager.remove(incomeRecord);
    }

}
