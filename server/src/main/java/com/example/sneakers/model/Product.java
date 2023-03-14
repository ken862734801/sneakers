package com.example.sneakers.model;
import org.springframework.data.annotation.Id;

import java.util.List;

public class Product {
    @Id
    private String id;
    private String name;
    private Double price;
    private String category;
    private String description;
    private List<String> images;

    public Product(){};

    public Product(String name, Double price, String category, String description, List<String> images){
        this.name = name;
        this.price = price;
        this.category = category;
        this.description = description;
        this.images = images;
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
    public Double getPrice(){
        return price;
    }
    public void setPrice(Double price){
        this.price = price;
    }
    public String getCategory(){
        return category;
    }
    public void setCategory(String category){
        this.category = category;
    }
    public String getDescription(){
        return description;
    }
    public void setDescription(String description){
        this.description = description;
    }
    public List<String> getImages(){
        return images;
    }
    public void setImages(List<String> images){
        this.images = images;
    }
}
