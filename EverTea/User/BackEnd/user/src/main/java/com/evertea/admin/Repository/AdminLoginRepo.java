package com.evertea.admin.Repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.evertea.admin.DTO.AdminLoginDTO;

@Repository
public class AdminLoginRepo {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public AdminLoginDTO authenticateAdmin(String username, String password) {
        String sqlQuery = "SELECT * FROM userlogin WHERE username = ? AND password = ?"; // Check both username & password

        try {
            return jdbcTemplate.queryForObject(sqlQuery, new Object[]{username, password}, (rs, rowNum) -> {
                AdminLoginDTO admin = new AdminLoginDTO();
                admin.setUsername(rs.getString("username"));
                admin.setPassword(rs.getString("password"));
                return admin;
            });
        } catch (EmptyResultDataAccessException e) {
            System.out.println("Invalid username or password for user: " + username);
            return null;
        }
    }
}
