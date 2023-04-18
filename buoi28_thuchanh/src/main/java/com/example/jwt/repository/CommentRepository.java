package com.example.jwt.repository;

import com.example.jwt.entity.Comment;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Integer> {
    Page<Comment> findByBlog_IdAndBlog_StatusTrueOrderByCreatedAtDesc(Integer id, Pageable pageable);

    Page<Comment> getCommentByBlog_IdOrderByCreatedAtDesc(Integer blogId, Pageable pageable);
}