package com.example.buoi20.one_to_many;

import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Table(name = "author")
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Author {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column
    private String name;
//
//    @OneToMany(mappedBy = "author",cascade = CascadeType.ALL, orphanRemoval = true)
//    private List<Blog> blogs = new ArrayList<>();

}