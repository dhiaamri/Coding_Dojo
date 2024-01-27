package com.caresoft.clinicapp;

import java.util.ArrayList;
import java.util.Date;

public class AdminUser extends User implements HIPAACompliantUser, HIPAACompliantAdmin {
	private Integer employeeID;
    private String role;
    private ArrayList<String> securityIncidents;
    
    // TO DO: Implement a constructor that takes an ID and a role
    public AdminUser (Integer ID,String role) {
    	super();
    	this.id=ID;
    	  this.role = role;
    	    this.securityIncidents = new ArrayList<>();
    	
    }
    // TO DO: Implement HIPAACompliantUser!
    public boolean assignPin(int pin) {
		boolean ok=false;
		String  c=Integer.toString(pin);       
		if(c.length()==6) {
			ok=true;
		}
		return ok;
	}
	
	
	public boolean accessAuthorized(Integer confirmedAuthID) {
		boolean ok= (confirmedAuthID == this.id);
		if(ok==false) {
			authIncident();
		}
		return ok;
}
    // TO DO: Implement HIPAACompliantAdmin!
    
    public void newIncident(String notes) {
        String report = String.format(
            "Datetime Submitted: %s \n,  Reported By ID: %s\n Notes: %s \n", 
            new Date(), this.id, notes
        );
        securityIncidents.add(report);
    }
    public void authIncident() {
        String report = String.format(
            "Datetime Submitted: %s \n,  ID: %s\n Notes: %s \n", 
            new Date(), this.id, "AUTHORIZATION ATTEMPT FAILED FOR THIS USER"
        );
        securityIncidents.add(report);
    }
	@Override
	public ArrayList<String> reportSecurityIncidents() {
		 return securityIncidents;
	}
    
    // TO DO: Setters & Getters
}
