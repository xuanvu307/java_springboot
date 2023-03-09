package com.example.buoi10_quanlyuser.controller;

import com.example.buoi10_quanlyuser.model.FileResponse;
import com.example.buoi10_quanlyuser.service.FileService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("api/v1")
@RequiredArgsConstructor
public class FileController {
    private final FileService fileService;
    // 1 upload file
    @PostMapping("files")
    public ResponseEntity<?> uploadFile(@ModelAttribute("file")MultipartFile file) {
        FileResponse fileResponse = fileService.uploadFile(file);
        return ResponseEntity.ok(fileResponse);
    }

    // 2 xem thong tin file
    @GetMapping("files/{id}")
    public ResponseEntity<?> readFile(@PathVariable String id) {
        byte[] bytes = fileService.readFile(id);
        return ResponseEntity
                .ok()
                .contentType(MediaType.IMAGE_JPEG)
                .body(bytes);
    }
}
