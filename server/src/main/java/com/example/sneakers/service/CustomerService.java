package com.example.sneakers.service;

import com.example.sneakers.model.Customer;
import com.example.sneakers.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerService {
    
    @Autowired
    private CustomerRepository customerRepository;

    public Customer saveCustomer(Customer customer) {
        return customerRepository.save(customer);
    }

    public Customer findCustomerByEmail(String emailAddress){
        return customerRepository.findByEmail(emailAddress);
    }

    public List<Customer> getAllCustomers(){
        return customerRepository.findAll();
    }
    
    public boolean checkPassword(String emailAddress, String password){
        Customer customer = customerRepository.findByEmail(emailAddress);
        if (customer == null){
            return false;
        }
        return customer.checkPassword(password);
    }

}
