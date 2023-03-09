package com.example.buoi10_quanlyuser;

import com.example.buoi10_quanlyuser.service.FileService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class Buoi10QuanlyUserApplicationTests {


    @Autowired
    private FileService fileService;

    @Test
    void contextLoads() {
        System.out.println(fileService.getFileExtension("abc.img"));
    }

}
