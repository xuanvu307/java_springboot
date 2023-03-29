package com.example.buoi18_jpa.repository;

import com.example.buoi18_jpa.entity.Student;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
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


    //update ten user theo id
    @Modifying
    @Query("UPDATE Student s set s.name = ?1 where s.id = ?2")
    void updateName(String name, Integer id);


    // Xoa user theo email
    @Modifying
    @Query("DELETE from Student s where s.email = ?1")
    void deleteByUserEmail(String email);


}