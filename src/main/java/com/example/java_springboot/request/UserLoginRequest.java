package com.example.java_springboot.request;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class UserLoginRequest {
    private String username;
    private String password;
}
