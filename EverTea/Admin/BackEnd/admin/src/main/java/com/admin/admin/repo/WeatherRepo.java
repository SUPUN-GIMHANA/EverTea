package com.admin.admin.repo;


import com.admin.admin.entity.Weathr;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@Repository
@EnableJpaRepositories
public interface WeatherRepo extends JpaRepository<Weathr, Integer> {
}
