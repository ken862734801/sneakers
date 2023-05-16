package com.example.sneakers.service;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.example.sneakers.model.User;
import com.example.sneakers.repository.UserRepository;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    public User signupUser(String firstName, String lastName, String email, String password){
        if(userRepository.findByEmail(email).size() > 0){
            throw new RuntimeException("User with the given email already exists!");
        }

        User user = new User(firstName, lastName, email, passwordEncoder.encode(password));
        return userRepository.save(user);
    }

    public User loginUser(String email, String password){

        User user = userRepository.findByEmail(email)
                .stream()
                .findFirst()
                .orElseThrow(() -> new RuntimeException("User not found!"));

        if (!passwordEncoder.matches(password, user.getPassword())){
            throw new RuntimeException("Invalid password");
        }

        return user;
    }

    public List<User> getAllUsers(){
        return userRepository.findAll();
    }

    public Optional<User> getUserById(String userId) {
        return userRepository.findById(userId);
    }

    public void addFavoriteProduct(String userId, String productId) {
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        user.addFavorite(productId);
        userRepository.save(user);
    }

    public void removeFavoriteProduct(String userId, String productId) {
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        user.removeFavorite(productId);
        userRepository.save(user);
    }
}
