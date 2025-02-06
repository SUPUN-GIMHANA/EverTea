package com.nethum.ecom.testing.service;
import com.nethum.ecom.testing.DTO.UpdateTeaTypeDTO;
import com.nethum.ecom.testing.Exceptions.IDNotFoundException;
import com.nethum.ecom.testing.model.TeaType;
import com.nethum.ecom.testing.repo.TeaTypeRepository;
import com.nethum.ecom.testing.service.Interfaces.TeaTypeServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class TeaTypeService implements TeaTypeServiceInterface {

    @Autowired
    private TeaTypeRepository teaTypeRepository;

    @Override
    public TeaType saveTeaData(TeaType teaType){
        return teaTypeRepository.save(teaType);
    }

    public TeaType updateTeaTypeData(Long teaTypeId, UpdateTeaTypeDTO updateTeaTypeDTO) throws IDNotFoundException {

//        Long tempDTOTeaTypeId = updateTeaTypeDTO.getTeaTypeId();
//
//        if(teaTypeId.equals(null) || teaTypeRepository.existsById(tempDTOTeaTypeId)){
//            throw new IDNotFoundException("Tea Type Id Not Found");
//        }
//        else {
//
//            Optional<TeaType> exitTeaType = teaTypeRepository.findById(teaTypeId);
//
//            if (updateTeaTypeDTO.getName()!=null){
//
//            }
//        }

        Optional<TeaType> tempTeaType = teaTypeRepository.findById(teaTypeId);

        if (tempTeaType.isPresent()){
            TeaType teaType = tempTeaType.get();

            if(updateTeaTypeDTO.getName()!=null){
                teaType.setName(updateTeaTypeDTO.getName());
            }

            if (updateTeaTypeDTO.getFertilizerSchedule()!=null){
                teaType.setFertilizerSchedule(updateTeaTypeDTO.getFertilizerSchedule());
            }

            if (updateTeaTypeDTO.getLifecycleWeeks()!=0){
                teaType.setLifecycleWeeks(updateTeaTypeDTO.getLifecycleWeeks());
            }

            if (updateTeaTypeDTO.getWaterIntervalDays()!=0){
                teaType.setWateringIntervalDays(updateTeaTypeDTO.getWaterIntervalDays());
            }

            return teaTypeRepository.save(teaType);
        }
        else{
            throw new IDNotFoundException("Tea Type ID " + teaTypeId + " not found.");
        }
    }


}
