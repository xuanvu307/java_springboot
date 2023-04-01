package com.example.testjpa.entity;

import jakarta.persistence.*;
import lombok.*;

@Table(name = "employee")
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Builder

@NamedNativeQuery(
        name = "findEmployeeByLastName",
        query = "SELECT e FROM employee e WHERE e.name = :name")
public class Employee {
    @Id
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "email_address", unique = true)
    private String emailAddress;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

}