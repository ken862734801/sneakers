package com.example.sneakers.model;

// import java.util.ArrayList;
// import java.util.List;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class Customer {
    private String firstName;
    private String lastName;
    private String emailAddress;
    private String hashedPassword;
    // private List<String> favoriteItems;
    // private List<String> shoppingCart;

    private static final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public Customer (String firstName, String lastName, String emailAddress, String password){
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailAddress = emailAddress;
        this.hashedPassword = hashPassword(password);
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
    public String getEmailAddress(){
        return emailAddress;
    }
    public void setEmailAddress(String emailAddress){
        this.emailAddress = emailAddress;
    }
    public String getHashedPassword(){
        return hashedPassword;
    }
    public boolean checkPassword(String password){
        return passwordEncoder.matches(password, hashedPassword);
    }
    private String hashPassword(String password){
        return passwordEncoder.encode(password);
    }
}
