package com.example.demo.controller;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dao.EventData;
import com.example.demo.model.Eventdetail;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("api/famfest")
public class PublicData_controller {
	
	@Autowired
	private EventData eventData;
	
	@GetMapping("/online_events")
	public List<Eventdetail> getOnlineEvent() {
		List<Eventdetail> allData = eventData.findAll();
		List<Eventdetail> onlineList = new ArrayList<>();
		for(int i=0;i<allData.size();i++) {
			if (allData.get(i).getEventMode().equalsIgnoreCase("online") && allData.get(i).getEventMode()!=null) {
				onlineList.add(allData.get(i));
			} 
			
		}
		
		return onlineList;
		
	}
	
	@GetMapping("/offline_events")
	public List<Eventdetail> getOfflineEvent() {
		List<Eventdetail> allData = eventData.findAll();
		List<Eventdetail> offlineList = new ArrayList<>();
		for(int i=0;i<allData.size();i++) {
			if (allData.get(i).getEventMode().equalsIgnoreCase("offline") && allData.get(i).getEventMode()!=null) {
				offlineList.add(allData.get(i));
			} 
			
		}
		
		return offlineList;
		
	}

}
