package com.example.demo.dao;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demo.model.Eventdetail;
import com.example.demo.model.userinfo;

public interface EventData extends MongoRepository<Eventdetail, String> {
	Optional<Eventdetail> findAllByUserId(String id);
}
