package com.user.user.Repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.user.user.DTO.UserPlantationCreatingDTO;

@Repository
public class UserPlantationCreatingRepo {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public UserPlantationCreatingDTO recomendedTeaPlantMain(String district) {
        String sqlQuery = "SELECT * FROM teamodels WHERE maindistrict = ?"; // Check main districts

        try {
            return jdbcTemplate.queryForObject(sqlQuery, new Object[]{district}, (rs, rowNum) -> {
                UserPlantationCreatingDTO plant = new UserPlantationCreatingDTO();
                plant.setDistrict(rs.getString("maindistrict"));
                return plant;
            });
        } catch (EmptyResultDataAccessException e) {
            System.out.println("Invalid District: " + district);
            return null;
        }
    }
    
    public UserPlantationCreatingDTO recomendedTeaPlantSubs(String district) {
        String sqlQuery = "SELECT * FROM teamodels WHERE subdistricts = ?"; // Check sub districts

        try {
            return jdbcTemplate.queryForObject(sqlQuery, new Object[]{district}, (rs, rowNum) -> {
                UserPlantationCreatingDTO plantsubs = new UserPlantationCreatingDTO();
                plantsubs.setDistrict(rs.getString("subdistricts"));
                return plantsubs;
            });
        } catch (EmptyResultDataAccessException e) {
            System.out.println("Invalid District: " + district);
            return null;
        }
    }

    public UserPlantationCreatingDTO accessingTeaModelNamesMain(String district) {
        String sqlQuery = "SELECT teaname FROM teamodels WHERE maindistrict = ?";

        try {
            return jdbcTemplate.queryForObject(sqlQuery, new Object[]{district}, (rs, rowNum) -> {
                UserPlantationCreatingDTO plantMain = new UserPlantationCreatingDTO();
                plantMain.setDistrict(rs.getString("teaname"));
                return plantMain;
            });
        } catch (EmptyResultDataAccessException e) {
            System.out.println("Invalid District: " + district + " No Tea Name Found");
            return null;
        }
    }
    
}
