import java.util.Date;
public class AlfredQuotes {
    
    public String basicGreeting() {
        // You do not need to code here, this is an example method
        return "Hello, lovely to see you. How are you?";
    }
    
    public String guestGreeting(String name) {
        // YOUR CODE HERE
        return "Greetings "+name;
    }
    
    public String dateAnnouncement() {
        // YOUR CODE HERE
        Date currentDate= new Date();
        return "today is "+currentDate;
    }
    
    public String respondBeforeAlexis(String conversation) {
        int alexis=conversation.indexOf("Alexis");
        int alfred=conversation.indexOf("Alfred");

        if(alexis>=0){
            return "Right away, sir. She certainly isn't sophisticated enough for that." ;
        }
        if(alfred>0){
            return "At your service. As you wish, naturally.";
        }
        return "Right. And with that I shall retire.";
    }
    
	// NINJA BONUS
	// See the specs to overload the guestGreeting method
        // SENSEI BONUS
        // Write your own AlfredQuote method using any of the String methods you have learned!
}