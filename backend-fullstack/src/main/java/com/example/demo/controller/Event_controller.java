package com.example.demo.controller;

import java.util.Date;
import java.util.UUID;

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
@RequestMapping("api/add_event")
public class Event_controller {
	
	@Autowired
	private EventData info;
	
	@PostMapping("/event_data")
	public String AddEvent(@RequestBody Eventdetail details) {
		
		details.setCreationDate(new Date());
		details.setEventId(UUID.randomUUID().toString().split("-")[0]);
		info.save(details);
		return details.getEventId();
	}

}
