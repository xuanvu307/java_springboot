package com.example.testjpa.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.UUID;

@Table(name = "post")
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Builder
public class Post {
    @Id
    private String id;
    private String title;

    @PrePersist
    public void generateId() {
        this.id = UUID.randomUUID().toString();
    }
}