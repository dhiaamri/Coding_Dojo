package com.dhia.fruity.models;

public class FruityModel {
	 private String name;
	    private double price;
	    // CONSTRUCTOR
	    public FruityModel(String name, double price) {
	        this.name = name;
	        this.price = price;
	    

}
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		public double getPrice() {
			return price;
		}
		public void setPrice(double price) {
			this.price = price;
		}
}