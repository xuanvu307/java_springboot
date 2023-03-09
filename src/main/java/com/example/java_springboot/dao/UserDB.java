package com.example.java_springboot.dao;

import com.example.java_springboot.model.User;

import java.util.ArrayList;
import java.util.List;

public class UserDB {
    public static List<User> users= new ArrayList<>(List.of(
            new User(1,"a","a@gmail.com","123","avatar"),
            new User(2,"b","b@gmail.com","123","avatar"),
            new User(3,"c","c@gmail.com","123","avatar"),
            new User(4,"d","d@gmail.com","123","avatar"),
            new User(5,"d","d@gmail.com","123","avatar")
    ));
}
