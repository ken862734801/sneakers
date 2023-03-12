package com.example.sneakers.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.sneakers.model.Customer;

public interface CustomerRepository extends MongoRepository<Customer, String>{
    Customer findByEmail(String emailAddress);
    
}
