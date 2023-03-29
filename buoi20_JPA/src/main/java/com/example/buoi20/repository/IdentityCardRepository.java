package com.example.buoi20.repository;

import com.example.buoi20.one_to_one.IdentityCard;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IdentityCardRepository extends JpaRepository<IdentityCard, Integer> {
}