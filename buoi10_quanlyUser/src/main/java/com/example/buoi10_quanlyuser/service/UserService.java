package com.example.buoi10_quanlyuser.service;

import com.example.buoi10_quanlyuser.dao.UserDB;
import com.example.buoi10_quanlyuser.exception.BadRequest;
import com.example.buoi10_quanlyuser.exception.NotFoundException;
import com.example.buoi10_quanlyuser.mapper.UserMapper;
import com.example.buoi10_quanlyuser.model.FileResponse;
import com.example.buoi10_quanlyuser.model.User;
import com.example.buoi10_quanlyuser.model.UserDto;
import com.example.buoi10_quanlyuser.repository.UserRepository;
import com.example.buoi10_quanlyuser.request.ChangePasswordRequest;
import com.example.buoi10_quanlyuser.request.ResetPassword;
import com.example.buoi10_quanlyuser.request.UserEditRequest;
import com.example.buoi10_quanlyuser.request.UserRequest;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.Random;

@Service
@AllArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final UserMapper userMapper;
    private final FileService fileService;
    private final MailService mailService;

    private int genID() {
        return getAllUser().get(getAllUser().size() - 1).getId() + 1;
    }

    public List<UserDto> getAllUser() {
        if (userRepository.getAllUser().isEmpty()) {
            throw new NotFoundException("Thư mục trống");
        }
        return userMapper.userDtoList(userRepository.getAllUser());
    }

    public List<UserDto> searchUserByName(String name) {
        List<UserDto> userDtos = getAllUser().stream()
                .filter(userDto -> userDto.getName().toLowerCase().contains(name.toLowerCase()))
                .toList();
        if (userDtos.isEmpty()) {
            throw new NotFoundException("không có tên phù hợp");
        }
        return userDtos;
    }

    public UserDto getUser(Integer id) {
        return getAllUser().stream()
                .filter(user -> user.getId() == id)
                .findFirst()
                .orElseThrow(() -> {
                    throw new NotFoundException("không có id nào trùng hợp");
                });
    }

    public User creatUser(UserRequest request) {
        if (request.getName().trim().equals("") || request.getEmail().trim().equals("")) {
            throw new NotFoundException("có trường email hoặc tên trống");
        }
        User user = User.builder()
                .id(genID())
                .name(request.getName())
                .email(request.getEmail())
                .phone(request.getPhone())
                .address(request.getAddress())
                .password(request.getPassword())
                .build();
        UserDB.users.add(user);
        return user;
    }

    public User editUser(Integer id, UserEditRequest request) {
        userRepository.getAllUser().forEach(user -> {
            if (user.getId() == id) {
                user.setName(request.getName());
                user.setName(request.getPhone());
                user.setAddress(request.getAddress());
            }
        });
        throw new BadRequest("Không tìm thấy id");
    }

    public void deleteUser(Integer id) {
        userRepository.getAllUser().removeIf(user -> Objects.equals(user.getId(), id));
    }

    public void changePassword(Integer id, ChangePasswordRequest request) {
        userRepository.getAllUser().forEach(user -> {
            if (user.getId() == id) {
                user.setPassword(request.getNewPassword());
            }
        });
    }

    public void resetPassword(ResetPassword resetPassword) {
        Optional<User> user1 = userRepository.getAllUser().stream()
                .filter(user -> user.getEmail().equalsIgnoreCase(resetPassword.getEmail()))
                .findFirst();

        if (user1.isPresent()){
            Random rd = new Random();
            String newPassword = "new"+rd.nextInt(1000);
            mailService.sendEmail(
                    user1.get().getEmail(),
                    "Mat khau moi",
                    "mat khu moi la:" +newPassword
            );
        } else {
            throw new NotFoundException("khong tim thay email");
        }
    }

    public FileResponse updateAvatar(Integer id, MultipartFile file) {
        User user = userRepository.getUserById(id);
        //upload file
        FileResponse fileResponse = fileService.uploadFile(file);

        //set avatar
        user.setAvatar(fileResponse.getUrl());
        return fileResponse;
    }
}
