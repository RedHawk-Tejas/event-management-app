package com.example.demo.dao;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demo.model.Eventdetail;

public interface EventData extends MongoRepository<Eventdetail, String> {

}
