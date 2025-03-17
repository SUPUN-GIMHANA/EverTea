package com.nethum.ecom.testing.repo;

import com.nethum.ecom.testing.model.Plantation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlantationRepository extends JpaRepository<Plantation,Long>{
}
