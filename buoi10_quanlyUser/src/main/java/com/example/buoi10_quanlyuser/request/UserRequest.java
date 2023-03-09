package com.example.buoi10_quanlyuser.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserRequest {
    String name;
    String email;
    String phone;
    String address;
    String password;
}
