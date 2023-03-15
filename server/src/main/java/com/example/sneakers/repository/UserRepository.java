package com.example.sneakers.repository;

import com.example.sneakers.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface UserRepository extends MongoRepository<User, String> {
    public List<User> findByEmail(String email);
}
