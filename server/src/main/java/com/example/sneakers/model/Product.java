package com.example.sneakers.model;
import org.springframework.data.annotation.Id;

import java.util.List;

public class Product {
    @Id
    private String id;
    private String sku;
    private String name;
    private Double price;
    private String description;
    private List<String> images;
    private String category;
    private String style;
    private Boolean isNew;
    private Boolean onSale;
    private Boolean isFeatured;

    public Product(){};

    public Product(String sku, String name, Double price, String description, List<String> images , String category, String style, Boolean isNew, Boolean onSale, Boolean isFeatured){
        this.sku = sku;
        this.name = name;
        this.price = price;
        this.description = description;
        this.images = images;
        this.category = category;
        this.style = style;
        this.isNew = isNew;
        this.onSale = onSale;
        this.isFeatured = isFeatured;
    }
    public String getId(){
        return id;
    }
    public String getSku(){
        return sku;
    }
    public void setSku(String sku){
        this.sku = sku;
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
    public String getCategory(){
        return category;
    }
    public void setCategory(String category){
        this.category = category;
    }
    public String getStyle(){
        return style;
    }
    public void setStyle(String style){
        this.style = style;
    }
    public Boolean getIsNew(){
        return isNew;
    }
    public void setGetIsNew(Boolean isNew){
        this.isNew = isNew;
    }
    public Boolean getOnSale(){
        return onSale;
    }
    public void setOnSale(Boolean onSale){
        this.onSale = onSale;
    }
    public Boolean getIsFeatured(){
        return isFeatured;
    }
    public void setIsFeatured(Boolean isFeatured){
        this.isFeatured = isFeatured;
    }
}
