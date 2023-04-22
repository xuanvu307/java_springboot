package com.example.jwt.request;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class ChangeCommentRequest {
    private String content;
}
