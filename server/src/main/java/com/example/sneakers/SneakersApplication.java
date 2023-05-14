package com.example.sneakers;
import com.example.sneakers.config.SecurityConfig;
import org.springframework.context.annotation.Import;

import com.example.sneakers.model.Product;
import com.example.sneakers.service.ProductService;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import com.example.sneakers.model.ProductInventory;
import com.example.sneakers.repository.ProductInventoryRepository;

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
@Import(SecurityConfig.class)
public class SneakersApplication {

    @Autowired
    private MongoOperations mongoOperations;

    @Autowired
    private ProductInventoryRepository productInventoryRepository;

    public static void main(String[] args) {
        SpringApplication.run(SneakersApplication.class, args);
    }

    @Bean
    public CommandLineRunner commandLineRunner(ProductService productService) {
        return args -> {

            mongoOperations.dropCollection(Product.class);
            mongoOperations.dropCollection(ProductInventory.class);

            ObjectMapper mapper = new ObjectMapper();
            File file = new ClassPathResource("products.json").getFile();
            List<Product> products = mapper.readValue(file, new TypeReference<List<Product>>(){});

            for (Product product : products) {
                productService.addProduct(product);

                List<String> sizes;

                if(product.getCategory().equals("Kids")){
                    sizes = List.of("3.5Y", "4Y", "4.5Y", "5Y", "5.5Y", "6Y", "6.5Y", "7Y");
                } else if (product.getCategory().equals("Women")) {
                    sizes = List.of("5", "5.5","6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5","12");
                } else {
                    sizes = List.of("6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5","12", "12.5", "13", "13.5", "14", "14.5", "15");
                }

                for(String size: sizes){
                    ProductInventory inventory = new ProductInventory(product, product.getSku() + "-" + size, product.getName(), product.getStyle(), product.getImages(), size, 100, product.getId());
                    productInventoryRepository.save(inventory);
                }
            }

        };
    }

}