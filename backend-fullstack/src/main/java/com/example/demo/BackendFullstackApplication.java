package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

@SpringBootApplication
public class BackendFullstackApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendFullstackApplication.class, args);
		
		UsernamePasswordAuthenticationToken data = new UsernamePasswordAuthenticationToken("Don", "12345");
		System.out.println(data);
	}

}
