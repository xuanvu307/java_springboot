package com.example.buoi20;

import com.example.buoi20.many_to_many.Class;
import com.example.buoi20.many_to_many.Student;
import com.example.buoi20.repository.ClassRepository;
import com.example.buoi20.repository.StudentRepository;
import com.github.javafaker.Faker;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.annotation.Rollback;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Rollback(value = false)
public class ManyToMany {
    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private ClassRepository classRepository;


    @Test
    void save_student(){
        Faker faker = new Faker();
        for (int i = 0; i < 30; i++) {
            Student student = Student.builder()
                    .name(faker.name().fullName())
                    .build();
            studentRepository.save(student);
        }
    }
    @Test
    void save_class(){
        Faker faker = new Faker();
        List<Student> students = studentRepository.findAll();
        Random random = new Random();

        for (int i = 0; i < 5; i++) {
            List<Student>  rdList = new ArrayList<>();

            for (int j = 0; j < 5; j++) {
                int rdIndex = random.nextInt(students.size());
                Student std = students.get(rdIndex);
                if (!students.contains(std)){
                    rdList.add(std);
                }
            }

            Class aClass = Class.builder()
                    .className(faker.name().fullName())
                    .students(rdList)
                    .build();
            classRepository.save(aClass);
        }
    }
}
