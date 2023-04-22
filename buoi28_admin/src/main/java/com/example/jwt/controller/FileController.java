package com.example.jwt.controller;

import com.example.jwt.entity.Image;
import com.example.jwt.response.FileResponse;
import com.example.jwt.service.FileService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("api/v1")
@RequiredArgsConstructor
public class FileController {
    private final FileService fileService;

    // 1. Upload file
    @PostMapping("files")
    public ResponseEntity<?> uploadFile(@ModelAttribute("file") MultipartFile file) {
        FileResponse fileResponse = fileService.uploadFile(file);
        return ResponseEntity.ok(fileResponse);
    }

    // 2. Xem thông tin file
    @GetMapping(value = "files/{id}")
    public ResponseEntity<?> readFile(@PathVariable Integer id) {
        Image image = fileService.readFile(id);
        return ResponseEntity
                .ok()
                .contentType(MediaType.parseMediaType(image.getType()))
                .body(image.getData());
    }

    //    3. Lấy danh sách ảnh của user đang login
    @GetMapping("users/{id}/files")
    public List<Image> getAllImage(){
        return fileService.getAllImage();
    }

    //    4.Xóa ảnh (nếu không phải ảnh của user upload -> không cho xóa)
    @DeleteMapping("files/{id}")
    public void deleteImage(@PathVariable Integer id){
        fileService.deleteImage(id);
    }
}
