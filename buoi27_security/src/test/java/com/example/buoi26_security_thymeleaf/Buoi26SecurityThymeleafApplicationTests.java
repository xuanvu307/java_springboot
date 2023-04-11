package com.example.buoi26_security_thymeleaf;

import com.example.buoi26_security_thymeleaf.entity.User;
import com.example.buoi26_security_thymeleaf.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.List;

@SpringBootTest
class Buoi26SecurityThymeleafApplicationTests {

    @Autowired
    private UserRepository userRepository;

    private final PasswordEncoder encoder = new BCryptPasswordEncoder();

    @Test
    void save_user() {
        User user = new User(1, "A", encoder.encode("111"), "A", List.of("USER"));
        User user1 = new User(2, "B", encoder.encode("111"), "B", List.of("USER", "ADMIN"));
        User user2 = new User(4, "C", encoder.encode("111"), "C", List.of("USER"));
        User user3 = new User(3, "D", encoder.encode("111"), "D", List.of("USER", "ADMIN"));

        userRepository.save(user2);
    }
}
