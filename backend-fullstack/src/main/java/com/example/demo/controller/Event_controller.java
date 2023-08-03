package com.example.demo.controller;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dao.EventData;
import com.example.demo.model.Eventdetail;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("api/Event-Management")
public class Event_controller {
	
	@Autowired
	private EventData info;
	
	@PostMapping("/Event-info")
	public String AddEvent(@RequestBody Eventdetail details) {
		
		details.setCreationDate(new Date());
		info.save(details);
		return "Event added";
	}

}
