package com.dhia.logreg.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.dhia.logreg.models.Publisher;

public interface PublisherRepository extends CrudRepository<Publisher, Long> {

	// READ ALL
	List<Publisher> findAll();
}