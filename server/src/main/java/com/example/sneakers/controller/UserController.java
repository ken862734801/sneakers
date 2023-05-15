package com.example.sneakers.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import com.example.sneakers.model.*;
import com.example.sneakers.service.*;
import org.springframework.web.bind.annotation.*;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import java.security.Key;


import java.util.HashMap;
import java.util.Map;
import java.util.List;
import java.util.Date;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/users")
public class UserController {
    
    @Autowired
    private UserService userService;

    private int jwtExpirationInMs = 600000;

    @PostMapping("/signup")
    public ResponseEntity<Map<String, String>> signupUser(@RequestBody User user) {
        userService.signupUser(user.getFirstName(), user.getLastName(), user.getEmail(), user.getPassword());
        Map<String, String> response = new HashMap<>();
        response.put("message", "User registered successfully");
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }
    @PostMapping("/login")
    public ResponseEntity<Map<String, String>> loginUser(@RequestBody User user) {
        User authenticatedUser = userService.loginUser(user.getEmail(), user.getPassword());

        Key signingKey = Keys.secretKeyFor(SignatureAlgorithm.HS256);

        // Generate JWT token
        String token = Jwts.builder()
                .setSubject(authenticatedUser.getEmail())
                .setIssuedAt(new Date())
                .setExpiration(new Date(new Date().getTime() + jwtExpirationInMs))
                .signWith(signingKey)
                .compact();

        Map<String, String> response = new HashMap<>();
        response.put("token", token);
        response.put("id", authenticatedUser.getId());
        response.put("firstName", authenticatedUser.getFirstName());
        response.put("lastName", authenticatedUser.getLastName());
        response.put("email", authenticatedUser.getEmail());
        response.put("favorites", String.join(",", authenticatedUser.getFavorites())); // Convert favorites list to a comma-separated string
        return ResponseEntity.ok(response);
    }
    
    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userService.getAllUsers();
        return ResponseEntity.ok(users);
    }

    @PutMapping("/{userId}/favorites/add")
    public void addFavoriteProduct(@PathVariable String userId, @RequestParam String productId) {
        userService.addFavoriteProduct(userId, productId);
    }

    @PutMapping("/{userId}/favorites/remove")
    public void removeFavoriteProduct(@PathVariable String userId, @RequestParam String productId) {
        userService.removeFavoriteProduct(userId, productId);
    }
}
