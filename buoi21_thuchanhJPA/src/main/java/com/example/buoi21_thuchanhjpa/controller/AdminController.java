package com.example.buoi21_thuchanhjpa.controller;

import com.example.buoi21_thuchanhjpa.model.Course;
import com.example.buoi21_thuchanhjpa.request.CreateCourse;
import com.example.buoi21_thuchanhjpa.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/admin/courses")
public class AdminController {
    @Autowired
    private AdminService adminService;

    @GetMapping("")
    public List<Course> getListCourse(@RequestParam(defaultValue = "1") Integer page, @RequestParam(defaultValue = "10") Integer pageSize){
        return adminService.getListCourse(page,pageSize);
    }

    @PostMapping("")
    public Course creatCourse(@RequestBody CreateCourse request){
        return adminService.creatCourse(request);
    }

    @GetMapping("{id}")
    public Course getCourse(@PathVariable Integer id){
        return adminService.getCourse(id);
    }
    @PutMapping("{id}")
    public Course changeCourse(@PathVariable Integer id,@RequestBody CreateCourse request){
        return adminService.changeCourse(id,request);
    }

    @DeleteMapping("{id}")
    public void deleteCourse(@PathVariable Integer id){
        adminService.deleteCourse(id);
    }
}
