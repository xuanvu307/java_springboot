package com.example.usermanagementbackend.repository;

import com.example.usermanagementbackend.model.User;
import com.example.usermanagementbackend.model.dto.UserDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {

    @Query("select u from User u where upper(u.name) LIKE upper(concat('%', ?1, '%')) ")
    List<User> findUserByName(String name);

    Optional<User> findByEmail(String email);
}