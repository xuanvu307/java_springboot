package com.example.jwt.controller;

import com.example.jwt.dto.AuthResponse;
import com.example.jwt.entity.User;
import com.example.jwt.mapper.UserMapper;
import com.example.jwt.repository.UserRepository;
import com.example.jwt.request.LoginRequest;
import com.example.jwt.security.CustomUserDetailsService;
import com.example.jwt.security.JwtUtils;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private CustomUserDetailsService customUserDetailsService;

    @Autowired
    private JwtUtils jwtUtils;

    @Autowired
    private UserRepository userRepository;

    @PostMapping("login-handle")
    public ResponseEntity<?> login(@RequestBody LoginRequest request, HttpSession session) {

        // Tạo đối tượng xác thực
        UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(
                request.getEmail(),
                request.getPassword()
        );

        try {
            // Tiến hành xác thực
            Authentication authentication = authenticationManager.authenticate(token);

            // Lưu dữ liệu vào context
            SecurityContextHolder.getContext().setAuthentication(authentication);

            // Lấy ra thông tin
            UserDetails userDetails = customUserDetailsService.loadUserByUsername(authentication.getName());

            // tạo ra token
            String jwtToken = jwtUtils.generateToken(userDetails);

            // tìm kiếm user
            User user = userRepository.findByEmail(authentication.getName()).orElseThrow();

            return ResponseEntity.ok(new AuthResponse(
                    UserMapper.toUserDto(user),
                    jwtToken,
                    true
            ));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
