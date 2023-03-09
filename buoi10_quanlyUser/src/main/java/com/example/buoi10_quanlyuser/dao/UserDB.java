package com.example.buoi10_quanlyuser.dao;

import com.example.buoi10_quanlyuser.model.User;

import java.util.ArrayList;
import java.util.List;
public class UserDB {

    public static List<User> users = new ArrayList<>(List.of(
            new User(1,"abcacasd","a@gmail.com","0123456789","HN","avatar","123"),
            new User(2,"b","a@gmail.com","0123456789","HN","avatar","123"),
            new User(3,"c","a@gmail.com","0123456789","HN","avatar","123"),
            new User(4,"d","a@gmail.com","0123456789","HN","avatar","123"),
            new User(5,"e","a@gmail.com","0123456789","HN","avatar","123")
    ));
}
