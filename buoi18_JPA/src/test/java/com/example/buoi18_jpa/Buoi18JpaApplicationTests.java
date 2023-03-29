package com.example.buoi18_jpa;

import com.example.buoi18_jpa.dto.UserDto;
import com.example.buoi18_jpa.entity.Student;
import com.example.buoi18_jpa.entity.User;
import com.example.buoi18_jpa.projection.UserProjection;
import com.example.buoi18_jpa.repository.StudentRepository;
import com.example.buoi18_jpa.repository.UserRepository;
import com.github.javafaker.Faker;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.test.annotation.Rollback;
import org.springframework.transaction.annotation.Transactional;

import static org.assertj.core.api.Assertions.*;

import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

//@SpringBootTest (nang, chay yeu cau may khoe)
@DataJpaTest //(chi chay database in-memory, tạo các bean cần thiết để chạy ,
// muốn sử dụng Mysql cần override lên @DataJpaTest)
// DataJpaTest tu dong rollback ve lenh truoc khi chay
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
class Buoi18JpaApplicationTests {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private StudentRepository studentRepository;

    @Test
    @Rollback(value = false)
        // luu du lieu khong rollback
    void save_user() {
        Faker faker = new Faker();
        for (int i = 0; i < 10; i++) {
            User user = User.builder()
                    .name(faker.name().fullName())
                    .email(faker.internet().emailAddress())
                    .password("111")
                    .build();
            userRepository.save(user);
        }
    }

    @Test
    void get_all_user() {
        List<User> users = userRepository.findAll();
        users.forEach(System.out::println);
    }

    @Test
    void get_by_id() {
        Optional<User> user = userRepository.findById(33);
        if (user.isPresent()) {
            System.out.println(user.get());
        } else {
            throw new RuntimeException("abc");
        }
    }

    @Test
    @Rollback(value = false)
    void update_user() {
        Optional<User> userOptional = userRepository.findById(34);
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            user.setName("Xuan vu");
            user.setEmail("xuanvufb1@gmail.com");

//            userRepository.save(user);
        } else {
            throw new RuntimeException("abc");
        }
    }

    @Test
    @Rollback(value = false)
    void delete_user() {
        // theo id
        userRepository.deleteById(31);

        //theo object

        Optional<User> user = userRepository.findById(32);
        if (user.isPresent()) {
            User user1 = user.get();
            userRepository.delete(user1);
        } else {
            throw new RuntimeException("abc");
        }
    }

    @Test
    void count() {
        Long count = userRepository.count();
        System.out.println(count);
    }


    @Test
    void findUserDtoByName() {
        List<UserDto> userDtos = userRepository.findUserDtoByName("Maisha Zulauf");
        System.out.println(userDtos);
    }

    @Test
    void findUserDto() {
        List<UserDto> userDtos = userRepository.getUserDtoUsingNativeQuery();
        System.out.println(userDtos);
    }

    @Test
    void findUserProjectionByEmail() {
        UserProjection userProjection = userRepository.findUserProjectionByEmail("mavis.skiles@hotmail.com");
        System.out.println(userProjection.getId() + " | " + userProjection.getName() + " | " + userProjection.getEmail());
    }

    @Test
    void sortUser() {
        List<User> users = userRepository.findAll(Sort.by("name").ascending());

        users.forEach(System.out::println);
    }

    @Test
    void page() {
        Page<User> page = userRepository.findAll(PageRequest.of(0, 6, Sort.by("name").descending()));
        page.forEach(System.out::println);
    }

    @Test
    @Rollback(value = false)
    void add_student() {
        Faker faker = new Faker();
        for (int i = 0; i < 10; i++) {
            Student student = Student.builder()
                    .name(faker.name().fullName())
                    .age(faker.number().numberBetween(20, 50))
                    .email(faker.internet().emailAddress())
                    .build();
            studentRepository.save(student);
        }
    }

    @Test
    void findByName() {
        Page<Student> page = studentRepository.findByNameContainingIgnoreCase("a", PageRequest.of(0, 5));
        page.getContent().forEach(System.out::println);
    }

    @Test
    void findByNameContainsIgnoreCase_NativeQuery() {
        Page<Student> page = studentRepository
                .findByNameContainsIgnoreCase_NativeQuery("a", PageRequest.of(0, 5));
        page.getContent().forEach(System.out::println);

        assertThat(page.getContent()).isNotNull();
        assertThat(page.getContent().size()).isEqualTo(6);
        assertThat(page.getContent()).contains();
    }

    @Test
    @Transactional(rollbackFor = {SQLException.class, IllegalAccessException.class})
    void save_student() {
        Student student = Student.builder()
                .name("nguyen van a")
                .age(20)
                .email("a@gmail.com")
                .build();
        studentRepository.save(student);

        Student student2 = Student.builder()
                .name("nguyen van b")
                .age(20)
                .email("a@gmail.com")
                .build();
        studentRepository.save(student2);
    }

    @Test
    @Rollback(value = false)
    void updateName() {
        studentRepository.updateName("xuan vu", 6);
    }

    @Test
    @Rollback(value = false)
    void deleteByUserEmail() {
        studentRepository.deleteByUserEmail("aubrey.marvin@gmail.com");
    }
}
