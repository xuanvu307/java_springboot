package com.example.buoi21_thuchanhjpa.request;

import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class CreateCourse {
    private String name;
    private String description;
    private String type;
    private List<Integer> category;
    private Integer price;
    private Integer userId;
}
