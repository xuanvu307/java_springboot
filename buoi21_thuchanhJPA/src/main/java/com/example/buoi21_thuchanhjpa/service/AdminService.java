package com.example.buoi21_thuchanhjpa.service;

import com.example.buoi21_thuchanhjpa.dto.PageDto;
import com.example.buoi21_thuchanhjpa.exception.BadRequest;
import com.example.buoi21_thuchanhjpa.model.Category;
import com.example.buoi21_thuchanhjpa.model.Course;
import com.example.buoi21_thuchanhjpa.model.User;
import com.example.buoi21_thuchanhjpa.repository.CategoryRepository;
import com.example.buoi21_thuchanhjpa.repository.CourseRepository;
import com.example.buoi21_thuchanhjpa.repository.UserRepository;
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

    // lấy danh sách theo trang
    public PageDto getListCourse(Integer page, Integer pageSize) {
        if (page < 1){
            throw new BadRequest("Số trang phải từ 1 trở lên");
        }
        PageDto pageDto = new PageDto();
        pageDto.setPageSize(pageSize);
        pageDto.setCurrentPage(page);
        pageDto.setTotalPages((int) Math.ceil((double) courseRepository.count() / pageSize));
        pageDto.setTotalItems((int) courseRepository.count());
        pageDto.setData(courseRepository.findCourseByAdmin(PageRequest.of(page-1, pageSize)));
        return pageDto;
    }

    // tạo khóa học mới
    public Course creatCourse(CreateCourse request) {
        List<Category> categories = getListCategory(request.getCategory());

        User user = getUserById(request.getUserId());

        Course course = Course.builder()
                .name(request.getName())
                .description(request.getDescription())
                .type(request.getType())
                .categories(categories)
                .thumbnail(request.getThumbnail())
                .price(request.getPrice())
                .user(user)
                .build();
        courseRepository.save(course);
        return course;
    }

    // lấy khóa học theo id
    public Course getCourse(Integer id) {
        Optional<Course> courseOptional = courseRepository.findById(id);
        if (courseOptional.isPresent()) {
            return courseOptional.get();
        } else {
            throw new BadRequest("khong tim thay id");
        }
    }

    // sửa thông tin khóa học
    public Course changeCourse(Integer id, CreateCourse request) {
        Optional<Course> courseOptional = courseRepository.findById(id);
        if (courseOptional.isPresent()) {

            List<Category> categories = getListCategory(request.getCategory());

            User user = getUserById(request.getUserId());

            Course course = courseOptional.get();

            course.setName(request.getName());
            course.setDescription(request.getDescription());
            course.setType(request.getType());
            course.setPrice(request.getPrice());
            course.setCategories(categories);
            course.setThumbnail(request.getThumbnail());
            course.setUser(user);

            courseRepository.save(course);
            return course;
        } else {
            throw new BadRequest("khong tim thay id");
        }
    }

    // xóa khóa học
    public void deleteCourse(Integer id) {
        Optional<Course> courseOptional = courseRepository.findById(id);
        if (courseOptional.isPresent()) {
            courseRepository.delete(courseOptional.get());
        } else {
            throw new BadRequest("khong tim thay id");
        }
    }

    public List<Category> getListCategory(List<Integer> list) {
        List<Category> categories = new ArrayList<>();
        for (int categoryId : list) {
            categories.add(categoryRepository.findById(categoryId)
                    .orElseThrow(() -> {
                        throw new BadRequest("khong tim thay id Category");
                    }));
        }
        return categories;
    }

    public User getUserById(Integer id) {
        return userRepository.findById(id)
                .orElseThrow(() -> {
                    throw new BadRequest("Khong tim thay id User");
                });
    }

    public List<Course> getAllCourse() {
        return courseRepository.findAll();
    }
}
