package com.example.buoi20.repository;

import com.example.buoi20.many_to_many.Class;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClassRepository extends JpaRepository<Class, Integer> {
}