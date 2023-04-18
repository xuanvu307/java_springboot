package com.example.jwt.controller;

import com.example.jwt.dto.CategoryDto;
import com.example.jwt.entity.Blog;
import com.example.jwt.entity.Comment;
import com.example.jwt.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
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
    @GetMapping("public/categories")
    public  List<CategoryDto> getAllCategory(){
        return userService.getAllCategory();
    }

    //    4. Lấy danh sách category được sử dụng nhiều nhất

    @GetMapping("public/categories/top5")
    public  Page<CategoryDto> getTopCategory(){
        return userService.getTopCategory();
    }
    //    5. Lấy danh sách bài viết áp dụng category
    @GetMapping("/public/category/{name}")
    public List<Blog> getBlogByCategoryName(@PathVariable String name) {
        return userService.getBlogByCategoryName(name);
    }

    //    6. Lấy chi tiết bài viết
    @GetMapping("public/blogs/{id}/{slug}")
    public Blog getBlogById(@PathVariable Integer id, @PathVariable String slug) {
        return userService.getBlogById(id, slug);
    }

    @GetMapping("public/blogs/{blogId}/comment")
    public Page<Comment> getCommentOnBlog(@PathVariable Integer blogId, @RequestParam(defaultValue = "0") Integer page) {
        return userService.getCommentByBlog(blogId, page);
    }
}
