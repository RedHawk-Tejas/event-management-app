package com.example.demo.dto;

public class PaymentResponse {

    private String userId;

    private String eventId;

    public PaymentResponse() {

    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getEventId() {
        return eventId;
    }

    public void setEventId(String eventId) {
        this.eventId = eventId;
    }

}
