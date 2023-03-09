package com.example.java_springboot.controller;

import com.example.java_springboot.dto.UserDTO;
import com.example.java_springboot.model.User;
import com.example.java_springboot.request.UserLoginRequest;
import com.example.java_springboot.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("user")
    public List<User> users(){
        return userService.user();
    }
    @PostMapping("/user/login")
    public UserDTO login(@RequestBody UserLoginRequest request){
        return userService.login(request);
    }
}
