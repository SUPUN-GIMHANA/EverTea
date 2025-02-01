package com.evertea.admin.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.evertea.admin.Repository.AdminLoginRepo;
import com.evertea.admin.DTO.AdminLoginDTO;

@Service
public class AdminLoginService {

    @Autowired
    private AdminLoginRepo authenticationRepo; // Corrected variable name

    public boolean authenticate(String username, String password) {
        AdminLoginDTO admin = authenticationRepo.authenticateAdmin(username, password);
        return admin != null;
    }
}
