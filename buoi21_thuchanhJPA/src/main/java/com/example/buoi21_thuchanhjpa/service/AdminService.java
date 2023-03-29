package com.example.buoi21_thuchanhjpa.service;

import com.example.buoi21_thuchanhjpa.exception.BadRequest;
import com.example.buoi21_thuchanhjpa.model.Category;
import com.example.buoi21_thuchanhjpa.model.Course;
import com.example.buoi21_thuchanhjpa.model.User;
import com.example.buoi21_thuchanhjpa.repository.CategoryRepository;
import com.example.buoi21_thuchanhjpa.repository.CourseRepository;
import com.example.buoi21_thuchanhjpa.repository.UserRepository;
import com.example.buoi21_thuchanhjpa.request.ChangeCourse;
import com.example.buoi21_thuchanhjpa.request.CreateCourse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class AdminService {

    @Autowired
    private CourseRepository courseRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    public List<Course> getListCourse(Integer page, Integer pageSize) {
        return courseRepository.findCourseByAdmin(PageRequest.of(page, pageSize));
    }

    public Course creatCourse(CreateCourse request) {
        List<Category> categories = new ArrayList<>();
        for (int i = 0; i < request.getCategory().size(); i++) {
            int categoryId = request.getCategory().get(i);
            categories.add(categoryRepository.findById(categoryId)
                    .orElseThrow(() -> {
                        throw new BadRequest("khong tim thay id");
                    }));
        }
        User user = userRepository.findById(request.getUserId())
                .orElseThrow(() -> {
                    throw new BadRequest("Khong tim thay id");
                });

        Course course = Course.builder()
                .name(request.getName())
                .description(request.getDescription())
                .type(request.getType())
                .categories(categories)
                .thumbnail(request.getThumbnail())
                .user(user)
                .build();
        courseRepository.save(course);
        return course;
    }

    public Course getCourse(Integer id) {
        Optional<Course> courseOptional = courseRepository.findById(id);
        if (courseOptional.isPresent()) {
            return courseOptional.get();
        } else {
            throw new BadRequest("khong tim thay id");
        }
    }

    public Course changeCourse(Integer id, ChangeCourse request) {
        Optional<Course> courseOptional = courseRepository.findById(id);
        if (courseOptional.isPresent()) {
            List<Category> categories = new ArrayList<>();
            for (int i = 0; i < request.getCategory().size(); i++) {
                int categoryId = request.getCategory().get(i);
                categories.add(categoryRepository.findById(categoryId).orElseThrow());
            }
            Course course = courseOptional.get();
            course.setName(request.getName());
            course.setDescription(request.getDescription());
            course.setType(request.getType());
            course.setCategories(categories);
            course.setThumbnail(request.getThumbnail());
            course.setUser(userRepository.findById(request.getUserId()).orElseThrow());

            courseRepository.save(course);
            return course;
        } else {
            throw new BadRequest("khong tim thay id");
        }
    }

    public void deleteCourse(Integer id) {
        Optional<Course> courseOptional = courseRepository.findById(id);
        if (courseOptional.isPresent()) {
            courseRepository.delete(courseOptional.get());
        } else {
            throw new BadRequest("khong tim thay id");
        }
    }
}
