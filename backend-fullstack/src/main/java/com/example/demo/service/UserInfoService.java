package com.example.demo.service;

import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.example.demo.dao.LoginData;
import com.example.demo.model.userinfo;

public class UserInfoService implements UserDetails{
	
//	private String name;
	private String username;
	private String password;
	private List<GrantedAuthority> rolelist;
//	private List<SimpleGrantedAuthority> role;
	
	
	

public UserInfoService(userinfo data) {
	// TODO Auto-generated constructor stub
//	this.name = data.getName();
	username  = data.getUsername();
	password = data.getPassword();
	rolelist = Arrays.stream(data.getRole().split(",")).map(SimpleGrantedAuthority::new).collect(Collectors.toList());
//	this.role = data.getRole();
}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		// TODO Auto-generated method stub
		return rolelist;
	}

	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return password;
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return username;
	}

	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return true;
	}

}
