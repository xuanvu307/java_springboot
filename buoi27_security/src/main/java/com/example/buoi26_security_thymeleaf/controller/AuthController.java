package com.example.buoi26_security_thymeleaf.controller;

import com.example.buoi26_security_thymeleaf.request.LoginRequest;
import jakarta.servlet.http.HttpSession;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Slf4j
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping("/handle-login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest, HttpSession session) {
        // viết bên service
        //tạo đối tượng xác thực

        UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(
                loginRequest.getEmail(),
                loginRequest.getPassword()
        );
        try {
            //tiến hành xác thực
            Authentication authentication = authenticationManager.authenticate(token);
            log.info("authentication: {}", authentication);
            log.info("email1: {}", authentication.getName());

            // tiến hành lưu trữ vào contexholder
            SecurityContextHolder.getContext().setAuthentication(authentication);

            //tạo ra session
            session.setAttribute("MY_SESSION", authentication.getName());
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }

        return ResponseEntity.ok("login thành công");
    }
}
