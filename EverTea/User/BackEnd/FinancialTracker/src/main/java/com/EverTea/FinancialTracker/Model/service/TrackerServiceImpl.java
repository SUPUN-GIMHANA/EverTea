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
}
