package com.example.demo.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.example.demo.dao.LoginData;
import com.example.demo.model.userinfo;
import com.example.demo.service.JwtService;
import com.example.demo.service.UserService;

@CrossOrigin(origins = "http://localhost:3000/")
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

	@PostMapping("/login")
	public ResponseEntity<HashMap<Object, Object>> LoginToken(@RequestBody userinfo infoo) {
		List<Object> list = new ArrayList<>();
		HashMap<Object, Object> map = new HashMap<>();
		UserDetails loadUserByUsername = se.loadUserByUsername(infoo.getEmail());
		Optional<userinfo> userdata = info.findByEmail(infoo.getEmail());
		if (loadUserByUsername.getUsername().length() > 0 && loadUserByUsername.isAccountNonExpired()
				&& loadUserByUsername.isAccountNonLocked() && loadUserByUsername.isCredentialsNonExpired()) {
			if (encoder.matches(infoo.getPassword(), loadUserByUsername.getPassword())) {
				list.add(userdata.get().getId());
				list.add(userdata.get().getName());
				list.add(userdata.get().getRole());
				map.put("id", userdata.get().getId());
				map.put("name", userdata.get().getName());
				map.put("role", userdata.get().getRole());
				map.put("token", new JwtService().gettoken(infoo.getEmail()));
				
				//list.add(userdata.)
				//list.add(infoo.getName());
				//list.add();
				return ResponseEntity.ok(map);
			
			}
			else {
				//list.add("something went wrong");
				//map.put("error", "Something went wrong");
				throw  new UsernameNotFoundException("Incorrect password"); 
			}
		} else {
			throw new UsernameNotFoundException("Invalid User");
		}

	}

}
