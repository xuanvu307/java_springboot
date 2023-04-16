package com.example.jwt.dto;

import com.example.jwt.entity.User;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.*;

import java.io.IOException;
import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
@ToString
public class BlogDto {
    private Integer id;
    private String title;
    private String description;
    private String content;
    private String thumbnail;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private LocalDateTime pulishedAt;
    private User user;

    public BlogDto (Integer id, String title, String description, String content, String thumbnail,
                    LocalDateTime createdAt, LocalDateTime updatedAt, LocalDateTime pulishedAt, Object user){
        this.id = id;
        this.title =title;
        this.description =description;
        this.content = content;
        this.thumbnail = thumbnail;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.pulishedAt = pulishedAt;

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
