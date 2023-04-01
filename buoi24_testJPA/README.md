## 1. Câu 1
@Entity(name = ‘EntityName’) dùng để chỉ tên của entity được Hibernate quản lý trong khi @Table(name = “TableName”) chỉ đích danh tên của table dưới database. 
Ví dụ khi chúng ta sử dụng HQL để truy vấn thì chúng ta cần chỉ định EntityName và Hibernate sẽ dựa vào đó để ánh xạ thành TableName tương ứng.
```
Hibernate: select m from EntityName m 
SQL: select m from TableName m
```
## 2. Câu 2
Cách đơn giản nhất để có thể xem các câu truy vấn xuất ra các thiết bị output như màn hình console v.v là thêm một thuộc tính vào file application.properties.
```
spring.jpa.show-sql=true
```
Để câu truy vấn xuất ra màn hình có định dạng rõ ràng và dễ nhìn hơn chúng ta thêm
```
spring.jpa.properties.hibernate.format_sql=true
```
## 3. Câu 3
 - Tham số nào trong @Column sẽ đổi lại tên cột nếu muốn khác với tên thuộc tính: @Column(name = "") 
   tham số nào chỉ định yêu cầu duy nhất, không được trùng lặp dữ liệu: @Column(unique=true)
   tham số nào buộc trường không được null: @Column(nullable = false)?
## 4. Câu 4
@PostPresist
@PostUpdate
## 5. Câu 5
Kế thừa từ 3 interface 
ListCrudRepository<T, ID>, 
ListPagingAndSortingRepository<T, ID>, 
QueryByExampleExecutor<T>
## 6. Câu 6
Post.java
```java
import jakarta.persistence.*;
import lombok.*;

@Table(name = "post")
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Builder
public class Post {
    @Id
    @Column(name = "id", nullable = false)
    private Long id;
}
```
Repository

```java
import com.example.testjpa.entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post, Long> {
}
```
## 7. Câu 7
Không
## 8. Câu 8
```java
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
    List<Employee> findByEmailAddressAndLastName(String emailAddress, String lastName);
    List<Employee> findByFirstNameOrLastName(String firstName, String lastName);
    List<Employee> findByLastNameOrderByFirstNameAsc(String lastName);
    List<Employee> findByFirstNameContainingIgnoreCase(String firstName);
}
```
## 9. Câu 9
annotation @Query được dùng để tự định nghĩa các method sử dụng câu truy vấn JPQL (Hibernate) hoặc raw SQL
```java
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
   @Query("SELECT e from Employee e where e.lastName = ?1")
   List<Employee> findEmployeeByLastNameName_JPQL(String name);

   @Query(value = "SELECT e from employee e where e.lastName = ?1",nativeQuery = true)
   List<Employee> findEmployeeByLastNameName_native(String name);
}
```
 @NamedQuery và được sử dụng để đặt tên cho một truy vấn JPA để có thể sử dụng lại và thực thi nhiều lần trong ứng dụng.

-- định nghĩa ở entity
```java
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
```

-- gọi ra trong repository
```java
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
    
    @Query(nativeQuery = true, name = "findEmployeeByLastName")
    List<Employee> findEmployeeByLastName(String lastName);
}
```
## 10. Câu 10
Tìm tất cả các Employee theo lastName theo lastName giảm dần
```java
List<Employee> findByLastNameOrderByLastNameAsc(String lastName);
```
Tìm tất cả các Employee theo fistName không phân biệt hoa thường có phân trang
```java
Page<Employee> findByFirstNameContainingIgnoreCase(String firstName,  Pageable pageable);
```
## 11. Câu 11

## 12. Câu 12

## 13. Câu 13


