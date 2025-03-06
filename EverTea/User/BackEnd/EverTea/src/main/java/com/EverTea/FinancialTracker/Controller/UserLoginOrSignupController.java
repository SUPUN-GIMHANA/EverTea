package com.user.user.Controller;

import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.user.user.DTO.UserLoginOrSignupDTO;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/userLoginOrSignup")
public class UserLoginOrSignupController {

    

    @PostMapping("/signUp")
    public ResponseEntity<List<String>> plantChoosingWithDistrict(@RequestBody UserLoginOrSignupDTO userLoginOrSignup) {

        String userName = userLoginOrSignup.getUserName();
        String password = userLoginOrSignup.getPassword();
        String email = userLoginOrSignup.getEmail();
        Integer phone = userLoginOrSignup.getPhone();
        String nic = userLoginOrSignup.getNic();

        System.out.println("Received User: " + userName + " " + password + " " + email + " " + phone + " " + nic);
        // return ResponseEntity.ok(teaModels);
        return null;
    }

    @PostMapping("/login")
    public String plantationTeaModel(@RequestBody UserLoginOrSignupDTO userLoginOrSignup) {

        // Integer teaModel = districtPlantation.getTeaModel();

        String userName = userLoginOrSignup.getUserName();
        String password = userLoginOrSignup.getPassword();
        String email = userLoginOrSignup.getEmail();

        System.out.println("Received User: " + userName + " " + password + " " + email);
        return "District found ";
    }
}