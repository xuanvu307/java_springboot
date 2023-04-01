package com.example.testjpa.repository;

import com.example.testjpa.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;


public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
    List<Employee> findByEmailAddressAndLastName(String emailAddress, String lastName);
    List<Employee> findByFirstNameOrLastName(String firstName, String lastName);
    List<Employee> findByLastNameOrderByFirstNameAsc(String lastName);
    List<Employee> findByFirstNameContainingIgnoreCase(String firstName);

    @Query("SELECT e from Employee e where e.lastName = ?1")
    List<Employee> findEmployeeByLastNameName_JPQL(String name);

    @Query(value = "SELECT e from employee e where e.lastName = ?1",nativeQuery = true)
    List<Employee> findEmployeeByLastNameName_native(String name);

    @Query(nativeQuery = true, name = "findEmployeeByLastName")
    List<Employee> findEmployeeByLastName(String lastName);


}