package com.example.buoi18_jpa.entity;

import jakarta.persistence.*;
import lombok.*;

@Table(name = "student")
@Entity
@Getter
@Setter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // sinh ra theo database(auto increment)
    @Column(name = "id", unique = true, nullable = false)
    private Integer id;

    @Column(name = "name")
    private String name;

    @Column(name = "age")
    private Integer age;

    @Column(name = "email", unique = true)
    private String email;

}