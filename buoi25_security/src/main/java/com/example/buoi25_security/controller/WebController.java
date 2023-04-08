package com.example.buoi25_security.controller;

import com.example.buoi25_security.security.AuthenticationFacade;
import com.example.buoi25_security.security.anotation.IsAuthor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
public class WebController {


    @Autowired
    private AuthenticationFacade authenticationFacade;

    @GetMapping("/")
    public ResponseEntity<?> getHome(){
        return ResponseEntity.ok("Home");
    }

    @PreAuthorize("hasAnyRole('USER','ADMIN')")
    @GetMapping("/user")
    public ResponseEntity<?> getUser(){
        return ResponseEntity.ok("User");
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/admin")
    public ResponseEntity<?> getAdmin(){
        return ResponseEntity.ok("Admin");
    }

    @Secured("ROLE_AUTHOR")
    @GetMapping("/author")
    public ResponseEntity<?> getAuthor(){
        return ResponseEntity.ok("Author");
    }

    @GetMapping("/user-info-1")
    public ResponseEntity<?> getUserInfo1(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        return ResponseEntity.ok(authentication);
    }
    @GetMapping("/user-info-2")
    public ResponseEntity<?> getUserInfo2(Principal principal){

        return ResponseEntity.ok(principal);
    }
    @GetMapping("/user-info-3")
    public ResponseEntity<?> getUserInfo3(Authentication authentication){

        return ResponseEntity.ok(authentication);
    }

    @IsAuthor
    @GetMapping("/user-info-4")
    public ResponseEntity<?> getUserInfo4(){

        return ResponseEntity.ok(authenticationFacade.getAuthentication());
    }


}
