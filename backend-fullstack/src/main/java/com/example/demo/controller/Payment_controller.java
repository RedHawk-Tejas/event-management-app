package com.example.demo.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import javax.naming.NameNotFoundException;

import java.util.Optional;
import java.util.Set;

import org.apache.pdfbox.pdmodel.graphics.image.PDImageXObject;
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
import com.example.demo.model.userinfo;
import com.example.demo.optimizationServices.PdfService;
import com.example.demo.optimizationServices.TransactionHistory;
import com.example.demo.services.PaymentGatewayService;
import com.google.zxing.WriterException;
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
    // @PostMapping("/GetTicket")
    public byte[] downloadTicket(@RequestBody PdfResponse pdfResponse)
            throws IOException, NameNotFoundException, WriterException {

        List<Eventdetail> eventList = eventData.findAll();
        List<TransactionDetails> list2 = transactionData.findAll();
        Optional<userinfo> userList = loginData.findById(pdfResponse.getUserId());

        Map<String, String> map = new HashMap<String, String>();

        for (TransactionDetails list : list2) {
            for (Eventdetail listevent : eventList) {
                if (list.getUserId().equalsIgnoreCase(pdfResponse.getUserId())
                        && list.getRazorpay_payment_id().equalsIgnoreCase(pdfResponse.gettId())) {
                    map.put("Event_ID", listevent.getEventId());
                    map.put("Event_Name", listevent.getEventName());
                    map.put("Location", listevent.getEventVenue());
                    map.put("Amount", Long.toString(list.getAmount()));
                    map.put("Order_Id", list.getRazorpay_order_id());
                    map.put("Name", userList.get().getName());
                    map.put("Count", Long.toString(list.getTickets()));

                }

            }
        }

        String Name = "";
        String Event_ID = "";
        String Event_Name = "";
        String Location = "";
        String Amount = "";
        String Order_Id = "";
        String Count = "";

        for (Map.Entry<String, String> vall : map.entrySet()) {
            if (vall.getKey().equalsIgnoreCase("Order_Id")) {
                Order_Id = Order_Id + vall.getValue();
            }
            if (vall.getKey().equalsIgnoreCase("Amount")) {
                Amount = Amount + vall.getValue();
            }
            if (vall.getKey().equalsIgnoreCase("Event_ID")) {
                Event_ID = Event_ID + vall.getValue();
            }
            if (vall.getKey().equalsIgnoreCase("Location")) {
                Location = Location + vall.getValue();
            }
            if (vall.getKey().equalsIgnoreCase("Event_Name")) {
                Event_Name = Event_Name + vall.getValue();
            }
            if (vall.getKey().equalsIgnoreCase("Name")) {
                Name = Name + vall.getValue();
            }
            if (vall.getKey().equalsIgnoreCase("Count")) {
                Count = Count + vall.getValue();
            }

        }
        // return pdfService.getTicket(map);
        return pdfService.getTicket(Name, Amount, Location, Event_ID, Event_Name,
                Order_Id, Count);
        // return map;

    }

}
