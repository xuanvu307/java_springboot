package com.example.buoi26_security_thymeleaf.repository;

import com.example.buoi26_security_thymeleaf.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
}