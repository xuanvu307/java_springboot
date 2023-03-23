package com.example.buoi18_jpa.repository;

import com.example.buoi18_jpa.dto.UserDto;
import com.example.buoi18_jpa.entity.User;
import com.example.buoi18_jpa.projection.UserProjection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

// jparepository la genaric chua<doi tuong tuong tac, kieu du lieu khoa chinh>
@Repository // co the danh dau hoac khong
public interface UserRepository extends JpaRepository<User, Integer> {
    //1 method query() dat tne method theo dungs chuan
    List<User> findByName(String name);

    List<User> findByNameStartingWith(String prefix);

    List<User> findByNameContainingIgnoreCase(String name);

    Optional<User> findByEmail(String email);

    boolean existsByEmail(String email);

    long countByName(String name);

    List<User> findByNameOrderByEmailDesc(String name);

//    List<Student> Top5ByName(String name);


    // 2 jpql query: query dua theo entity(tuong tac voi entity)

    @Query("select u from User u where u.name = ?1")
    List<User> findByNameJPQL(String name);

    @Query("select u from User u where u.email = :email")
    Optional<User> findByEmailJPQL(@Param("email") String email);

//    @Query("select u from User u where u.name = ?1")
//    List<Student> Top5ByNameJPQL(String name);

    // 3 native query (tuong tac voi csdl)
    @Query(nativeQuery = true, value = "select * from user u where u.name = ?1")
    List<User> findByName_Native(String name);

    // query DTO
    //1 query entity
    //2 query JPQL
    @Query("select new com.example.buoi18_jpa.dto.UserDto(u.id,u.name,u.email) from User u where u.name = ?1")
    List<UserDto> findUserDtoByName(String name);

    // 3 query by native
    @Query(nativeQuery = true, name = "getUserDtoUsingNativeQuery")
    List<UserDto> getUserDtoUsingNativeQuery();

    //4 projection
    UserProjection findUserProjectionByEmail(String email);



    // sap xep


    // phan trang

}
