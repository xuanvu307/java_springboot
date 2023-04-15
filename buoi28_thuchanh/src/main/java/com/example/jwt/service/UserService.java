package com.example.jwt.service;

import com.example.jwt.entity.Blog;
import com.example.jwt.mapper.BlogDto;
import com.example.jwt.repository.BlogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private BlogRepository blogRepository;

    public Page<BlogDto> getAllBlog(Integer page, Integer pageSize) {
        blogRepository.findAll().forEach(System.out::println);
        return blogRepository.getBlog(PageRequest.of(page,pageSize));
    }

//    public List<Blog> getAllBlog() {
//        return blogRepository.findAll();
//    }

    public List<Blog> searchBlogByName(String term) {
        return null;
    }
}
