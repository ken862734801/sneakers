package com.example.sneakers.model;
import java.util.*;

import org.springframework.data.annotation.Id;

public class User {
    @Id
    private String id;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private List<String> favorites;

    public User() {
        favorites = new ArrayList<>();
    }

    public User(String firstName, String lastName, String email, String password){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        favorites = new ArrayList<>();
    }
    public String getId(){
        return id;
    }
    public String getFirstName(){
        return firstName;
    }
    public void setFirstName(String firstName){
        this.firstName = firstName;
    }
    public String getLastName(){
        return lastName;
    }
    public void setLastName(String lastName){
        this.lastName = lastName;
    }
    public String getEmail(){
        return email;
    }
    public void setEmail(String email){
        this.email = email;
    }
    public String getPassword(){
        return password;
    }
    public void setPassword(String password){
        this.password = password;
    }
    public List<String> getFavorites() {
        return favorites;
    }
    public void addFavorite(String productId) {
        if (!favorites.contains(productId)) {
            favorites.add(productId);
        }
    }
    public void removeFavorite(String productId) {
        favorites.remove(productId);
    }
}
