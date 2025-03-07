package com.EverTea.EverTea.UserLoginOrSignup.Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.EverTea.EverTea.PlantationJourney.DTO.UserPlantationCreatingDTO;
import com.EverTea.EverTea.UserLoginOrSignup.DTO.UserLoginOrSignupDTO;
import com.EverTea.EverTea.UserLoginOrSignup.Repository.UserLoginOrSignupRepo;



@Service
public class UserLoginOrSignupService {

    @Autowired
    private UserLoginOrSignupRepo loginAndSignup;

    //Varibles for this class
    
    private String lastUserName; // Store last received district
    private String lastPassword; // Store last received area
    private String lastEmail; // Store last received landSlope
    private Integer lastPhone; // Store last received teaModel
    private String lastNIC; // Store last received teaModel
    

    public UserLoginOrSignupDTO userChecker(String userName, String password, String email) {
        this.lastUserName = userName; // Save username for later use
        this.lastPassword = password; // Save username for later use
        this.lastEmail = email; // Save username for later use

        return loginAndSignup.userChecker(userName, password, email);
    }
    public UserLoginOrSignupDTO userSignUp(String userName, String password, String email, Integer phone, String nic, String firstName, String lastName) {
        this.lastUserName = userName; // Save username for later use
        this.lastPassword = password; // Save username for later use
        this.lastEmail = email; // Save username for later use
        this.lastPhone = phone; // Save username for later use
        this.lastNIC = nic; // Save username for later use

        return loginAndSignup.userSignUp(userName, password, email, phone, nic, firstName, lastName);
    }

}