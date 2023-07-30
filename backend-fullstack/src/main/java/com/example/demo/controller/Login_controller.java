package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
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

@RestController
@RequestMapping("api/authentication")
public class Login_controller {

	@Autowired
	LoginData info;
	
	@Autowired
	PasswordEncoder encoder;
	
	
	@GetMapping("/test")
	public String test() {
		
		return "heloo";
	}
	
	@PostMapping("/register")
	public String register(@RequestBody userinfo infor) {
	
	infor.setPassword(encoder.encode(infor.getPassword()));
	
	info.save(infor);
	
	return "User Created Succesfully";
		
		
	}
	
	@PostMapping("/validate")
	public String LoginToken(@RequestBody userinfo infoo) {
		UsernamePasswordAuthenticationToken data = new UsernamePasswordAuthenticationToken(infoo.getUsername(), infoo.getPassword());
		if (data.isAuthenticated()) {
			return new JwtService().gettoken(infoo.getUsername());
			
		} else {
			throw new UsernameNotFoundException("Invalid User");
		}
		//return new JwtService().gettoken(infoo.getUsername());
//		return infoo.getUsername();
	}

}
