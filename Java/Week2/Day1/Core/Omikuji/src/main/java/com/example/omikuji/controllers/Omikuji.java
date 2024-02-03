package com.example.omikuji.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import jakarta.servlet.http.HttpSession;

@Controller
public class Omikuji {
	@GetMapping("/")
	public String form() {
		
		return "index.jsp";
	}
	
	@PostMapping("/process")
	public String process(HttpSession session,@RequestParam(value="num") Integer num,@RequestParam(value="city") String city,@RequestParam(value="person") String person,@RequestParam(value="hobby") String hobby,@RequestParam(value="thing") String thing,@RequestParam(value="nice") String nice ) {
		
		String sentence="In "+num+"years, you will be living in "+city+" with "+person+ " as your roommate "+hobby + "for a living. the next time you see a "+thing+", you will have good luck,"+ nice;
		session.setAttribute("sentence", sentence);
		System.out.println(sentence);
		return "redirect:/omikuji/show";
	}
	
	@GetMapping("/omikuji/show")
	public String show() {

		return "omikuji.jsp";
	}

}
