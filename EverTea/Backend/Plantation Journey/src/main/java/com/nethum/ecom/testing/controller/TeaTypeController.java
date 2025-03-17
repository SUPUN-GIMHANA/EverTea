package com.nethum.ecom.testing.controller;


import com.nethum.ecom.testing.DTO.UpdateTeaTypeDTO;
import com.nethum.ecom.testing.Exceptions.IDNotFoundException;
import com.nethum.ecom.testing.model.TeaType;
import com.nethum.ecom.testing.service.TeaTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("ever-tea/tea-type/")
@CrossOrigin
public class TeaTypeController {

    @Autowired
    private TeaTypeService teaTypeService;


    /**
     * Handles the HTTP POST request to save a new tea type to the tea_type table.
     *
     * @param teaType the tea type object to be saved
     * @return the saved tea type object
     */
    @PostMapping("/post-tea-type")
    public TeaType setTeaTypeByTeaTypeId(@RequestBody TeaType teaType) {
        System.out.println(teaType);
        return teaTypeService.saveTeaData(teaType);
    }

//    @PatchMapping("update-tea-type/{teaTypeId}")
//    public TeaType updateTeaTypeByTeaTypeId(@PathVariable Long teaTypeId, @RequestBody UpdateTeaTypeDTO updateTeaTypeDTO){
//        return teaTypeService.updateTeaTypeData(teaTypeId, updateTeaTypeDTO);
//    }

    /**
     * Handles the HTTP PATCH request to update an existing tea type by its ID.
     *
     * @param teaTypeId the ID of the tea type to be updated
     * @param updateTeaTypeDTO the data transfer object containing the updated tea type information
     * @return a ResponseEntity containing the updated tea type object
     * @throws IDNotFoundException if the tea type ID is not found
     */
    @PatchMapping("/update-tea-type/{teaTypeId}")
    public ResponseEntity<TeaType> updateTeaTypeByTeaTypeId(@PathVariable Long teaTypeId, @RequestBody UpdateTeaTypeDTO updateTeaTypeDTO) throws IDNotFoundException {
        TeaType updatedTeaType = teaTypeService.updateTeaTypeData(teaTypeId, updateTeaTypeDTO);
        return ResponseEntity.ok(updatedTeaType);
    }

}
