package com.example.jwt.repository;

import com.example.jwt.entity.Blog;
import com.example.jwt.dto.BlogDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface BlogRepository extends JpaRepository<Blog, Integer> {
    @Query(nativeQuery = true, name = "getBlog")
    Page<BlogDto> getBlog(Pageable pageable);

    List<Blog> findByTitleContaining(String term);

    Blog findByIdAndAndSlug(Integer id, String slug);
}