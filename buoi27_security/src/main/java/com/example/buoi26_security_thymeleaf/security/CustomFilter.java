package com.example.buoi26_security_thymeleaf.security;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
@Slf4j
public class CustomFilter extends OncePerRequestFilter {
    @Autowired
    private CustomUserDetailService customUserDetailService;

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain) throws ServletException, IOException {
        // lấy ra name trong session

        String email = (String) request.getSession().getAttribute("MY_SESSION");
        log.info("email: {}", email);
        if (email == null) {
            filterChain.doFilter(request, response);
            return;
        }
        // lấy ra thông tin user

        UserDetails userDetails = customUserDetailService.loadUserByUsername(email);
        log.info("userDetails: {}", userDetails);

        // tạo ra đối tượng để phân quyền

        UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(
                userDetails.getUsername(),
                null,
                userDetails.getAuthorities()
        );

        //lưu dữ liệu vào contextholder
        SecurityContextHolder.getContext().setAuthentication(token);

        filterChain.doFilter(request, response);
    }
}
