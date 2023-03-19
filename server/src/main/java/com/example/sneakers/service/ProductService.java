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
        return productRepository.findByCategory("Men");
    }
    public List<Product> getAllWomenProducts(){
        return productRepository.findByCategory("Women");
    }
    public List<Product> getAllKidsProducts(){
        return productRepository.findByCategory("Kids");
    }
    public List<Product> getAllSaleProducts(){
        return productRepository.findByOnSale(true);
    }
    public List<Product> getAllFeaturedProducts(){
        return productRepository.findByIsFeatured(true);
    }
    public List<Product> getAllNewProducts(){
        return productRepository.findByIsNew(true);
    }
    public Optional<Product> getProductById(String id){
        return productRepository.findById(id);
    }
    public Optional<Product> getProductBySku(String sku){
        return productRepository.findBySku(sku);
    }
    public Product addProduct (Product product){
        return productRepository.save(product);
    }
    public void deleteProduct(String id){
        productRepository.deleteById(id);
    }
}
