package com.example.java_springboot.repository;

import com.example.java_springboot.dto.UserDTO;
import com.example.java_springboot.model.User;
import org.springframework.stereotype.Repository;

@Repository
public class UserMapper {
    public UserDTO toUserDTO(User user){
        return new UserDTO(user.getUsername(),user.getEmail(),user.getAvatar());
    }
}
