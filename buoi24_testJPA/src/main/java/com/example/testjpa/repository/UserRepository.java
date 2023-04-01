package com.example.testjpa.repository;

import com.example.testjpa.entity.User;
import com.example.testjpa.projection.UserProjection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


public interface UserRepository extends JpaRepository<User, Long> {

    User findById(long id); // => dùng mapper map qua userDto

    //JPQL Query
    @Query("SELECT new com.example.testjpa.dto.UserDto(u.id,u.name,u.email) from User u where u.id = ?1")
    User findUserById_JPQL(Long id);

    //native Query
    @Query(value = "SELECT u.id,u.name,u.email from user u where u.id = id", nativeQuery = true)
    User findUserById_native(Long id);

    //projection
    UserProjection findUserById_projection(Integer id);

}