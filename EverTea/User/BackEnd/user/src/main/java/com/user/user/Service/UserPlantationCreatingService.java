package com.user.user.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.user.user.Repository.UserPlantationCreatingRepo;
import com.user.user.DTO.UserPlantationCreatingDTO;

@Service
public class UserPlantationCreatingService {

    @Autowired
    private UserPlantationCreatingRepo recomendedTeaPlant; // Corrected variable name

    public boolean districtPlant(String district, String subdistrict) {
        UserPlantationCreatingDTO plantMain = recomendedTeaPlant.recomendedTeaPlantMain(district);
        return plantMain != null;
    }

    // public UserPlantationCreatingDTO  getTeaNameByDistrict(String district) {

    //     UserPlantationCreatingDTO teaNameDTO = UserPlantationCreatingRepo.accessingTeaModelNamesMain(district);

    //     return teaNameDTO;
    // }

    public UserPlantationCreatingDTO getTeaNameByDistrict(String district) {

        return recomendedTeaPlant.accessingTeaModelNamesMain(district);
    }

}
