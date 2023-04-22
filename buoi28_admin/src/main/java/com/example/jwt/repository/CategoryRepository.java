package com.example.jwt.repository;

import com.example.jwt.dto.CategoryDto;
import com.example.jwt.entity.Category;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CategoryRepository extends JpaRepository<Category, Integer> {

    // 3. Lấy danh sách category
    @Query("select new com.example.jwt.dto.CategoryDto(c.id, c.name,count(b)) " +
            "from Blog b " +
            "join b.categories c " +
            "where b.status = true "+
            "group by c.id, c.name " +
            "order by count(b) desc ")
    List<CategoryDto> getAllCategoryDto();

    // 4. Lấy danh sách category được sử dụng nhiều nhất
    @Query("select new com.example.jwt.dto.CategoryDto(c.id, c.name,count(b)) " +
            "from Blog b " +
            "join b.categories c " +
            "where b.status = true "+
            "group by c.id, c.name " +
            "order by count(b) desc ")
    Page<CategoryDto> getCategories(Pageable pageable);

    Category findByName(String name);
}