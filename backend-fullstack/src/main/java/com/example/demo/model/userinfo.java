package com.example.demo.model;



import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;


//@Entity
//@Table

@Document(collection = "userinfo")
@Data
@AllArgsConstructor
@RequiredArgsConstructor
//@Document(collection = "Famfest")
public class userinfo {
	@Id
	private String id;
	@Field
	private String name;
	@Field
	private String username;
	@Field
	private String password;
	@Field
	private String role;
	
	
	
	
	
	
	
	
	

}
