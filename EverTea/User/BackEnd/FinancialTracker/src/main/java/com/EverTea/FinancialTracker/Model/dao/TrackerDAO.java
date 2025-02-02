package com.EverTea.FinancialTracker.Model.dao;


import com.EverTea.FinancialTracker.Model.entity.ExpenseRecord;
import com.EverTea.FinancialTracker.Model.entity.IncomeRecord;

import java.util.List;

public interface TrackerDAO {
     List<ExpenseRecord> findAllExpensesOfTracker(int trackerId);
     List<IncomeRecord> findAllIncomeOfTracker(int trackerId);
}
