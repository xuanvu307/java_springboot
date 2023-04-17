package com.example.jwt.service;

import com.example.jwt.entity.Blog;
import com.example.jwt.entity.Comment;
import com.example.jwt.repository.BlogRepository;
import com.example.jwt.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private BlogRepository blogRepository;

    @Autowired
    private CommentRepository commentRepository;

    public Page<Blog> getAllBlog(Integer page, Integer pageSize) {
        return blogRepository.findAll(PageRequest.of(page-1,pageSize));
    }
    public List<Blog> searchBlogByName(String term) {
        return blogRepository.findByTitleContaining(term);
    }

    public Blog getBlogById(Integer id, String slug) {
        return blogRepository.findByIdAndAndSlug(id,slug);
    }

    public Page<Comment> getCommentByBlog(Integer blogId, Integer page) {
        return commentRepository.getCommentByBlog_IdOrderByCreatedAtDesc(blogId, PageRequest.of(page,3));
    }
}
