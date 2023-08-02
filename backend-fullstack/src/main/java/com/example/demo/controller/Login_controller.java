package com.example.demo.controller;

import java.util.Date;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.dao.LoginData;
import com.example.demo.model.userinfo;
import com.example.demo.service.JwtService;
import com.example.demo.service.UserService;

@RestController
@RequestMapping("api/authentication")
public class Login_controller {

	@Autowired
	LoginData info;
	
	@Autowired
	PasswordEncoder encoder;
	
	@Autowired
	UserService se;

	
	@GetMapping("/test")
	public String test() {
		
		return "heloo";
	}
	
	@PostMapping("/register")
	public String register(@RequestBody userinfo infor) {
		
	infor.setDate(new Date());
	infor.setId((UUID.randomUUID().toString().split("-")[0]));
	infor.setPassword(encoder.encode(infor.getPassword()));
	
	info.save(infor);
	
	return "User Created Succesfully";
		
		
	}
	
	@PostMapping("/validate")
	public String LoginToken(@RequestBody userinfo infoo) {
//		UsernamePasswordAuthenticationToken data = new UsernamePasswordAuthenticationToken(infoo.getUsername(), infoo.getPassword());
//		UsernamePasswordAuthenticationToken data1 = new UsernamePasswordAuthenticationToken("Tejas7107", "Tejas@29");
//		if (data1.isAuthenticated()) {
//			return new JwtService().gettoken(infoo.getUsername());
//			
//		} else {
//			//throw new UsernameNotFoundException("Invalid User");
//			
//			//return "else block running";
//			
//		}
		//return new JwtService().gettoken(infoo.getUsername());
		//return infoo.getPassword();
		 UserDetails loadUserByUsername = se.loadUserByUsername(infoo.getUsername());
//		 if (loadUserByUsername.getUsername()==infoo.getUsername()) {
//			
//		}
		 //return loadUserByUsername.getUsername();
		 if (loadUserByUsername.getUsername().length()>0&& loadUserByUsername.isAccountNonExpired()&& loadUserByUsername.isAccountNonLocked()&&loadUserByUsername.isCredentialsNonExpired()) {
			if (encoder.matches(infoo.getPassword(), loadUserByUsername.getPassword())) {
				return new JwtService().gettoken(infoo.getUsername());
			}
			else {
//				return (encoder.encode(infoo.getPassword())+" "+loadUserByUsername.getPassword());
				return "something went wrong";
			}
		}
		 else {
			throw new UsernameNotFoundException("Invalid User");
		 }
		 
		 
	}

}
