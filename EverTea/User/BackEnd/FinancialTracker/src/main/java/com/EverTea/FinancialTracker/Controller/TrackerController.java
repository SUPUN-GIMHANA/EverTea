package com.EverTea.FinancialTracker.Controller;

import com.EverTea.FinancialTracker.Model.entity.ExpenseRecord;
import com.EverTea.FinancialTracker.Model.entity.IncomeRecord;
import com.EverTea.FinancialTracker.Model.service.TrackerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

@RequestMapping("/api")
@RestController
public class TrackerController {

    TrackerService trackerService;

    @Autowired
    public TrackerController(TrackerService trackerService){
        this.trackerService = trackerService;
    }

    // Returns all expenses related to a particular financial tracker
    @GetMapping("/finances/{trackerId}/expenses")
    public List<ExpenseRecord> findAllExpensesOfTracker(@PathVariable int trackerId){
        return trackerService.findAllExpensesOfTracker(trackerId);
    }

    // Returns all income records related to a particular financial tracker
    @GetMapping("/finances/{trackerId}/income")
    public List<IncomeRecord> findAllIncomeOfTracker(@PathVariable int trackerId){
        return trackerService.findAllIncomeOfTracker(trackerId);
    }

    /* Returns an expense by Id, trackerId is not used as a method parameter
       here since each expense record has a unique Id so the
       tracker Id of that expense record is not required to find that particular
       expense record
    */
    @GetMapping("/finances/{trackerId}/expenses/{expenseId}")
    public ExpenseRecord findExpenseById(@PathVariable int expenseId){
        return trackerService.findExpenseById(expenseId);
    }

    /* Returns an income by Id, trackerId is not used as a method parameter
      here since each income record has a unique Id so the
      tracker Id of that income record is not required to find that particular
      income record
   */
    @GetMapping("/finances/{trackerId}/income/{incomeId}")
    public IncomeRecord findIncomeById(@PathVariable int incomeId){
        return trackerService.findIncomeById(incomeId);
    }

    // Returns all time total expense of a financial tracker
    @GetMapping("/finances/{trackerId}/expenses/total")
    public Map<String,Float> getTotalExpense(@PathVariable int trackerId){
        return trackerService.calculateTotalExpense(trackerId);
    }

    // Returns all time total income of a financial tracker
    @GetMapping("/finances/{trackerId}/income/total")
    public Map<String,Float> getTotalIncome(@PathVariable int trackerId){
        return trackerService.calculateTotalIncome(trackerId);
    }

    // Returns all time profit of a financial tracker
    @GetMapping("/finances/{trackerId}/profit")
    public Map<String,Float> getProfit(@PathVariable int trackerId){
        return trackerService.calculateProfit(trackerId);
    }

    // Returns the total expense of a financial tracker for a particular time period
    @GetMapping("/finances/{trackerId}/expenses/total/{startDateTime}/{endDateTime}")
    public Map<String,Float> getTotalExpense(@PathVariable int trackerId, @PathVariable LocalDateTime startDateTime, @PathVariable LocalDateTime endDateTime){
        return trackerService.calculateTotalExpense(trackerId,startDateTime,endDateTime);
    }

}
