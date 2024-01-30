package com.devices.clinicapp;

public class Phone extends Device {
	

	public void makeCall(){
        System.out.println("You make a call.");
        battery -= 5;
        display();
    }

    public void playGame(){
        System.out.println("You play a game.");
        battery -= 20;
        display();
    }

    public void charge(){
        System.out.println("You charge your phone.");
        battery += 50;
        display();
    }
}
