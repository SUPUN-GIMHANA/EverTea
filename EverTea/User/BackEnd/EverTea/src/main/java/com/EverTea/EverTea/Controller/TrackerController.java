package com.EverTea.EverTea.Controller;


import com.EverTea.EverTea.FinancialTracker.Model.entity.ExpenseRecord;
import com.EverTea.EverTea.FinancialTracker.Model.entity.FinancialTracker;
import com.EverTea.EverTea.FinancialTracker.Model.entity.IncomeRecord;
import com.EverTea.EverTea.FinancialTracker.Model.service.TrackerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cglib.core.Local;
import org.springframework.web.bind.annotation.*;

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

    // Returns the expense records related to a tracker that occurred during a particular time period
    @GetMapping("/finances/{trackerId}/expenses/{startDateTime}/{endDateTime}")
    public List<ExpenseRecord> findAllExpenses(@PathVariable int trackerId, @PathVariable LocalDateTime startDateTime, @PathVariable LocalDateTime endDateTime){
        return trackerService.findAllExpensesOfTracker(trackerId,startDateTime,endDateTime);
    }

    // Returns the income records related to a tracker that occurred during a particular time period
    @GetMapping("/finances/{trackerId}/income/{startDateTime}/{endDateTime}")
    public List<IncomeRecord> findAllIncome(@PathVariable int trackerId, @PathVariable LocalDateTime startDateTime, @PathVariable LocalDateTime endDateTime){
        return trackerService.findAllIncomeOfTracker(trackerId,startDateTime,endDateTime);
    }

    // Returns the total expense of a financial tracker for a particular time period
    @GetMapping("/finances/{trackerId}/expenses/total/{startDateTime}/{endDateTime}")
    public Map<String,Float> getTotalExpense(@PathVariable int trackerId, @PathVariable LocalDateTime startDateTime, @PathVariable LocalDateTime endDateTime){
        return trackerService.calculateTotalExpense(trackerId,startDateTime,endDateTime);
    }

    // Returns the total income of a financial tracker for a particular time period
    @GetMapping("/finances/{trackerId}/income/total/{startDateTime}/{endDateTime}")
    public Map<String,Float> getTotalIncome(@PathVariable int trackerId, @PathVariable LocalDateTime startDateTime,@PathVariable LocalDateTime endDateTime){
        return trackerService.calculateTotalIncome(trackerId,startDateTime,endDateTime);
    }

    // Returns the total profit of a financial tracker for a particular time period
    @GetMapping("/finances/{trackerId}/profit/{startDateTime}/{endDateTime}")
    public Map<String,Float> getTotalProfit(@PathVariable int trackerId, @PathVariable LocalDateTime startDateTime,@PathVariable LocalDateTime endDateTime){
        return trackerService.calculateProfit(trackerId,startDateTime,endDateTime);
    }

    // Creates a financial tracker
    @PostMapping("/finances")
    public void saveTracker(@RequestBody FinancialTracker financialTracker){
        trackerService.save(financialTracker);
    }

    // Creates an expense record
    @PostMapping("/finances/{trackerId}/expenses")
    public void saveExpenseRecord(@RequestBody ExpenseRecord expenseRecord, @PathVariable int trackerId){
        trackerService.save(trackerId,expenseRecord);
    }

    // Creates an income record
    @PostMapping("/finances/{trackerId}/income")
    public void saveIncomeRecord(@RequestBody IncomeRecord incomeRecord, @PathVariable int trackerId){
        trackerService.save(trackerId,incomeRecord);
    }

    // Updates an expense record
    @PutMapping("/finances/{trackerId}/expenses/{expenseId}")
    public ExpenseRecord updateExpenseRecord(@PathVariable int expenseId, @RequestBody ExpenseRecord expenseRecord){
        return trackerService.update(expenseId,expenseRecord);
    }

    // Updates an income record
    @PutMapping("/finances/{trackerId}/income/{incomeId}")
    public IncomeRecord updateIncomeRecord(@PathVariable int incomeId, @RequestBody IncomeRecord incomeRecord){
        return trackerService.update(incomeId,incomeRecord);
    }

    // Deletes all income records related to a financial tracker
    @DeleteMapping("/finances/{trackerId}/income")
    public void deleteAllIncomeRecords(@PathVariable int trackerId){
        trackerService.deleteAllIncomeRecords(trackerId);
    }

    // Deletes all expense records related to a financial tracker
    @DeleteMapping("/finances/{trackerId}/expenses")
    public void deleteAllExpenseRecords(@PathVariable int trackerId){
        trackerService.deleteAllExpenseRecords(trackerId);
    }

    // Deletes an expense record related to a financial tracker
    @DeleteMapping("/finances/{trackerId}/expenses/{expenseId}")
    public void deleteExpenseRecord(@PathVariable int trackerId, @PathVariable int expenseId){
        trackerService.deleteExpenseRecord(trackerId,expenseId);
    }

    // Deletes an income record related to a financial tracker
    @DeleteMapping("/finances/{trackerId}/income/{incomeId}")
    public void deleteIncomeRecord(@PathVariable int trackerId, @PathVariable int incomeId){
        trackerService.deleteIncomeRecord(trackerId,incomeId);
    }

}
