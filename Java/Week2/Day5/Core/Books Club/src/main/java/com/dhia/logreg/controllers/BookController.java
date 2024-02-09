package com.dhia.logreg.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.dhia.logreg.models.Book;
import com.dhia.logreg.models.Publisher;
import com.dhia.logreg.services.BookService;
import com.dhia.logreg.services.PublisherService;

import jakarta.validation.Valid;


@Controller
@RequestMapping("/books")
public class BookController {

	// DI
	@Autowired
	private BookService bookServ;
	@Autowired
	private PublisherService pubServ;
	
	// display all books
	@GetMapping("")
	public String home(@ModelAttribute("book") Book book, Model model) {
		// retrieve all books from db
		List<Book> allBooks = bookServ.allBooks();
		model.addAttribute("allBooks",allBooks);
		// retrieve all publishers from db
		List<Publisher> allPublishers = pubServ.allPubs();
		model.addAttribute("publishers", allPublishers);
		return "home.jsp";
	}

	// Process Book
	@PostMapping("/processBook")
	public String createBook(@Valid @ModelAttribute("book") Book book,
			BindingResult result,
			Model model) {
		if (result.hasErrors()) {
			// retrieve all books from db
			List<Book> allBooks = bookServ.allBooks();
			model.addAttribute("allBooks",allBooks);
			// retrieve all publishers from db
			List<Publisher> allPublishers = pubServ.allPubs();
			model.addAttribute("publishers", allPublishers);
			return "home.jsp";
		}else {
			Book newBook = bookServ.createBook(book);
			return "redirect:/books";
		}
		
	}
	
	@DeleteMapping("/{id}")
	public String deleteBook(@PathVariable("id") Long id) {
		
		bookServ.deleteBook(id);
		
		return "redirect:/books";
	}
	
	
	// Display Edit Form
	
	@GetMapping("/edit/{id}")
	public String getMethodName(Model model, @PathVariable("id") Long id) {
		// find the book by the id
		Book selectedBook = bookServ.findBookById(id);
		model.addAttribute("book",selectedBook);
		return "edit.jsp";
	}
	
	@PutMapping("/{id}")
	public String editBook(@Valid @ModelAttribute("book") Book book, BindingResult result) {
		
		if(result.hasErrors()) {
			return "edit.jsp";
		}else {
			// if there are no errors save the updated book to DB
			bookServ.updateBook(book);
		
			return "redirect:/books";
		}
	}
	
	
	

}