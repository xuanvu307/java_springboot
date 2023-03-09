package com.example.java_springboot.repository;

import com.example.java_springboot.dao.UserDB;
import com.example.java_springboot.model.User;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class UserRepository {
    public List<User> allUser(){
        return UserDB.users;
    }
}
