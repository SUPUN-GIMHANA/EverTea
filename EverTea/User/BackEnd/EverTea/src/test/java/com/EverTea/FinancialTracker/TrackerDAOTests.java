package com.EverTea.FinancialTracker;


import com.EverTea.EverTea.EverTeaBackEnd;
import com.EverTea.EverTea.FinancialTracker.Model.dao.TrackerDAO;
import com.EverTea.EverTea.FinancialTracker.Model.dao.TrackerDAOImpl;
import com.EverTea.EverTea.FinancialTracker.Model.entity.ExpenseRecord;
import com.EverTea.EverTea.FinancialTracker.Model.entity.FinancialTracker;
import com.EverTea.EverTea.FinancialTracker.Model.entity.IncomeRecord;
import jakarta.persistence.EntityManager;
import org.assertj.core.api.Assertions;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;



@SpringBootTest(classes = EverTeaBackEnd.class)
public class TrackerDAOTests {

    private TrackerDAO trackerDAO;
    private EntityManager entityManager;

    @Autowired
    public TrackerDAOTests(EntityManager entityManager){
        this.trackerDAO = new TrackerDAOImpl(entityManager);
        this.entityManager= entityManager;
    }

    @Transactional
    @Test
    public void findAllExpensesOfTracker(){
        //Arrange
        FinancialTracker tracker = new FinancialTracker();
        entityManager.persist(tracker);

        ExpenseRecord expenseRecord1 = new ExpenseRecord(20,"Bought fertilizer",LocalDateTime.now());
        ExpenseRecord expenseRecord2 = new ExpenseRecord(30,"Transport harvest",LocalDateTime.now());
        expenseRecord1.setTracker(tracker);
        expenseRecord2.setTracker(tracker);
        entityManager.persist(expenseRecord1);
        entityManager.persist(expenseRecord2);
        entityManager.flush();
        entityManager.refresh(tracker);

        //Act
        List<ExpenseRecord> expenseRecords = trackerDAO.findAllExpensesOfTracker(tracker.getId());

        //Assert
        Assertions.assertThat(expenseRecords).isNotNull();
        Assertions.assertThat(expenseRecords.size()).isEqualTo(2);
    }

    @Transactional
    @Test
    public void findAllIncomeOfTracker(){
        //Arrange
        FinancialTracker tracker = new FinancialTracker();
        entityManager.persist(tracker);
        IncomeRecord incomeRecord1 = new IncomeRecord(20,"Sold the harvest",LocalDateTime.now());
        IncomeRecord incomeRecord2 = new IncomeRecord(30,"Sold tea leaves",LocalDateTime.now());
        incomeRecord1.setTracker(tracker);
        incomeRecord2.setTracker(tracker);
        entityManager.persist(incomeRecord1);
        entityManager.persist(incomeRecord2);
        entityManager.flush();
        entityManager.refresh(tracker);

        //Act
        List<IncomeRecord> incomeRecords = trackerDAO.findAllIncomeOfTracker(tracker.getId());

        //Assert
        Assertions.assertThat(incomeRecords).isNotNull();
        Assertions.assertThat(incomeRecords).size().isEqualTo(2);

    }

    @Transactional
    @Test
    public void findTrackerById(){
        //Arrange
        FinancialTracker tracker = new FinancialTracker();
        trackerDAO.save(tracker);

        //Act
        FinancialTracker testTracker = trackerDAO.findTrackerById(tracker.getId());

        //Assert
        Assertions.assertThat(testTracker).isNotNull();
    }

    @Transactional
    @Test
    public void findExpenseById(){
        //Arrange
        FinancialTracker tracker = new FinancialTracker();
        ExpenseRecord expenseRecord = new ExpenseRecord();
        trackerDAO.save(tracker);
        trackerDAO.save(tracker.getId(),expenseRecord);

        //Act
        ExpenseRecord expenseRecordTest = trackerDAO.findExpenseById(expenseRecord.getId());

        //Assert
        Assertions.assertThat(expenseRecordTest).isNotNull();
    }

    @Transactional
    @Test
    public void fintIncomeById(){
        //Arrange
        FinancialTracker tracker = new FinancialTracker();
        IncomeRecord incomeRecord = new IncomeRecord();
        trackerDAO.save(tracker);
        trackerDAO.save(tracker.getId(),incomeRecord);

        //Act
        IncomeRecord incomeRecordTest = trackerDAO.findIncomeById(incomeRecord.getId());

        //Assert
        Assertions.assertThat(incomeRecordTest).isNotNull();
    }

}
