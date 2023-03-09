package com.example.buoi10_quanlyuser.exception;

public class NotFoundException extends RuntimeException{
    public NotFoundException(String messenger){
        super(messenger);
    }
}
