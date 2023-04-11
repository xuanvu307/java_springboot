package com.example.buoi26_security_thymeleaf.service;

import com.example.buoi26_security_thymeleaf.model.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CustomUserDetailService implements UserDetailsService {
    //mã hóa password
    private final PasswordEncoder encoder = new BCryptPasswordEncoder();

    //danh sách user
    List<User> users = new ArrayList<>(List.of(
            new User(1, "A", "A", encoder.encode("111"), List.of("USER")),
            new User(2, "B", "B", encoder.encode("111"), List.of("USER", "ADMIN")),
            new User(3, "C", "C", encoder.encode("111"), List.of("USER")),
            new User(4, "D", "D", encoder.encode("111"), List.of("USER", "ADMIN"))
    ));

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        return users.stream()
                .filter(u -> u.getEmail().equalsIgnoreCase(email))
                .findFirst()
                .orElseThrow(() -> {
                    throw new RuntimeException("không tìm thấy email");
                });
    }
}
