package com.example.buoi20;

import com.example.buoi20.one_to_many.Author;
import com.example.buoi20.one_to_many.Blog;
import com.example.buoi20.one_to_one.IdentityCard;
import com.example.buoi20.one_to_one.User;
import com.example.buoi20.repository.AuthorRepository;
import com.example.buoi20.repository.BlogRepository;
import com.example.buoi20.repository.IdentityCardRepository;
import com.example.buoi20.repository.UserRepository;
import com.github.javafaker.Faker;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.annotation.Rollback;

import java.util.ArrayList;
import java.util.List;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Rollback(value = false)
class DemoApplicationTests {
    @Autowired
    private IdentityCardRepository identityCardRepository;

    @Autowired
    private UserRepository userRepository;

    @Test
    void save_user_card() {
        Faker faker = new Faker();
        for (int i = 0; i < 30; i++) {
            IdentityCard identityCard = IdentityCard.builder()
                    .code(String.valueOf(faker.number().numberBetween(1000, 9000)))
                    .build();
            identityCardRepository.save(identityCard);

            User user = User.builder()
                    .name(faker.name().fullName())
                    .identityCard(identityCard)
                    .build();
            userRepository.save(user);
        }
    }

    @Test
    void save_user() {
        Faker faker = new Faker();
        User user = User.builder()
                .name("Xuân Vũ")
                .identityCard(
                        IdentityCard.builder()
                                .code("123123")
                        .build()
                )
                .build();
        userRepository.save(user);
    }

    @Test
    void get_user() {
        User user = userRepository.findById(1)
                .orElseThrow(() -> {
                    throw new RuntimeException("abc");
                });
    }

    @Test
    void delete_user(){
        userRepository.deleteById(2);
    }

    @Autowired
    private AuthorRepository authorRepository;
    @Autowired
    private BlogRepository blogRepository;

    @Test
    void save_author_blog(){
        Faker faker = new Faker();
        for (int i = 0; i < 5; i++) {
            Author author = Author.builder()
                    .name(faker.name().fullName())
                    .build();
            authorRepository.save(author);

            for (int j = 0; j < 3; j++) {
                Blog blog = Blog.builder()
                        .title(faker.book().title())
                        .author(author)
                        .build();
                blogRepository.save(blog);
            }
        }
    }

    @Test
    void delete_preRemove(){

    }
}
