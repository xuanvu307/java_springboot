package com.example.buoi21_thuchanhjpa.controller;

import com.example.buoi21_thuchanhjpa.model.Course;
import com.example.buoi21_thuchanhjpa.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/courses")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("")
    public List<Course> getAllCourse(@RequestParam(required = false) String name,
                                     @RequestParam(required = false) String type,
                                     @RequestParam(required = false) String category) {
        return userService.getAllCourse(name, type, category);
    }

    @GetMapping("{id}")
    public Course getCourse(@PathVariable Integer id) {
        return userService.getCourse(id);
    }
}
