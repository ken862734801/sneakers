package com.example.sneakers.service;

import com.example.sneakers.model.Product;
import com.example.sneakers.repository.ProductRepository;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class ProductService {
    private final ProductRepository productRepository;

    @Autowired
    public ProductService(ProductRepository productRepository){
        this.productRepository = productRepository;
    }
    public List<Product> getAllProducts(){
        return productRepository.findAll();
    }
    public List<Product> getAllMenProducts(){
        return productRepository.findByCategory("men");
    }
    public List<Product> getAllWomenProducts(){
        return productRepository.findByCategory("women");
    }
    public List<Product> getAllKidsProducts(){
        return productRepository.findByCategory("kids");
    }
    public Optional<Product> getProductById(String id){
        return productRepository.findById(id);
    }
    public Product addProduct (Product product){
        return productRepository.save(product);
    }
    public void deleteProduct(String id){
        productRepository.deleteById(id);
    }
}
