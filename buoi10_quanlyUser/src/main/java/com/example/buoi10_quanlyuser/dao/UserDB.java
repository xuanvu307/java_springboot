package com.example.buoi10_quanlyuser.dao;

import com.example.buoi10_quanlyuser.model.User;

import java.util.ArrayList;
import java.util.List;
public class UserDB {

    public static List<User> users = new ArrayList<>(List.of(
            new User(1,"abcacasd","xuanvufb@gmail.com","0123456789","Tỉnh Hà Giang","avatar","123"),
            new User(2,"b","ab@gmail.com","0123456789","Tỉnh Quảng Trị","avatar","123"),
            new User(3,"c","ac@gmail.com","0123456789","Tỉnh Hậu Giang","avatar","123"),
            new User(4,"d","acas@gmail.com","0123456789","Tỉnh Hậu Giang","avatar","123"),
            new User(5,"e","aasdsad@gmail.com","0123456789","Tỉnh Quảng Trị","avatar","123")
    ));
}
