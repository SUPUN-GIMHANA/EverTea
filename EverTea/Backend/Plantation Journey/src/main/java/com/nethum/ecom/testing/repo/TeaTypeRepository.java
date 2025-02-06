package com.nethum.ecom.testing.repo;

import com.nethum.ecom.testing.model.TeaType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TeaTypeRepository extends JpaRepository<TeaType,Long>{
}
