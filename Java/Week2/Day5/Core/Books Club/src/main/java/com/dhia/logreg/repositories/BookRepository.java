package com.dhia.logreg.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.dhia.logreg.models.Book;

public interface BookRepository extends CrudRepository<Book, Long> {

	// Find ALL BOOKS
	List<Book> findAll();
}