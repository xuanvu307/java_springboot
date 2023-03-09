package com.example.buoi10_quanlyuser.exception;

public class BadRequest extends RuntimeException{
    public BadRequest(String messenger){
        super(messenger);
    }
}
