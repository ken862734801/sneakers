package com.example.sneakers.controller;

import com.example.sneakers.model.Product;
import com.example.sneakers.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
// import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/products")
public class ProductController {
    
    private final ProductService productService;

    @Autowired
    public ProductController(ProductService productService){
        this.productService = productService;
        }
    @GetMapping
    public List<Product> getAllProducts(){
        return productService.getAllProducts();
        }
    @GetMapping("/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable String id) {
        return productService.getProductById(id)
                .map(product -> ResponseEntity.ok().body(product))
                .orElse(ResponseEntity.notFound().build());
    }
    @GetMapping("/men")
    public List<Product> getAllMenProducts(){
        return productService.getAllMenProducts();
    }
    @GetMapping("/women")
    public List<Product> getAllWomenProducts(){
        return productService.getAllWomenProducts();
    }
    @GetMapping("/kids")
    public List<Product> getAllKidsProducts(){
        return productService.getAllKidsProducts();
    }
    @GetMapping("/sale")
    public List<Product> getAllSaleProducts(){
        return productService.getAllSaleProducts();
    }
    @GetMapping("/featured")
    public List<Product> getAllFeaturedProducts(){
        return productService.getAllFeaturedProducts();
    }
    @GetMapping("/new")
    public List<Product> getAllNewProducts(){
        return productService.getAllNewProducts();
    }
}
