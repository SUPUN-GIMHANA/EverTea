package com.nethum.ecom.testing.Exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class GlobalExceptionHandler {

    //  Handle ID Not Found Exception (Custom Exception)
    @ExceptionHandler(IDNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleIDNotFoundException(IDNotFoundException ex){
        ErrorResponse errorResponse = new ErrorResponse(
                HttpStatus.NOT_FOUND.value(),   //Status code (eg: 404)
                ex.getMessage(),        //Message from exception
                LocalDateTime.now());   //current timestamp
        return new ResponseEntity<>(errorResponse,HttpStatus.NOT_FOUND);
    }

    // Handle invalid Data Type
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Object> handleInvalidArguments(MethodArgumentNotValidException exception){
        Map<String, String> errors = new HashMap<>();

        for(FieldError error : exception.getBindingResult().getFieldErrors()){
            errors.put(error.getField(), error.getDefaultMessage());
        }

        return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponse> handleGeneralExceptions(Exception exception){
        ErrorResponse errorResponse = new ErrorResponse(
                HttpStatus.INTERNAL_SERVER_ERROR.value(),
                "Something went arong :"+exception.getMessage(),
                LocalDateTime.now()
        );

        return new ResponseEntity<>(errorResponse,HttpStatus.INTERNAL_SERVER_ERROR);
    }
}