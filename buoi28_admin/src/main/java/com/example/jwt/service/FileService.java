package com.example.jwt.service;

import com.example.jwt.entity.Image;
import com.example.jwt.entity.User;
import com.example.jwt.exception.BadRequestException;
import com.example.jwt.repository.ImageRepository;
import com.example.jwt.repository.UserRepository;
import com.example.jwt.response.FileResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.security.Principal;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;


@Service
public class FileService {
    @Autowired
    private ImageRepository imageRepository;

    @Autowired
    private UserRepository userRepository;

    public FileResponse uploadFile(MultipartFile file) {
        validateFile(file);
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        try {
            Image image = Image.builder()
                    .type(file.getContentType())
                    .data(file.getBytes())
                    .createdAt(LocalDateTime.now())
                    .user(userRepository.findByEmail(authentication.getName()).orElseThrow())
                    .build();
            imageRepository.save(image);


            return new FileResponse("");
        } catch (Exception e) {
            throw new BadRequestException("e");
        }
    }

    private void validateFile(MultipartFile file) {
        String fileName = file.getOriginalFilename();
        // Tên file không được trống
        if (fileName == null || fileName.isEmpty()) {
            throw new BadRequestException("Tên file không hợp lệ");
        }

        // Type file có nằm trong ds cho phép hay không
        // avatar.png, image.jpg => png, jpg
        String fileExtension = getFileExtension(fileName);
        if (!checkFileExtension(fileExtension)) {
            throw new BadRequestException("Type file không hợp lệ");
        }

        // Kích thước size có trong phạm vi cho phép không
        double fileSize = (double) (file.getSize() / 1_048_576);
        if (fileSize > 2) {
            throw new BadRequestException("Size file không được vượt quá 2MB");
        }
    }

    public String getFileExtension(String fileName) {
        int lastIndex = fileName.lastIndexOf(".");
        if (lastIndex == -1) {
            return "";
        }
        return fileName.substring(lastIndex + 1);
    }

    public boolean checkFileExtension(String fileExtension) {
        List<String> fileExtensions = List.of("png", "jpg", "jpeg");
        return fileExtensions.contains(fileExtension);
    }

    public Image readFile(Integer id) {
        Image image = imageRepository.findById(id)
                .orElseThrow(() -> {
                    throw new BadRequestException("khong tim thay id");
                });
        return image;
    }

    public List<Image> getAllImage() {
        User user = userRepository.findByEmail(SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getName())
                .orElseThrow(null);
        return imageRepository.findByUser(user);
    }

    public void deleteImage(Integer id) {
        Optional<Image> imageOptional = imageRepository.findById(id);
        if (imageOptional.isPresent()) {
            Image image = imageOptional.get();
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            User user = userRepository.findByEmail(authentication.getName()).orElseThrow();
            if (image.getUser().equals(user)) {
                imageRepository.delete(image);
            } else {
                throw new BadRequestException("file không phải của bạn");
            }
        } else {
            throw new BadRequestException("không tìm thấy ảnh");
        }
    }


}
