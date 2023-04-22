package com.example.jwt.service;

import com.example.jwt.entity.*;
import com.example.jwt.exception.BadRequestException;
import com.example.jwt.repository.*;
import com.example.jwt.request.*;
import com.github.slugify.Slugify;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;
import java.util.Optional;

@Service
public class AdminService {
    @Autowired
    private BlogRepository blogRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CategoryRepository categoryRepository;
    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private CommentRepository commentRepository;

    public Page<Blog> getAllBlog(Integer page, Integer pageSize) {
        return blogRepository.findAll(PageRequest.of(page, pageSize));
    }

    public Page<Blog> getBlogByUser(Integer page, Integer pageSize) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username  = authentication.getName();
        User user = userRepository.findByEmail(username).orElseThrow(null);

        return blogRepository.findByUser(user, PageRequest.of(page, pageSize));
    }

    public Blog getBlogById(Integer id) {
        return blogRepository.findById(id).orElseThrow(() -> {
            throw new BadRequestException("không tùm thấy id");
        });
    }

    public Blog createBlog(CreateBlogRequest request) {
        Slugify slugify = Slugify.builder().build();
        Blog blog = Blog.builder()
                .title(request.getTitle())
                .slug(slugify.slugify(request.getTitle()))
                .description(request.getDescription())
                .content(request.getContent())
                .thumbnail(request.getThumbnail())
                .user(userRepository.findById(request.getUserId()).orElseThrow())
                .categories(categoryRepository.findAllById(request.getCategoryId()))
                .build();
        blogRepository.save(blog);
        return blog;
    }

    public Blog changeBlog(Integer id, ChangeBlogRequest request) {
        Optional<Blog> blogOptional = blogRepository.findById(id);
        if (blogOptional.isPresent()) {
            Blog blog = blogOptional.get();
            blog.setTitle(request.getTitle());
            blog.setDescription(request.getDescription());
            blog.setContent(request.getContent());
            blog.setThumbnail(request.getThumbnail());
            blog.setUser(userRepository.findById(request.getUserId()).orElseThrow());
            blog.setCategories(categoryRepository.findAllById(request.getCategoryId()));

            blogRepository.save(blog);
            return blog;
        } else {
            throw new BadRequestException("không tìm thấy id");
        }
    }

    public void deleteBlog(Integer id) {
        Optional<Blog> blogOptional = blogRepository.findById(id);
        if (blogOptional.isPresent()) {
            blogRepository.delete(blogOptional.get());
        } else {
            throw new BadRequestException("không tìm thấy id");
        }
    }

    public Page<Blog> searchBlog(String keyword, Integer page, Integer pageSize) {
        return blogRepository.findByTitleContainingIgnoreCase(keyword, PageRequest.of(page, pageSize));
    }

    public Page<Category> getAllCategory(Integer page, Integer pageSize) {
        return categoryRepository.findAll(PageRequest.of(page, pageSize));
    }

    public Category createCategory(CreateCategoryRequest request) {
        Category category = categoryRepository.findByName(request.getName());
        if (category == null) {
            categoryRepository.save(new Category(null, request.getName()));
            return categoryRepository.findByName(request.getName());
        } else {
            throw new BadRequestException("tên đã được sử dụng");
        }
    }

    public Category changeCategory(Integer id, ChangCategoryRequest request) {
        Optional<Category> categoryOptional = categoryRepository.findById(id);
        Category category = categoryRepository.findByName(request.getName());
        if (categoryOptional.isPresent() && category == null) {
            Category ctg = categoryOptional.get();
            ctg.setName(request.getName());
            categoryRepository.save(ctg);
            return ctg;
        } else {
            throw new BadRequestException("tên đã đc sử dụng hoặc id không tồn tại");
        }
    }

    public void deleteCategory(Integer id) {
        Optional<Category> categoryOptional = categoryRepository.findById(id);
        if (categoryOptional.isPresent()) {
            categoryRepository.delete(categoryOptional.get());
        } else {
            throw new BadRequestException("không tìm thấy id");
        }
    }

    public Page<User> getAllUser(Integer page, Integer pageSize) {
        return userRepository.findAll(PageRequest.of(page, pageSize));
    }

    public User createUser(CreateUserRequest request) {
        List<Role> roles = roleRepository.findAllById(request.getRole());
        String password = passwordEncoder.encode(request.getPassword());

        User user = new User(null, request.getName(), request.getEmail(), password, null, roles);

        userRepository.save(user);
        return user;
    }

    public User changeUser(Integer id, ChangUserRequest request) {
        Optional<User> userOptional = userRepository.findById(id);
        if (userOptional.isPresent()) {
            User user = userOptional.get();

            List<Role> roles = roleRepository.findAllById(request.getRole());
            String password = passwordEncoder.encode(request.getPassword());

            user.setName(request.getName());
            user.setEmail(request.getEmail());
            user.setPassword(password);
            user.setRoles(roles);

            userRepository.save(user);
            return user;
        } else {
            throw new BadRequestException("không tìm thấy id");
        }
    }


    public Page<Comment> getAllComment(Integer page, Integer pageSize) {
        return commentRepository.findAll(PageRequest.of(page, pageSize));
    }

    public Comment changeComment(Integer id, ChangeCommentRequest request) {
        Optional<Comment> commentOptional = commentRepository.findById(id);
        if (commentOptional.isPresent()){
            Comment comment = commentOptional.get();
            comment.setContent(request.getContent());
            commentRepository.save(comment);

            return comment;
        } else {
            throw new BadRequestException("không tìm thấy comment");
        }
    }

    public void deleteComment(Integer id) {
        Optional<Comment> commentOptional = commentRepository.findById(id);
        if (commentOptional.isPresent()){
            commentRepository.delete(commentOptional.get());
        } else {
            throw new BadRequestException("không tìm thấy comment");
        }
    }
}
