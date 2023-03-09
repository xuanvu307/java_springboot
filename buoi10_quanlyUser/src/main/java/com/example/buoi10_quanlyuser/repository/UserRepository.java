package com.example.buoi10_quanlyuser.repository;

import com.example.buoi10_quanlyuser.dao.UserDB;
import com.example.buoi10_quanlyuser.model.User;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class UserRepository {
    public List<User> getAllUser(){
        return UserDB.users;
    }
}
