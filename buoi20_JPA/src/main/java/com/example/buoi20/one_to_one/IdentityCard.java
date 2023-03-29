package com.example.buoi20.one_to_one;

import jakarta.persistence.*;
import lombok.*;

@Table(name = "identity_card")
@Entity
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Getter
@Setter
@Builder
public class IdentityCard {
    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column
    private String code;
}