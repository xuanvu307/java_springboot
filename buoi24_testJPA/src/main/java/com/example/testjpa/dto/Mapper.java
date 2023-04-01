package com.example.testjpa.dto;

import com.example.testjpa.entity.User;

public class Mapper {
    public UserDto mapperDto(User u) {
        return UserDto.builder()
                .id(u.getId())
                .name(u.getName())
                .email(u.getEmail())
                .build();
    }
}
