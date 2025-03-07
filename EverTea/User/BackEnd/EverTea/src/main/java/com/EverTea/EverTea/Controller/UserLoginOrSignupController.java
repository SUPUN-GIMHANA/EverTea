package com.EverTea.EverTea.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.EverTea.EverTea.UserLoginOrSignup.Service.UserLoginOrSignupService;
import com.EverTea.EverTea.UserLoginOrSignup.DTO.UserLoginOrSignupDTO;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/userLoginOrSignup")
public class UserLoginOrSignupController {

    @Autowired
    private UserLoginOrSignupService loginAndSignup; // Using Service

    

    @PostMapping("/signUp")
    public UserLoginOrSignupDTO plantChoosingWithDistrict(@RequestBody UserLoginOrSignupDTO userLoginOrSignup) {

        String userName = userLoginOrSignup.getUserName();
        String password = userLoginOrSignup.getPassword();
        String email = userLoginOrSignup.getEmail();
        Integer phone = userLoginOrSignup.getPhone();
        String nic = userLoginOrSignup.getNic();
        String firstName = userLoginOrSignup.getFirstName();
        String lastName = userLoginOrSignup.getLastName();

        System.out.println("Received User: " + userName + " " + password + " " + email + " " + phone + " " + nic);
        
        return loginAndSignup.userSignUp(userName, password, email, phone, nic, firstName, lastName);
    }

    @PostMapping("/login")
    public String plantationTeaModel(@RequestBody UserLoginOrSignupDTO userLoginOrSignup) {

        // Integer teaModel = districtPlantation.getTeaModel();

        String userName = userLoginOrSignup.getUserName();
        String password = userLoginOrSignup.getPassword();
        String email = userLoginOrSignup.getEmail();
        UserLoginOrSignupDTO login = loginAndSignup.userChecker(userName, password, email);
        
        System.out.println("Received User: " + userName + " " + password + " " + email);
        return login.getUserName();
    }
}