package com.nethum.ecom.testing.repo;

import com.nethum.ecom.testing.model.Instruction;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface InstructionRepository extends JpaRepository<Instruction, Long> {

    /*findBy indicates this is query method that retrieves data
    * TeaType indication teaType field in Instruction Entity
    * _teaTypeId refers to the teaTypeId field in the associated TeaType entity*/
    List<Instruction> findByTeaType_TeaTypeId(Long teaTypeId);
}
