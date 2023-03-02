package com.example.java_springboot.controller;

import com.example.java_springboot.exception.NotFoundException;
import com.example.java_springboot.service.ColorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RandomColorController {
    @Autowired
    private ColorService colorService;

    @GetMapping(value = "/random-color")
    public String getColor(@RequestParam Integer type) {
        try {
            return colorService.getColor(type);
        } catch (NotFoundException e) {
            return e.getMessage();
        }
    }
}
