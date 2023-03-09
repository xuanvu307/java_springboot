package com.example.java_springboot.service;

import com.example.java_springboot.dto.UserDTO;
import com.example.java_springboot.exception.BadRequest;
import com.example.java_springboot.repository.UserMapper;
import com.example.java_springboot.model.User;
import com.example.java_springboot.repository.UserRepository;
import com.example.java_springboot.request.UserLoginRequest;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class UserService {
    private final UserRepository repository;
    private final UserMapper userMapper;

    public UserDTO login(UserLoginRequest request) {
        Optional<User> optionalUser = repository.allUser().stream()
                .filter(user -> (user.getUsername().equals(request.getUsername()))
                        && (user.getPassword().equals(request.getPassword()))
                )
                .findFirst();
        if (optionalUser.isPresent()) {
            return userMapper.toUserDTO(optionalUser.get());
        }
        throw new BadRequest("username hoặc password chưa chính xác");
    }

    public List<User> user() {
        return repository.allUser();
    }
}
