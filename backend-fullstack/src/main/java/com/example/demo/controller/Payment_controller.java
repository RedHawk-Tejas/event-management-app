package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dao.EventData;
import com.example.demo.dto.PaymentResponse;
import com.example.demo.model.Eventdetail;
import com.example.demo.model.OrderFormat;
import com.example.demo.services.PaymentGatewayService;
import com.razorpay.Order;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("api/payment")
public class Payment_controller {

    @Autowired
    EventData eventData;

    @Autowired
    PaymentGatewayService paymentGatewayService;

    @PostMapping("/Transaction")
    public OrderFormat TransactionProcess(@RequestBody PaymentResponse paymentResponse) throws Exception {
        List<Eventdetail> eventdetails = eventData.findAll();

        if (eventData.existsByUserId(paymentResponse.getUserId())) {
            for (Eventdetail details : eventdetails) {
                if (details.getEventId().equalsIgnoreCase(paymentResponse.getEventId())) {
                    // return details.getPrice();
                    PaymentGatewayService paymentGatewayService = new PaymentGatewayService();
                    OrderFormat oo = paymentGatewayService.createTransaction(details.getPrice());
                    return oo;

                }
            }

        }

        return null;

    }

}
