package com.example.bean;

import com.example.bean.model.User;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class BeanApplication {

    public static void main(String[] args) {
        ApplicationContext context = SpringApplication.run(BeanApplication.class, args);

        User user = context.getBean(User.class);
        user.sayHello();
    }

}
