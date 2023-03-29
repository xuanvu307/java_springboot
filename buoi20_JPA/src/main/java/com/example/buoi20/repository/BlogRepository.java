package com.example.buoi20.repository;

import com.example.buoi20.one_to_many.Blog;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BlogRepository extends JpaRepository<Blog, Integer> {
}