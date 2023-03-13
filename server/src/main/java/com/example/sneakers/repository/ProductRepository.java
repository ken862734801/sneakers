package com.example.sneakers.repository;


import com.example.sneakers.model.Product;
import org.springframework.data.mongodb.repository.MongoRepository;


import java.util.List;

public interface ProductRepository extends MongoRepository<Product, String> {
    public List<Product> findByCategory(String category);
}
