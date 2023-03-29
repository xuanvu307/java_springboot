package com.example.buoi20.repository;

import com.example.buoi20.one_to_many.Author;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AuthorRepository extends JpaRepository<Author, Integer> {
}