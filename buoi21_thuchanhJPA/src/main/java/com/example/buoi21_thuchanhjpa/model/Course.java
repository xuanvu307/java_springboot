package com.example.buoi21_thuchanhjpa.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Table(name = "course")
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Builder
public class Course implements Serializable {
    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    @Column(name = "type")
    private String type;

    @Column(name = "thumbnail")
    private String thumbnail;

    @Column(name = "price")
    private Integer price;

    @Column(name = "rating")
    private Double rating;

//    @JsonProperty("user_info") //tra ve voi ten duoc dat
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

//    @JsonIgnore //khong tra ve
    @ManyToMany
    @JoinTable(name = "course_categories",
            joinColumns = @JoinColumn(name = "course_id"),
            inverseJoinColumns = @JoinColumn(name = "categories_id"))
    private List<Category> categories = new ArrayList<>();
}