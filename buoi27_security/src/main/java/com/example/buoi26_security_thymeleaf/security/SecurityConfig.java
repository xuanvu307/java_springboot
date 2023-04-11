package com.example.buoi26_security_thymeleaf.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity(
        securedEnabled = true,
        jsr250Enabled = true
)
public class SecurityConfig {
    @Autowired
    private CustomUserDetailService customUserDetailService;

    @Autowired
    private  CustomFilter customFilter;

    @Autowired
    private CustomAccessDeniedHandle customAccessDeniedHandle;

    @Autowired
    private CustomAuthenticationEntryPoint customAuthenticationEntryPoint;

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
        provider.setPasswordEncoder(passwordEncoder());
        provider.setUserDetailsService(customUserDetailService);

        return provider;
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration configuration) throws Exception{
        return configuration.getAuthenticationManager();
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        String[] PUBLIC = {"/", "/css/**", "/handle-login"};
        http
                .csrf().disable()
                .authorizeHttpRequests()
                .requestMatchers(PUBLIC).permitAll()
                .requestMatchers("/user").hasAnyRole("USER", "ADMIN")
                .requestMatchers("/admin").hasRole("ADMIN")
                .requestMatchers("/author").hasAuthority("ROLE_AUTHOR")
                .anyRequest().authenticated()
                .and()
                    .exceptionHandling()
                    .accessDeniedHandler(customAccessDeniedHandle)
                    .authenticationEntryPoint(customAuthenticationEntryPoint)
                .and()
                    .logout()
                    .logoutSuccessUrl("/")
                    .permitAll()
                .and()
                    .authenticationProvider(authenticationProvider())
                    .addFilterBefore(customFilter, UsernamePasswordAuthenticationFilter.class);
        return http.build();
    }

//    @Bean
//    public InMemoryUserDetailsManager userDetailsService() {
//        UserDetails user = User.withDefaultPasswordEncoder()
//                .username("user")
//                .password("111")
//                .roles("USER")
//                .build();
//
//        UserDetails admin = User.withDefaultPasswordEncoder()
//                .username("admin")
//                .password("111")
//                .roles("USER", "ADMIN")
//                .build();
//
//        UserDetails author = User.withDefaultPasswordEncoder()
//                .username("author")
//                .password("111")
//                .roles("AUTHOR")
//                .build();
//
//        return new InMemoryUserDetailsManager(user, admin, author);
//    }
}
