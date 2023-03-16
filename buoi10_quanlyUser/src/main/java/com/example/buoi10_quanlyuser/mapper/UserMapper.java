package com.example.buoi10_quanlyuser.mapper;

import com.example.buoi10_quanlyuser.model.User;
import com.example.buoi10_quanlyuser.model.UserDto;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class UserMapper {
    public UserDto toUserDto(User user) {
        return new UserDto(user.getId(), user.getName(), user.getEmail(), user.getPhone(), user.getAddress(), user.getAvatar());
    }

    public List<UserDto> userDtoList(List<User> users) {
        return users.stream()
                .map(this::toUserDto)
                .toList();
    }
}
