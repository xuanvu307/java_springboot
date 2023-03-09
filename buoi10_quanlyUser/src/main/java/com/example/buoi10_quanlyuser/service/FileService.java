package com.example.buoi10_quanlyuser.service;

import com.example.buoi10_quanlyuser.exception.BadRequest;
import com.example.buoi10_quanlyuser.exception.NotFoundException;
import com.example.buoi10_quanlyuser.model.FileResponse;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Objects;
import java.util.UUID;

@Service
public class FileService {

    // dinh nghia folder chua anh
    private final Path rootPath = Paths.get("upload");

    public FileService() {
        createFolder(rootPath.toString());
    }

    private void createFolder(String path) {
        File file = new File(path);
        if (!file.exists()) {
            file.mkdirs();
        }
    }

    public FileResponse uploadFile(MultipartFile file) {
        validateFile(file);

        String fileId = UUID.randomUUID().toString();
        Path filePath = rootPath.resolve(fileId);
        File fileUpload = new File(filePath.toString());
//        try (OutputStream outputStream = new FileOutputStream(fileUpload)){
//            outputStream.write(file.getBytes());
//            return new FileResponse("api/v1/files/"+fileId);
//        } catch (IOException e){
//            throw new RuntimeException("loi up load anh");
//        }


//        File file1 = new File(file.getOriginalFilename());
//
        try {
            file.transferTo(fileUpload);
            return new FileResponse("/api/v1/files/"+fileId);
        } catch (IOException i){
            throw new RuntimeException("loi up file");
        }
    }

    private void validateFile(MultipartFile file) {
        //ten file khong trong
        String fileName = file.getOriginalFilename();
        if (fileName == null || file.isEmpty()) {
            throw new BadRequest("Ten file khong hop le");
        }
        // type file nam trong loai cho phep khong(vd: png, jpg)
        String fileExtension = getFileExtension(fileName);
        if (!checkFileExtension(fileExtension)) {
            throw new BadRequest("type file khong hop le");
        }

        //kich thuoc cua file trong pham vi cho phep khong
        double fileSize = (double) file.getSize() / 1048576;
        if (fileSize > 2) {
            throw new BadRequest("Size file khong vuot qua 2MB");
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

    public byte[] readFile(String id) {
        Path filePath = rootPath.resolve(id);
        File file = new File(filePath.toString());
        if (!file.exists()){
            throw new NotFoundException("file khong ton tai");
        }

        try {
            return Files.readAllBytes(filePath);
        } catch (IOException e){
            throw new RuntimeException("loi trong qua trinh doc file");
        }
    }
}
