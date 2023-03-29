package com.example.buoi21_thuchanhjpa.repository;

import com.example.buoi21_thuchanhjpa.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
}