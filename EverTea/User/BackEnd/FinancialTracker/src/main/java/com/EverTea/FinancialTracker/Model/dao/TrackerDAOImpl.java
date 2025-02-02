package com.EverTea.FinancialTracker.Model.dao;

import jakarta.persistence.EntityManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class TrackerDAOImpl implements TrackerDAO{

    private EntityManager entityManager;

    @Autowired
    public TrackerDAOImpl(EntityManager entityManager){
        this.entityManager = entityManager;
    }
}
