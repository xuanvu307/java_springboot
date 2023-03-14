package com.example.buoi10_quanlyuser.repository;

import com.example.buoi10_quanlyuser.dao.UserDB;
import com.example.buoi10_quanlyuser.exception.NotFoundException;
import com.example.buoi10_quanlyuser.model.User;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class UserRepository {
    public List<User> getAllUser(){
        return UserDB.users;
    }

    public User getUserById(int id){
        Optional<User> user = UserDB.users.stream()
                .filter(e -> e.getId() == id)
                .findFirst();
        if (user.isPresent()){
            return user.get();
        }
        throw new NotFoundException("khong tim thay user");
    }
}
