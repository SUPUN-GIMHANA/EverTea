package com.EverTea.EverTea.UserLoginOrSignup.Repository;

import java.text.SimpleDateFormat;
import java.util.List;
import java.sql.Date;
import java.text.ParseException;
import java.text.SimpleDateFormat;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.EverTea.EverTea.UserLoginOrSignup.DTO.UserLoginOrSignupDTO;

@Repository
public class UserLoginOrSignupRepo {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public UserLoginOrSignupDTO userChecker(String userName, String password, String email) {
        String sqlQuery = "SELECT * FROM userlogin WHERE username = ? AND password = ? AND email = ?"; // Check user

        try {
            return jdbcTemplate.queryForObject(sqlQuery, new Object[]{userName, password, email}, (rs, rowNum) -> {
                UserLoginOrSignupDTO user = new UserLoginOrSignupDTO();
                user.setUserName(rs.getString("username"));
                user.setEmail(rs.getString("email"));
                user.setPassword(rs.getString("password"));
                System.out.println("User Found: " + userName);
                return user;
            });
        } catch (EmptyResultDataAccessException e) {
            System.out.println("Invalid User: " + userName);
            return null;
        }
    }

    public UserLoginOrSignupDTO userSignUp(String userName, String password, String email, Integer phone, String nic, String firstName, String lastName) {

 
        String sqlQueryUsers = "INSERT INTO users (username, email, firstname, lastname, nic, phone) VALUES (?, ?, ?, ?, ?, ?)"; // Insert users
        String sqlQueryUserLogin = "INSERT INTO userlogin (username, email, password) VALUES (?, ?, ?)"; // Insert userlogin

        try {
            
            int usersInsertResult = jdbcTemplate.update(sqlQueryUsers, userName, email, firstName, lastName, nic, phone);
            int userLoginInsertResult = jdbcTemplate.update(sqlQueryUserLogin, userName, email, password);
            System.out.println("User Created: " + userName);
            UserLoginOrSignupDTO user = new UserLoginOrSignupDTO();
            user.setUserName(userName);
            user.setEmail(email);
            user.setPassword(password);
            System.out.println("User Created: " + userName);
            return user;
        } catch (EmptyResultDataAccessException e) {
            System.out.println("Invalid User: " + userName);
            return null;
        }
    }
    


}
