package com.example.jwt.controller;

import com.example.jwt.entity.Blog;
import com.example.jwt.dto.BlogDto;
import com.example.jwt.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1")
public class UserController {

    @Autowired
    private UserService userService;

    //    1. Lấy danh sách blog
    @GetMapping("public/blogs")
    public Page<Blog> getAllBlog(@RequestParam(defaultValue = "1") Integer page, @RequestParam(defaultValue = "5") Integer pageSize) {

        return userService.getAllBlog(page, pageSize);
    }

    //2. Tìm kiếm blog
    @GetMapping("public/search")
    public List<Blog> searchBlogByName(@RequestParam String term) {
        return userService.searchBlogByName(term);
    }

//    3. Lấy danh sách category

//    4. Lấy danh sách category được sử dụng nhiều nhất

//    5. Lấy danh sách bài viết áp dụng category

//    6. Lấy chi tiết bài viết
    @GetMapping("public/blogs/{id}/{slug}")
    public Blog getBlogById(@PathVariable Integer id, @PathVariable String slug){
        return userService.getBlogById(id, slug);
    }
}
