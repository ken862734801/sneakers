package com.example.sneakers;

import com.example.sneakers.model.Product;
import com.example.sneakers.service.ProductService;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.context.annotation.Bean;
import org.springframework.core.io.ClassPathResource;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.beans.factory.annotation.Autowired;

import java.io.File;
import java.util.List;

@SpringBootApplication
public class SneakersApplication {

    @Autowired
    private MongoOperations mongoOperations;

    public static void main(String[] args) {
        SpringApplication.run(SneakersApplication.class, args);
    }

    @Bean
    public CommandLineRunner commandLineRunner(ProductService productService) {
        return args -> {

            mongoOperations.dropCollection(Product.class);

            ObjectMapper mapper = new ObjectMapper();
            File file = new ClassPathResource("products.json").getFile();
            List<Product> products = mapper.readValue(file, new TypeReference<List<Product>>(){});

            for (Product product : products) {
                productService.addProduct(product);
            }

        };
    }

}