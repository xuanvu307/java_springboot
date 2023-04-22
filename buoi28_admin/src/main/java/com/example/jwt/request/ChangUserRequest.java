package com.example.jwt.request;

import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class ChangUserRequest {
    private String name;
    private String email;
    private String password;
    private List<Integer> role;
}
