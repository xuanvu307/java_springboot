package com.example.jwt.controller;

import com.example.jwt.entity.Blog;
import com.example.jwt.entity.Category;
import com.example.jwt.entity.Comment;
import com.example.jwt.entity.User;
import com.example.jwt.request.*;
import com.example.jwt.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/admin/")
public class AdminController {
    @Autowired
    private AdminService adminService;

    //    Quản lý blog
    //    Lấy danh sách blog (có phân trang, mặc định là pageSize = 10)
    @GetMapping("blogs")
    public Page<Blog> getAllBlog(@RequestParam(defaultValue = "1") Integer page, @RequestParam(defaultValue = "10") Integer pageSize) {
        return adminService.getAllBlog(page - 1, pageSize);
    }

    //    Lấy danh sách blog của user đang login (có phân trang, mặc định là pageSize = 10)
//    GET : api/v1/admin/blogs/own-blogs?page={page}&pageSize={pageSize}
    @GetMapping("blogs/own-blogs")
    public Page<Blog> getBlogByUser(@RequestParam(defaultValue = "1") Integer page,
                                    @RequestParam(defaultValue = "10") Integer pageSize) {
        return adminService.getBlogByUser(page, pageSize);
    }

    //    Lấy chi tiết blog theo id
    @GetMapping("blogs/{id}")
    public Blog getBlogById(@PathVariable Integer id) {
        return adminService.getBlogById(id);
    }

    //    Thêm blog mới
    @PostMapping("blogs")
    public Blog createBlog(@RequestBody CreateBlogRequest request) {
        return adminService.createBlog(request);
    }

    //    Cập nhật blog
    @PutMapping("blogs")
    public Blog changeBlog(@PathVariable Integer id, @RequestBody ChangeBlogRequest request) {
        return adminService.changeBlog(id, request);
    }

    //    Xóa blog (xóa blog xóa luôn comment liên quan đến blog)
    @DeleteMapping("blogs")
    public void deleteBlog(@PathVariable Integer id) {
        adminService.deleteBlog(id);
    }

    //    Tìm kiếm bài viết (chỉ cần bài viết chứa keyword là được)
    @GetMapping("blogs/search")
    public Page<Blog> searchBlog(@RequestParam String keyword,
                                 @RequestParam(defaultValue = "1") Integer page,
                                 @RequestParam(defaultValue = "10") Integer pageSize) {
        return adminService.searchBlog(keyword, page - 1, pageSize);
    }

    //    Quản lý category
    //    Lấy ds category (có phân trang, mặc định là pageSize = 10)
    @GetMapping("categories")
    public Page<Category> getAllCategory(@RequestParam(defaultValue = "1") Integer page,
                                         @RequestParam(defaultValue = "10") Integer pageSize) {
        return adminService.getAllCategory(page, pageSize);
    }

    //    Thêm category (Lưu ý tên category không được trùng nhau)
    @PostMapping("categories")
    public Category createCategory(@RequestBody CreateCategoryRequest request) {
        return adminService.createCategory(request);
    }

    //    Cập nhật category (Lưu ý tên category không được trùng nhau)
    @PutMapping("categories")
    public Category changeCategory(@PathVariable Integer id, @RequestBody ChangCategoryRequest request) {
        return adminService.changeCategory(id, request);
    }

    //    Xóa category (xóa blog áp dụng category trong bảng trung gian, không xóa blog trong bảng blog)
    @DeleteMapping("categories")
    public void deleteCategory(@PathVariable Integer id) {
        adminService.deleteCategory(id);
    }

    //    Quản lý user
    //    Lấy ds user (có phân trang, mặc định là pageSize = 10)
    @GetMapping("admin/users")
    public Page<User> getAllUser(@RequestParam(defaultValue = "1") Integer page,
                                 @RequestParam(defaultValue = "10") Integer pageSize) {
        return adminService.getAllUser(page, pageSize);
    }

    //    Tạo user mới
    @PostMapping("admin/users")
    public User createUser(@RequestBody CreateUserRequest request) {
        return adminService.createUser(request);
    }

    //    Cập nhật thông tin user
    @PutMapping("admin/users")
    public User changeUser(@PathVariable Integer id, @RequestBody ChangUserRequest request) {
        return adminService.changeUser(id, request);
    }

    //    Quản lý comment
    //    Hiển thị ds comment (có phân trang, mặc định là pageSize = 10)
    @GetMapping("comments")
    public Page<Comment> getAllComment(@RequestParam(defaultValue = "1") Integer page,
                                       @RequestParam(defaultValue = "10") Integer pageSize){
        return adminService.getAllComment(page,pageSize);
    }
    //    Cập nhật thông tin comment
    @PutMapping("comments")
    public Comment changeComment(@PathVariable Integer id, @RequestBody ChangeCommentRequest request){
        return adminService.changeComment(id, request);
    }
//    Xóa comment
//    DELETE : api/v1/admin/comments/{id}
    @DeleteMapping("comments")
    public void deleteComment(@PathVariable Integer id){
        adminService.deleteComment(id);
    }
}
