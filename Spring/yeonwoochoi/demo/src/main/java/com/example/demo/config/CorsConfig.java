package com.example.demo.config;


import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedMethods(
                        "http://127.0.0.1:8080",
                        "http://localhost:8080",
                        "http://192.168.20.3:8080",
                        "http://localhost:3000",
                        "http://localhost:3001", // vue 게시판
                        "http://localhost:3004", // react로 만든 게시판
                        "http://localhost:3008",
                        "http://localhost:3009",
                        "http://localhost:3010",
                        "http://localhost:3012"
                )
                .allowedMethods("GET", "POST", "PUT", "DELETE");
    }
}