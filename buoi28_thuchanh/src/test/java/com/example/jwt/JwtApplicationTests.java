package com.example.jwt;

import com.example.jwt.entity.*;
import com.example.jwt.repository.*;
import com.github.slugify.Slugify;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.PageRequest;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@SpringBootTest
class JwtApplicationTests {

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private BlogRepository blogRepository;

    @Autowired
    private CommentRepository commentRepository;

    @Test
    void save_roles() {
        List<Role> roles = List.of(
                new Role(null, "ADMIN"),
                new Role(null, "USER"),
                new Role(null, "AUTHOR")
        );

        roleRepository.saveAll(roles);
    }

    @Test
    void save_users() {
        Role userRole = roleRepository.findByName("USER").orElse(null);
        Role adminRole = roleRepository.findByName("ADMIN").orElse(null);
        Role authorRole = roleRepository.findByName("AUTHOR").orElse(null);

        List<User> users = List.of(
                new User(null, "Nguyễn Văn A", "a@gmail.com", passwordEncoder.encode("111"), null,List.of(adminRole, userRole)),
                new User(null, "Trần Văn B", "b@gmail.com", passwordEncoder.encode("111"),null, List.of(userRole)),
                new User(null, "Hoàng Thị C", "c@gmail.com", passwordEncoder.encode("111"),null, List.of(authorRole, userRole))
        );

        userRepository.saveAll(users);
    }

    @Test
    void save_category() {
        List<Category> roles = List.of(
                new Category(null, "Backend"),
                new Category(null, "Frontend"),
                new Category(null, "DevOps"),
                new Category(null, "Database"),
                new Category(null, "Mobile")

        );

        categoryRepository.saveAll(roles);
    }
    @Test
    void save_blog() {
        Random rd = new Random();
        Slugify slugify = Slugify.builder().build();
        List<User> users = userRepository.findByRoles_NameIn(List.of("ADMIN", "AUTHOR"));
        List<Category> categoryList = categoryRepository.findAll();

        //tạo blog
        for (int i = 0; i < 25; i++) {
            // random 1 user
            User rdUser = users.get(rd.nextInt(users.size()));

            // random 1 category
            List<Category> categories = new ArrayList<>();
            for (int j = 0; j < 3; j++) {
                Category rdCategory = categoryList.get(rd.nextInt(categoryList.size()));
                if (!categories.contains(rdCategory)){
                    categories.add(rdCategory);
                }
            }
            //tạo blog
            Blog blog = Blog.builder()
                    .title("Blog " + (i+1))
                    .slug(slugify.slugify("Blog " + (i+1)))
                    .description("description " + (i+1))
                    .content("content " + (i+1))
                    .status(rd.nextInt(2) == 0)
                    .user(rdUser)
                    .categories(categories)
                    .build();
            blogRepository.save(blog);
        }
    }
    @Test
    void save_comment() {
        Random rd = new Random();
        List<User> userList = userRepository.findAll();
        List<Blog> blogList = blogRepository.findAll();

        for (int i = 0; i < 100; i++) {
            //random 1 user
            User rdUser = userList.get(rd.nextInt(userList.size()));
            //random 1 blog
            Blog rdBlog = blogList.get(rd.nextInt(blogList.size()));

            Comment comment = Comment.builder()
                    .content("comment: " +(i+1))
                    .user(rdUser)
                    .blog(rdBlog)
                    .build();
            commentRepository.save(comment);
        }
    }

//    @Test
//    void testC(){
//        System.out.println(blogRepository.findByCategorie("Backend"));
//    }

//    @Test
//    void testas(){
//        System.out.println(blogRepository.getAllByStatusTrueAndOrderByPulishedAtDesc(PageRequest.of(0,2)));
//    }
}
