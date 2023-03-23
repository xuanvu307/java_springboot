package com.example.buoi18_jpa.entity;

import com.example.buoi18_jpa.dto.UserDto;
import jakarta.persistence.*;
import lombok.*;

//
//@Entity
//@Table(name = "user")
//@AllArgsConstructor
//@NoArgsConstructor
@Builder
@ToString
//@Getter
//@Setter
@SqlResultSetMappings(value = {
        @SqlResultSetMapping(
                name = "UserInfo",
                classes = @ConstructorResult(
                        targetClass = UserDto.class,
                        columns = {
                                @ColumnResult(name = "id", type = Integer.class),
                                @ColumnResult(name = "name", type = String.class),
                                @ColumnResult(name = "email", type = String.class)
                        }
                )
        )
})
@NamedNativeQuery(
        name = "getUserDtoUsingNativeQuery",
        resultSetMapping = "UserInfo",
        query = "select u.id,u.name, u.email from user u")

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "user")

public class User {
//
    //id tu sinh(database tu sinh va user tu sinh) **********
    // khong  tu sinh(user tu sinh, dam bao khong trung id)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // sinh ra theo database(auto increment)
    @Column(name = "id", unique = true, nullable = false)
    private Integer id;

    @Column(name = "name", columnDefinition = "TEXT")
    private String name;

    @Column(name = "email", unique = true)
    private String email;

    @Column(name = "password")
    private String password;
}

