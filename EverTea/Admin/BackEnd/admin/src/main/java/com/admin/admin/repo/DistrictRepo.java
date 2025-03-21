package com.admin.admin.repo;

import com.admin.admin.entity.District;
import com.admin.admin.entity.TeaModels;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@Repository
@EnableJpaRepositories
public interface DistrictRepo extends JpaRepository<District, Integer> {
}

