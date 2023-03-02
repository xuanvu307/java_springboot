package com.example.java_springboot.exception;

public class BadRequest extends RuntimeException{
    public BadRequest(String message){
        super(message);
    }
}
