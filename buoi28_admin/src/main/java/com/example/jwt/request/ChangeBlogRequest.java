package com.example.jwt.request;

import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class ChangeBlogRequest {
    private String title;
    private String description;
    private String content;
    private String thumbnail;
    private Boolean status;
    private Integer userId;
    private List<Integer> categoryId;
}
