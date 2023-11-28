from flask_app import app
from flask import render_template
from flask_app.controllers import dojos_controller,ninjas_controller
 # Import Flask to allow us to create our app
   # Create a new instance of the Flask class called "app"

@app.route("/")
def index():
    return render_template("dojo.html")



if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)    # Run the app in debug mode.

