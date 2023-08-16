package com.example.demo.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dao.EventData;
import com.example.demo.dao.LoginData;
import com.example.demo.dao.TransactionData;
import com.example.demo.dto.PaymentResponse;
import com.example.demo.dto.PdfResponse;
import com.example.demo.model.Eventdetail;
import com.example.demo.model.OrderFormat;
import com.example.demo.model.TransactionDetails;
import com.example.demo.optimizationServices.PdfService;
import com.example.demo.optimizationServices.TransactionHistory;
import com.example.demo.services.PaymentGatewayService;
import com.razorpay.Order;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("api/payment")
public class Payment_controller {

    @Autowired
    EventData eventData;

    @Autowired
    LoginData loginData;

    @Autowired
    PaymentGatewayService paymentGatewayService;

    @Autowired
    TransactionData transactionData;

    @Autowired
    TransactionHistory transactionHistory;

    @Autowired
    private PdfService pdfService;

    @PostMapping("/Transaction")
    public OrderFormat TransactionProcess(@RequestBody PaymentResponse paymentResponse) throws Exception {
        List<Eventdetail> eventdetails = eventData.findAll();

        if (loginData.existsById(paymentResponse.getUserId())) {
            for (Eventdetail details : eventdetails) {
                if (details.getEventId().equalsIgnoreCase(paymentResponse.getEventId())) {
                    PaymentGatewayService paymentGatewayService = new PaymentGatewayService();
                    OrderFormat oo = paymentGatewayService
                            .createTransaction(details.getPrice() * paymentResponse.getFrequency());
                    return oo;
                }
            }

        }
        return null;

    }

    @PostMapping("/PaymentDetails")
    public String SavePaymentDetails(@RequestBody TransactionDetails transactionDetails) {
        transactionData.save(transactionDetails);

        return "Transaction details saved successfully";
    }

    @GetMapping("/PayHistory/{id}")
    public List<TransactionDetails> GetTransacacionHistory(@PathVariable String id) {

        List<TransactionDetails> data = transactionHistory.getTransactionDetails(id);

        return data;
    }

    @PostMapping(value = "/GetTicket", produces = MediaType.APPLICATION_PDF_VALUE)
    public byte[] downloadTicket(@RequestBody PdfResponse pdfResponse) throws IOException {

        return pdfService.getTicket(pdfResponse.getUserId(), pdfResponse.gettId());

    }

}
