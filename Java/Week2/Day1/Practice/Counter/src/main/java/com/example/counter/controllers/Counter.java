package com.example.counter.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpSession;

@Controller
public class Counter {
	
	@RequestMapping("/")
	public String welcome(HttpSession session) {
		if(session.getAttribute("counter")==null){
			session.setAttribute("counter", 1);
		}
		else {
			int x = (int) session.getAttribute("counter");
			session.setAttribute("counter", x+1);
		}

		return "index.jsp" ;
	}
	
	@RequestMapping("/counter")
	public String counter() {
		
		return "counter.jsp";
		}

}
