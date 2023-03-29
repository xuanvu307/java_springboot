package com.example.buoi20.repository;

import com.example.buoi20.one_to_one.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
}