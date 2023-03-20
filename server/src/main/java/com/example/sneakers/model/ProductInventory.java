package com.example.sneakers.model;

import org.springframework.data.annotation.Id;

public class ProductInventory {
    @Id
    private String id;
    private String reference;
    private String sku;
    private String name;
    private String style;
    private String size;
    private int quantity;

    public ProductInventory(){};

    public ProductInventory(Product product, String sku, String name, String style, String size, int quantity, String reference){
        this.reference = product.getSku();
        this.sku = sku;
        this.name = product.getName();
        this.style = product.getStyle();
        this.size = size;
        this.quantity = quantity;
    };
    public String getId(){
        return id;
    }
    public String getReference(){
        return reference;
    }
    public void setReference(String reference){
        this.reference = reference;
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
    public String getStyle(){
        return style;
    }
    public void setStyle(String style){
        this.style = style;
    }
    public String getSize(){
        return size;
    }
    public void setSize(String size){
        this.size = size;
    }
    public int getQuantity(){
        return quantity;
    }
    public void setQuantity(int quantity){
        this.quantity = quantity;
    }
}
