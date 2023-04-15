package com.example.jwt.controller;

import com.example.jwt.entity.Blog;
import com.example.jwt.mapper.BlogDto;
import com.example.jwt.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
@RequestMapping("api/v1")
public class UserController {

    @Autowired
    private UserService userService;

    //    1. Lấy danh sách blog
    @GetMapping("public/blogs")
    public Page<BlogDto> getAllBlog(@RequestParam(defaultValue = "1") Integer page, @RequestParam(defaultValue = "5") Integer pageSize) {

        return userService.getAllBlog(page, pageSize);
    }

    //2. Tìm kiếm blog
    @GetMapping("public/search")
    public List<Blog> searchBlogByName(@RequestParam String term){
        return userService.searchBlogByName(term);
    }

//    3. Lấy danh sách category

}
