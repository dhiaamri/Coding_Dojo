package com.dhia.fruity.controllers;

import java.util.ArrayList;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.dhia.fruity.models.FruityModel;

@Controller
public class FruityController {

	   @GetMapping("/")
	    public String index(Model model) {
	        
	        ArrayList<FruityModel> fruits = new ArrayList<FruityModel>();
	        fruits.add(new FruityModel("Kiwi", 1.5));
	        fruits.add(new FruityModel("Mango", 2.0));
	        fruits.add(new FruityModel("Goji Berries", 4.0));
	        fruits.add(new FruityModel("Guava", .75));
	        
	        // Add fruits your view model here
	        
	       model.addAttribute("fruits",fruits);
	        
	        return "index.jsp"; 
	    }
}
