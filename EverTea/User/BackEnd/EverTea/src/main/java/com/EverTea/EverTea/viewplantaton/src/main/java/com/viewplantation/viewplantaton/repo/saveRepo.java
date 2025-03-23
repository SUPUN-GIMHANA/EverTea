package com.viewplantation.viewplantaton.repo;

import com.viewplantation.viewplantaton.entity.plantationEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@Repository
@EnableJpaRepositories
public interface saveRepo extends JpaRepository<plantationEntity,Integer> {
}
