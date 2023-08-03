package com.example.demo.model;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "Eventinfo")
public class Eventdetail {
	
	@Id
	private String id;
	@Field
	private String eventName;
	@Field
	private String eventPosterImg;
	@Field
	private String venue;
	@Field
	private String date;
	@Field
	private Long ticketPrice;
	@Field
	private String eventMode;
	@Field
	private String organizer;
	@Field
	private String details;
	@Field
	private Date creationDate;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getEventName() {
		return eventName;
	}
	public void setEventName(String eventName) {
		this.eventName = eventName;
	}
	public String getEventPosterImg() {
		return eventPosterImg;
	}
	public void setEventPosterImg(String eventPosterImg) {
		this.eventPosterImg = eventPosterImg;
	}
	public String getVenue() {
		return venue;
	}
	public void setVenue(String venue) {
		this.venue = venue;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public Long getTicketPrice() {
		return ticketPrice;
	}
	public void setTicketPrice(Long ticketPrice) {
		this.ticketPrice = ticketPrice;
	}
	public String getEventMode() {
		return eventMode;
	}
	public void setEventMode(String eventMode) {
		this.eventMode = eventMode;
	}
	public String getOrganizer() {
		return organizer;
	}
	public void setOrganizer(String organizer) {
		this.organizer = organizer;
	}
	public String getDetails() {
		return details;
	}
	public void setDetails(String details) {
		this.details = details;
	}
	public Date getCreationDate() {
		return creationDate;
	}
	public void setCreationDate(Date creationDate) {
		this.creationDate = creationDate;
	}
	public Eventdetail(String id, String eventName, String eventPosterImg, String venue, String date, Long ticketPrice,
			String eventMode, String organizer, String details, Date creationDate) {
		super();
		this.id = id;
		this.eventName = eventName;
		this.eventPosterImg = eventPosterImg;
		this.venue = venue;
		this.date = date;
		this.ticketPrice = ticketPrice;
		this.eventMode = eventMode;
		this.organizer = organizer;
		this.details = details;
		this.creationDate = creationDate;
	}
	
	
	public Eventdetail() {
		// TODO Auto-generated constructor stub
	}
	

	
	
	
}
