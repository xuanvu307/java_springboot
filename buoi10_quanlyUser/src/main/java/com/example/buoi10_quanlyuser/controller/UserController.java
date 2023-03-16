package com.example.buoi10_quanlyuser.controller;

import com.example.buoi10_quanlyuser.model.FileResponse;
import com.example.buoi10_quanlyuser.model.User;
import com.example.buoi10_quanlyuser.model.UserDto;
import com.example.buoi10_quanlyuser.request.ChangePasswordRequest;
import com.example.buoi10_quanlyuser.request.UserEditRequest;
import com.example.buoi10_quanlyuser.request.UserRequest;
import com.example.buoi10_quanlyuser.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
@RestController
@RequestMapping("api/v1")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("users")
    public List<UserDto> users(){
        return userService.getAllUser();
    }

    @GetMapping("search")
    public List<UserDto> searchUser(@RequestParam String name){
        return userService.searchUserByName(name);
    }

    @GetMapping("users/{id}")
    public UserDto getUser(@PathVariable Integer id){
        return userService.getUser(id);
    }

    @PostMapping("users")
    public UserDto creatUser(@RequestBody UserRequest request){
        return userService.creatUser(request);
    }

    @PutMapping("users/{id}")
    public UserDto editUser(@PathVariable Integer id, @RequestBody UserEditRequest request){
        return userService.editUser(id, request);
    }

    @DeleteMapping("users/{id}")
    public void deleteUser(@PathVariable Integer id){
        userService.deleteUser(id);
    }

    @PutMapping("users/{id}/change-password")
    public void changePassword(@PathVariable Integer id, @RequestBody ChangePasswordRequest request){
        userService.changePassword(id, request);
    }

//    Quên mật khẩu

    @PutMapping("users/{id}/reset-password")
    public void resetPassword(@PathVariable Integer id){
        userService.resetPassword(id);
    }

    // update avata
    @PutMapping("/users/{id}/update-avatar")
    public ResponseEntity<?> updateAvatar(@ModelAttribute("file")MultipartFile file, @PathVariable Integer id){
        FileResponse fileResponse = userService.updateAvatar(id, file);
        return ResponseEntity.ok(fileResponse);
    }

}
