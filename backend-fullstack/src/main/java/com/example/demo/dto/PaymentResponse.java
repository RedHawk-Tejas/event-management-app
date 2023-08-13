package com.example.demo.dto;

public class PaymentResponse {

    private String userId;

    private String eventId;

    public PaymentResponse() {

    }

    public String getUserId() {
        return this.userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getEventId() {
        return this.eventId;
    }

    public void setEventId(String eventId) {
        this.eventId = eventId;
    }

}
