package com.example.buoi21_thuchanhjpa.dto;

import com.example.buoi21_thuchanhjpa.model.User;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.*;

import java.io.IOException;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class CourseDto {
    private Integer id;
    private String name;
    private String description;
    private String type;
    private String thumbnail;
    private Integer price;
    private Double rating;
    private User user;

    public CourseDto(Integer id, String name, String description, String type, String thumbnail, Integer price, Double rating, Object user) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.type = type;
        this.thumbnail = thumbnail;
        this.price = price;
        this.rating = rating;

        // Sử dụng Jackson để conver từ chuỗi JSON -> Object
        if (user != null) {
            ObjectMapper mapper = new ObjectMapper();
            try {
                this.user = mapper.readValue((String) user, User.class);
            } catch (IOException e) {
                this.user = null;
            }
        }
    }
}