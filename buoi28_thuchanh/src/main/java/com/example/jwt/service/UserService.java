package com.example.jwt.service;

import com.example.jwt.dto.CategoryDto;
import com.example.jwt.entity.Blog;
import com.example.jwt.entity.Comment;
import com.example.jwt.repository.BlogRepository;
import com.example.jwt.repository.CategoryRepository;
import com.example.jwt.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private BlogRepository blogRepository;

    @Autowired
    private CommentRepository commentRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    public Page<Blog> getAllBlog(Integer page, Integer pageSize) {
        return blogRepository.getAllByStatusTrueOrderByPulishedAtDesc(PageRequest.of(page-1,pageSize));
//        return blogRepository.get(PageRequest.of(page-1,pageSize));
    }

    public List<Blog> searchBlogByName(String term) {
        return blogRepository.findByTitleContainingAndStatusTrueOrderByPulishedAtDesc(term);
    }

    public Blog getBlogById(Integer id, String slug) {
        return blogRepository.findByIdAndAndSlugAndStatusTrue(id,slug);
    }

    public Page<Comment> getCommentByBlog(Integer blogId, Integer page) {
        return commentRepository.findByBlog_IdAndBlog_StatusTrueOrderByCreatedAtDesc(blogId, PageRequest.of(page,3));
    }

    public List<Blog> getBlogByCategoryName(String name) {
        return blogRepository.findByCategories_NameContainingIgnoreCaseAndStatusTrue(name);
    }

    public List<CategoryDto> getAllCategory() {
        return categoryRepository.getAllCategoryDto();
    }

    public Page<CategoryDto> getTopCategory() {
        return categoryRepository.getCategories(PageRequest.ofSize(5));
    }
}
