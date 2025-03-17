package com.EverTea.EverTea.PlantationJourneyInstructions.repo;

import com.EverTea.EverTea.PlantationJourneyInstructions.model.Instruction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface InstructionRepository extends JpaRepository<Instruction, Long> {

    /*findBy indicates this is query method that retrieves data
    *TeaType indication teaType field in Instruction Entity
    *teaTypeId refers to the teaTypeId field in the associated TeaType entity*/
    List<Instruction> findByTeaType_TeaTypeId(Long teaTypeId);
}
