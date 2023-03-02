package com.example.java_springboot.model;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class User {
    private int id;
    private String username;
    private String email;
    private String password;
    private String avatar;
}
