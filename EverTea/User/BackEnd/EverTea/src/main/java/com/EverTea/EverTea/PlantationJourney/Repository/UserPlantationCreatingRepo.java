package com.EverTea.EverTea.PlantationJourney.Repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.EverTea.EverTea.PlantationJourney.DTO.UserPlantationCreatingDTO;

@Repository
public class UserPlantationCreatingRepo {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public UserPlantationCreatingDTO districtCheckerMain(String district) {
        String sqlQuery = "SELECT * FROM district WHERE districtname = ?"; // Check main districts

        try {
            return jdbcTemplate.queryForObject(sqlQuery, new Object[]{district}, (rs, rowNum) -> {
                UserPlantationCreatingDTO plant = new UserPlantationCreatingDTO();
                plant.setDistrict(rs.getString("districtname"));
                System.out.println("District Found: " + district);
                return plant;
            });
        } catch (EmptyResultDataAccessException e) {
            System.out.println("Invalid District: " + district);
            return null;
        }
    }
    
    public UserPlantationCreatingDTO recomendedTeaPlantMain(String district) {
        String sqlQuery = "SELECT mainplant FROM district WHERE districtname = ?"; // Check recommended TeaModels

        try {
            return jdbcTemplate.queryForObject(sqlQuery, new Object[]{district}, (rs, rowNum) -> {
                UserPlantationCreatingDTO plantmain = new UserPlantationCreatingDTO();
                plantmain.setTeaNameMainDTO(rs.getString("mainplant"));
                return plantmain;
            });
        } catch (EmptyResultDataAccessException e) {
            System.out.println("No recommended TeaModels for: " + district);
            return null;
        }
    }

    public UserPlantationCreatingDTO recomendedTeaPlantSubs(String district) {
        String sqlQuery = "SELECT teaid, teaname FROM teamodels WHERE districts LIKE ?"; // Check recommended TeaModels

        try {
            List<UserPlantationCreatingDTO.TeaInfo> teaInfos = jdbcTemplate.query(sqlQuery, new Object[]{"%" + district + "%"}, (rs, rowNum) -> {
                UserPlantationCreatingDTO.TeaInfo teaInfo = new UserPlantationCreatingDTO.TeaInfo();
                teaInfo.setTeaId(rs.getInt("teaid")); // Fetch tea ID
                teaInfo.setTeaName(rs.getString("teaname")); // Fetch tea name
                return teaInfo;
            });
            // Create a UserPlantationCreatingDTO object and set the tea names and IDs
            UserPlantationCreatingDTO plantDTO = new UserPlantationCreatingDTO();
            for (UserPlantationCreatingDTO.TeaInfo teaInfo : teaInfos) {
                plantDTO.getTeaNamesSubDTO().add(teaInfo.getTeaName()); // Add tea names to the list
                plantDTO.getTeaSubIds().add(teaInfo.getTeaId()); // Add tea IDs to the list
            }
    
            return plantDTO;
        } catch (EmptyResultDataAccessException e) {
            System.out.println("No recommended TeaModels for: " + district);
            return null;
        }
    }


    public UserPlantationCreatingDTO teaModelPrice(String teaModel){
        String sqlQuery = "SELECT price FROM teamodels WHERE teaname = ?"; // Check TeaModel Price

        try {
            return jdbcTemplate.queryForObject(sqlQuery, new Object[]{teaModel}, (rs, rowNum) -> {
                UserPlantationCreatingDTO teaModelPriceValue = new UserPlantationCreatingDTO();
                teaModelPriceValue.setTeaModelPrice(rs.getDouble("price"));
                return teaModelPriceValue;
            });
        } catch (EmptyResultDataAccessException e) {
            System.out.println("Price for the teamodel: " );
            return null;
        }
    }

    public UserPlantationCreatingDTO avgPlantsForADistrict(String district){
        String sqlQuery = "SELECT avgplants FROM district WHERE districtname = ?"; // Check TeaModel Price
        UserPlantationCreatingDTO avgPlantsForADistrictValue = new UserPlantationCreatingDTO();

        try {
            return jdbcTemplate.queryForObject(sqlQuery, new Object[]{district}, (rs, rowNum) -> {
                avgPlantsForADistrictValue.setAvgPlantsForADistrict(rs.getInt("avgplants"));
                return avgPlantsForADistrictValue;
            });
        } catch (EmptyResultDataAccessException e) {
            System.out.println("Avg Plants for that district: " + avgPlantsForADistrictValue.getAvgPlantsForADistrict() );
            return null;
        }
    }

    //TeaModel ID finder to store the plantation in the database
    public Integer teaModelIDFinder(String teaModelName) {
        
        String sqlQuery = "SELECT teaid FROM teamodels WHERE teaname = ?"; // Check TeaModel ID
        try{
            return jdbcTemplate.queryForObject(sqlQuery, new Object[]{teaModelName}, Integer.class);

        }
        catch (EmptyResultDataAccessException e){
            System.out.println("No ID found for: " + teaModelName);
            return null;
        }
        
    }
    public String plantationCreationRepo( Integer userid, String location, Integer plants, Integer teamodelid, Integer cost){

        String sqlQuery = "INSERT INTO plantations (userid, location, plants, teamodelid, cost) VALUES (?, ?, ?, ?, ?)";
        try {
            // Execute the SQL query to insert data
            int rowsInserted = jdbcTemplate.update(sqlQuery, userid, location, plants, teamodelid, cost);
    
            // Check if the insertion was successful
            if (rowsInserted > 0) {
                return "Plantation created successfully!";
            } else {
                return "Failed to create plantation.";
            }
        } catch (Exception e) {
            // Log the exception and return an error message
            System.out.println("Error creating plantation: " + e.getMessage());
            return "Error creating plantation: " + e.getMessage();
        }
    }
}
