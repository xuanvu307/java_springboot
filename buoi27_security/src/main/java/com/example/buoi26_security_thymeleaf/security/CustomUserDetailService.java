package com.example.buoi26_security_thymeleaf.security;

import com.example.buoi26_security_thymeleaf.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;


@Service

public class CustomUserDetailService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        return
                userRepository.findAll().stream()
                        .filter(u -> u.getEmail().equalsIgnoreCase(email))
                        .findFirst()
                        .orElseThrow(() -> {
                            throw new RuntimeException("không tìm thấy email");
                        });
    }
}
