package com.example.buoi20.repository;

import com.example.buoi20.many_to_many.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Integer> {
}