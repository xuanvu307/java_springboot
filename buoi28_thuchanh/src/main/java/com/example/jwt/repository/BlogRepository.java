package com.example.jwt.repository;

import com.example.jwt.entity.Blog;
import com.example.jwt.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface BlogRepository extends JpaRepository<Blog, Integer> {

    List<Blog> findByTitleContaining(String term);

    Blog findByIdAndAndSlug(Integer id, String slug);


    @Query(nativeQuery = true,
            value = """
                    select count(bc.blog_id)
                    from category c
                    inner join blog_category bc on c.id = bc.categoriy_id
                    group by c.id, c.name
                    """)
    Long getTopByCategory();
}