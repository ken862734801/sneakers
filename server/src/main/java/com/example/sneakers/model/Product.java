package com.example.sneakers.model;
import org.springframework.data.annotation.Id;

public class Product {
    @Id
    private String id;
    private String name;

    public Product(){};

    public Product(String name){
        this.name = name;
    }
    public String getId(){
        return id;
    }
    public String getName(){
        return name;
    }
    public void setName(String name){
        this.name = name;
    }
}
