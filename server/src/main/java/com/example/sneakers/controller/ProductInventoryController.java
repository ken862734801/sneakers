package com.example.sneakers.controller;

import com.example.sneakers.model.ProductInventory;
import com.example.sneakers.service.ProductInventoryService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/inventory")
public class ProductInventoryController {
    
    private final ProductInventoryService productInventoryService;

    @Autowired
    public ProductInventoryController(ProductInventoryService productInventoryService){
        this.productInventoryService = productInventoryService;
    }
    @GetMapping
    public List<ProductInventory> getAllProductInventory(){
        return productInventoryService.getAllProductInventory();
    }
    @GetMapping("/{reference}")
    public ResponseEntity<List<ProductInventory>> getProductInventoryByReference(@PathVariable String reference){
        List<ProductInventory> referenceInventoryList = productInventoryService.getAllProductInventoryByReference(reference);
        if(referenceInventoryList.isEmpty()){
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok().body(referenceInventoryList);
        }
    }
    @GetMapping("/sku/{sku}")
    public ResponseEntity<ProductInventory> getProductInventoryBySku(@PathVariable String sku){
            return productInventoryService.getProductInventoryBySku(sku)
            .stream()
            .map(product -> ResponseEntity.ok().body(product))
            .findFirst()
            .orElse(ResponseEntity.notFound().build());
    }
}
