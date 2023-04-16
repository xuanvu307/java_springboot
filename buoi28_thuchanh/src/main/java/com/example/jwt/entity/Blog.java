package com.example.jwt.entity;

import com.example.jwt.dto.BlogDto;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@SqlResultSetMappings(value = {
        @SqlResultSetMapping(
                name = "listBlog",
                classes  = @ConstructorResult(
                        targetClass = BlogDto.class,
                        columns = {
                                @ColumnResult(name = "id", type = Integer.class),
                                @ColumnResult(name = "title", type = String.class),
                                @ColumnResult(name = "description", type = String.class),
                                @ColumnResult(name = "content", type = String.class),
                                @ColumnResult(name = "thumbnail", type = String.class),
                                @ColumnResult(name = "created_at", type = LocalDateTime.class),
                                @ColumnResult(name = "updated_at", type = LocalDateTime.class),
                                @ColumnResult(name = "pulished_at", type = LocalDateTime.class),
                                @ColumnResult(name = "user", type = String.class)
                        }
                )
        )
})

@NamedNativeQuery(
        name = "getBlog",
        resultSetMapping = "listBlog",
        query = """
                select b.*,
                JSON_OBJECT("id", u.id, "name", u.name, "email", u.email,"avatar", u.avatar) as user
                from blog b
                left join user u on b.user_id = u.id
                left join blog_category bc on b.id = bc.blog_id
                left join category c on bc.categoriy_id = c.id
                """
)
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
@ToString
@Entity
@Table(name = "blog")
public class Blog {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "title", nullable = false)
    private String title;

    @Column(name = "slug", nullable = false)
    private String slug;

    @Column(name = "description", nullable = false, columnDefinition = "TEXT")
    private String description;

    @Column(name = "content", nullable = false, columnDefinition = "TEXT")
    private String content;

    @Column(name = "thumbnail")
    private String thumbnail;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    @Column(name = "pulished_at")
    private LocalDateTime pulishedAt;

    @Column(name = "status")
    private Boolean status;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToMany
    @JoinTable(name = "blog_category",
            joinColumns = @JoinColumn(name = "blog_id"),
            inverseJoinColumns = @JoinColumn(name = "categoriy_id"))
    private List<Category> categories = new ArrayList<>();

    @PrePersist
    public void prePersist() {
        createdAt = LocalDateTime.now();
        if(status) {
            pulishedAt = createdAt;
        }
    }

    @PreUpdate
    public void preUpdate() {
        updatedAt = LocalDateTime.now();
        if(status) {
            pulishedAt = updatedAt;
        }
    }
}
