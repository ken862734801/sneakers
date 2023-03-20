package com.example.sneakers.service;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

import com.example.sneakers.model.ProductInventory;
import com.example.sneakers.repository.ProductInventoryRepository;

import java.util.List;
import java.util.Optional;

@Service
public class ProductInventoryService {
    private final ProductInventoryRepository productInventoryRepository;
    
    @Autowired
    public ProductInventoryService(ProductInventoryRepository productInventoryRepository){
        this.productInventoryRepository = productInventoryRepository;
    }
    public List<ProductInventory> getAllProductInventory(){
        return productInventoryRepository.findAll();
    }
    public Optional<ProductInventory> getProductInventoryBySku(String sku){
        return productInventoryRepository.findBySku(sku);
    }
    public ProductInventory addProductInventory(ProductInventory productInventory){
        return productInventoryRepository.save(productInventory);
    }
    public void deleteProductInventoryById(String id){
         productInventoryRepository.deleteById(id);
    }
    public void deleteProductInventorybySku(String sku){
        productInventoryRepository.deleteBySku(sku);
    }
    public List<ProductInventory> getAllProductInventoryByReference(String reference){
        return productInventoryRepository.findByReference(reference);
    }
}
