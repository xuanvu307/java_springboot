package com.example.jwt.request;

import lombok.*;

import java.util.List;

@ToString
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CreateUserRequest {
    private String name;
    private String email;
    private String password;
    private List<Integer> role;
}
