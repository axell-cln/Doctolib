package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class FullStackApplication {

    public static void main(String[] args) {
        SpringApplication.run(FullStackApplication.class, args);
    }

    @Configuration
    @EnableWebMvc
    class WebConfig implements WebMvcConfigurer {

        @Override
        @CrossOrigin(origins = "http://localhost:4200/*")
        public void addCorsMappings(CorsRegistry registry) {
            registry.addMapping("/**")
                .allowedOrigins("http://localhost:4200/*")
                .allowedMethods("GET", "POST", "PUT", "DELETE", "PATCH");
			registry.addMapping("/**").allowedOrigins("http://localhost:4200/*").allowedMethods("GET", "POST", "PUT", "DELETE", "PATCH").allowedHeaders("access-control-allow-origin");
        }

    }
}
