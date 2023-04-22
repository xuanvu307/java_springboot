package com.example.jwt.repository;

import com.example.jwt.entity.Blog;
import com.example.jwt.entity.Category;
import jakarta.persistence.NamedNativeQuery;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface BlogRepository extends JpaRepository<Blog, Integer> {

    // 1. Lấy danh sách blog
    Page<Blog> getAllByStatusTrueOrderByPulishedAtDesc(Pageable pageable);

//    @Query(nativeQuery = true, value = "select * from blog b")
//    List<Blog> getBlogNative();

    // 2. Tìm kiếm blog
    List<Blog> findByTitleContainingAndStatusTrueOrderByPulishedAtDesc(String term);

    // 5. Lấy danh sách bài viết áp dụng category
    List<Blog> findByCategories_NameContainingIgnoreCaseAndStatusTrue(String name);

    // 6. Lấy chi tiết bài viết
    Blog findByIdAndAndSlugAndStatusTrue(Integer id, String slug);

}