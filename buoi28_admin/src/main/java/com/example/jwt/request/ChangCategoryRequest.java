package com.example.jwt.request;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class ChangCategoryRequest {
    private String name;
}
