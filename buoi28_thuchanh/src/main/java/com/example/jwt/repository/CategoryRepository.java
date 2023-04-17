package com.example.jwt.repository;

import com.example.jwt.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CategoryRepository extends JpaRepository<Category, Integer> {
    @Query(nativeQuery = true,
            value = """
                    select count()
                    from blog b
                    join category c
                    group by c.id, c.name
                    """
    )
    List<Category> findGetAllCategory();

}