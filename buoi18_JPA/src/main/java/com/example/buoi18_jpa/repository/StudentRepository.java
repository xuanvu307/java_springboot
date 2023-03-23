package com.example.buoi18_jpa.repository;

import com.example.buoi18_jpa.entity.Student;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


@Repository
public interface StudentRepository extends JpaRepository<Student, Integer> {
    Page<Student> findByNameContainingIgnoreCase(String name, Pageable pageable);

    // khong su dung dc de chia trang
//    Page<Student> findByName_JPQL(String name);

    @Query(
            value = "select * from student s where upper(s.name) like upper(concat('%', ?1, '%'))",
            countQuery = "select count(s.id) from student s where upper(s.name) like upper(concat('%', ?1, '%'))",
            nativeQuery = true
    )
    Page<Student> findByNameContainsIgnoreCase_NativeQuery(String name, Pageable pageable);

}