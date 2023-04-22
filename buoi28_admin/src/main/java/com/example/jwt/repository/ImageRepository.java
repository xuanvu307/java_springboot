package com.example.jwt.repository;

import com.example.jwt.entity.Image;
import com.example.jwt.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ImageRepository extends JpaRepository<Image, Integer> {
    List<Image> findByUser(User user);

}