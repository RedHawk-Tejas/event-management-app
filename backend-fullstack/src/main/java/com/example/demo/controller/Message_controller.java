package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dao.MessageData;
import com.example.demo.model.UserMessage;

@RestController
@RequestMapping("api/Message")
public class Message_controller {

    @Autowired
    private MessageData messageData;

    @PostMapping("/user_message")
    public String SendMessage(@RequestBody UserMessage messageBody) {

        messageData.save(messageBody);

        return "Message sent successfully";

    }
}
