package com.example.sneakers.repository;

import com.example.sneakers.model.ProductInventory;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;
import java.util.List;

public interface ProductInventoryRepository extends MongoRepository <ProductInventory, String> {
    public Optional<ProductInventory> findBySku(String sku);
    public Optional<ProductInventory> deleteBySku(String sku);
    public List<ProductInventory> findByReference(String reference);
}
