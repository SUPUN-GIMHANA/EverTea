package com.EverTea.FinancialTracker.Model.service;

import com.EverTea.FinancialTracker.Model.dao.TrackerDAO;
import com.EverTea.FinancialTracker.Model.entity.ExpenseRecord;
import com.EverTea.FinancialTracker.Model.entity.IncomeRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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
}
