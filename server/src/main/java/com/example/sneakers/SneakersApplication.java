package com.example.sneakers;

import com.example.sneakers.model.Product;
import com.example.sneakers.service.ProductService;
import org.springframework.context.annotation.Bean;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.beans.factory.annotation.Autowired;

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

            Product test = new Product("First Product");
			Product test2 = new Product("Second Product");
            productService.addProduct(test);
			productService.addProduct(test2);

        };
    }

}
