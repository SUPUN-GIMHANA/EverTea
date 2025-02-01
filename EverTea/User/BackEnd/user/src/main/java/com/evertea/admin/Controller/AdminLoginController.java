package com.evertea.admin.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.web.csrf.CsrfToken;
import org.springframework.web.bind.annotation.*;

import com.evertea.admin.DTO.AdminLoginDTO;
import com.evertea.admin.DTO.AdminSignUpDTO;
import com.evertea.admin.Service.AdminLoginService;

import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/admin")
public class AdminLoginController {

    @Autowired
    private AdminLoginService adminLoginService; // Use Service instead of Repo

    @GetMapping("/login")
    public String AdminLogin(@RequestBody AdminLoginDTO adminAuthentication) {

        String username = adminAuthentication.getUsername();
        String password = adminAuthentication.getPassword();
        
        System.out.println("Received UserName: " + username + " and Password: " + password);
        boolean isAuthenticated = adminLoginService.authenticate(username, password);
        return isAuthenticated ? "Login Successful" : "Invalid username or password";
    }

    @GetMapping("/csrf")
    public CsrfToken getCsrfToken(HttpServletRequest request) {
        return (CsrfToken) request.getAttribute("_csrf");
    }

    @PostMapping("/signUp")
    public String AdminSignUp(@RequestBody AdminSignUpDTO adminSignUp) {

        String username = adminSignUp.getUsername();
        String password = adminSignUp.getPassword();
        
        System.out.println("Received UserName: " + username + " and Password: " + password);
        boolean isAuthenticated = adminLoginService.authenticate(username, password);
        return isAuthenticated ? "Login Successful" : "Invalid username or password";
    }
}