package com.user.user.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.user.user.DTO.UserPlantationCreatingDTO;
import com.user.user.Repository.UserPlantationCreatingRepo;

@Service
public class UserPlantationCreatingService {

    @Autowired
    private UserPlantationCreatingRepo recomendedTeaPlant;

    public String districtChecker(String district) {
        recomendedTeaPlant.districtCheckerMain(district);

        UserPlantationCreatingDTO teaModel = recomendedTeaPlant.recomendedTeaPlantMain(district);
        if (teaModel == null) {
            return "No recommended Tea Models found";
        }

        recomendedTeaPlant.recomendedTeaPlantSubs(district);
        return "Recommended Tea Models for " + district + " is " + teaModel.getTeaNameMainDTO();
    }
}
