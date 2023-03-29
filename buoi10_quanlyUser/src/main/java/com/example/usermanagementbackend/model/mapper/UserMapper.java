package com.example.usermanagementbackend.model.mapper;

import com.example.usermanagementbackend.model.dto.UserDto;
import com.example.usermanagementbackend.model.User;

import java.util.List;

public class UserMapper {
    public static UserDto toUserDto(User user) {
        UserDto userDto = new UserDto();
        userDto.setId(user.getId());
        userDto.setName(user.getName());
        userDto.setEmail(user.getEmail());
        userDto.setPhone(user.getPhone());
        userDto.setAddress(user.getAddress());
        userDto.setAvatar(user.getAvatar());

        return userDto;
    }

    public static List<UserDto> userDtoList(List<User> users){
        return users.stream()
                .map(UserMapper::toUserDto)
                .toList();
    }
}