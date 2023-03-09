package com.example.buoi10_quanlyuser.model;

import lombok.*;

@Setter
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Builder
public class User {
    private int id;
    private String name;
    private String email;
    private String phone;
    private String address;
    private String avatar;
    private String password;

}
