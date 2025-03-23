package com.EverTea.EverTea.viewplantaton.repo;

import com.EverTea.EverTea.viewplantaton.entity.plantationEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@Repository
@EnableJpaRepositories
public interface saveRepo extends JpaRepository<plantationEntity,Integer> {
}
