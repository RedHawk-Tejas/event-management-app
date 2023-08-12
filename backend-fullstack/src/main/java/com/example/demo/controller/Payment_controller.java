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
    public OrderFormat TransactionProcess(@RequestBody PaymentResponse paymentResponse) {
        List<Eventdetail> eventdetails = eventData.findAll();
        List<Object> ll = new ArrayList<>();
        OrderFormat orderMakde = null;
        for (int i = 0; i < eventdetails.size(); i++) {
            if (eventdetails.get(i).getEventId().equalsIgnoreCase(paymentResponse.getEventId())
                    && eventdetails.get(i).getUserId().equalsIgnoreCase(paymentResponse.getUserId())) {
                PaymentGatewayService paymentGatewayService = new PaymentGatewayService(
                        eventdetails.get(i).getEventName(), eventdetails.get(i).getPrice(),
                        eventdetails.get(i).getUserId());

                paymentGatewayService.setEventPrice(eventdetails.get(i).getPrice());

                OrderFormat order = paymentGatewayService.createTransaction(eventdetails.get(i).getPrice());
                orderMakde = order;

                // ll.add(paymentGatewayService);
                // ll.add(order.toString());
            }

        }

        PaymentGatewayService pay = new PaymentGatewayService();

        return orderMakde;
    }

}
