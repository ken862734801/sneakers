package com.example.sneakers.repository;


import com.example.sneakers.model.Product;
import org.springframework.data.mongodb.repository.MongoRepository;


import java.util.List;
import java.util.Optional;

public interface ProductRepository extends MongoRepository<Product, String> {
    public List<Product> findByCategory(String category);
    public List<Product> findByOnSale(Boolean onSale);
    public List<Product> findByIsFeatured(Boolean isFeatured);
    public List<Product> findByIsNew(Boolean isNew);
    public Optional<Product> findBySku(String sku);
}
