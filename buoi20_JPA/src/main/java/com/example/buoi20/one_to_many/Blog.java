package com.example.buoi20.one_to_many;

import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Table(name = "blog")
@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Blog {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column
    private String title;

    @ManyToOne
    @JoinColumn(name = "author_id")
    private Author author;
}