package com.example.demo.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

//import com.example.demo.model.UserInformation;
import com.example.demo.model.userinfo;


public interface LoginData extends JpaRepository<userinfo, Integer>{
	
	Optional<userinfo> findByUsername(String username);

}
