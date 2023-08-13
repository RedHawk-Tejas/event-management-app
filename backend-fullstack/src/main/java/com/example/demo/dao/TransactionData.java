package com.example.demo.dao;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demo.model.TransactionDetails;

public interface TransactionData extends MongoRepository<TransactionDetails, String> {

}
