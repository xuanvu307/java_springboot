package com.example.buoi21_thuchanhjpa;

import com.example.buoi21_thuchanhjpa.model.Category;
import com.example.buoi21_thuchanhjpa.model.Course;
import com.example.buoi21_thuchanhjpa.model.User;
import com.example.buoi21_thuchanhjpa.repository.CategoryRepository;
import com.example.buoi21_thuchanhjpa.repository.CourseRepository;
import com.example.buoi21_thuchanhjpa.repository.UserRepository;
import com.github.javafaker.Faker;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Rollback(value = false)
class Buoi21ThuchanhJpaApplicationTests {


    @Autowired
    private CategoryRepository categoryRepository;
    @Autowired
    private CourseRepository courseRepository;
    @Autowired
    private UserRepository userRepository;


    @Test
    void save_user() {
        Faker faker = new Faker();
        for (int i = 0; i < 10; i++) {
            User user = User.builder()
                    .name(faker.name().fullName())
                    .email(faker.internet().emailAddress())
                    .build();
            userRepository.save(user);
        }
    }

    @Test
    void save_category() {
        Faker faker = new Faker();
        for (int i = 0; i < 10; i++) {
            Category category = Category.builder()
                    .name(faker.leagueOfLegends().champion())
                    .build();
            categoryRepository.save(category);
        }
    }

    @Test
    void save_course() {
        Faker faker = new Faker();
        Random rd = new Random();
        List<User> userList = userRepository.findAll();
        List<Category> categoryList = categoryRepository.findAll();

        for (int i = 0; i < 20; i++) {
            //random 1 user
            User user = userList.get(rd.nextInt(userList.size()));

            // random 1 danh sach category
            List<Category> categories = new ArrayList<>();
            for (int j = 0; j < 3; j++) {
                Category category = categoryList.get(rd.nextInt(categoryList.size()));
                if (!categories.contains(category)) {
                    categories.add(category);
                }
            }
            //tao khoa hoc
            Course course = Course.builder()
                    .name(faker.book().title())
                    .description(faker.lorem().sentence(15))
                    .type(rd.nextInt(2) == 0? "online": "onlab")
                    .thumbnail(faker.company().logo())
                    .price(faker.number().numberBetween(1_000_000, 3_000_000))
                    .rating(faker.number().randomDouble(1,3,5))
                    .user(user)
                    .categories(categories)
                    .build();
            courseRepository.save(course);
        }
    }

    @Test
    void find(){
        List<Course> courses = courseRepository.findCourseDemo("a","onlinE",null);
        courses.forEach(System.out::println);
    }
}
