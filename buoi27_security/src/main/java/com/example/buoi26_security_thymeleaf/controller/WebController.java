package com.example.buoi26_security_thymeleaf.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Controller
public class WebController {

    @GetMapping("/")
    public String getHome(Model model) {
        model.addAttribute("name","Xuân Vũ");

        List<String> users = List.of("A","B","C");

        model.addAttribute("users", users);
        return "index";
    }

    @GetMapping("/admin")
    public String getAdmin(Model model) {
        return "admin";
    }
    @GetMapping("/user")
    public String getUser(Model model) {
        return "user";
    }
    @GetMapping("/author")
    public String getAuthor(Model model) {
        return "author";
    }

    @GetMapping("/login")
    public String getLogin(Model model) {
        return "login";
    }
}
