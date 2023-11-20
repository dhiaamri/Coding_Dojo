from flask import Flask,render_template
 # Import Flask to allow us to create our app
app = Flask(__name__) 
   # Create a new instance of the Flask class called "app"






@app.route('/')     
def simple():
    return render_template("simple.html")

    
@app.route('/<int:x>/')     
def by_four(x):
    template=""
    status=0
    for i in range(0,x):
        if (status==0):
            for j in range(0,4):
                template+="<div style='background-color: black;'></div>" + "<div style='background-color: wheat;'></div>"
            status=1
            
        else:
            for j in range(0,4):
                template+="<div style='background-color: wheat;'></div>" + "<div style='background-color: black;'></div>" 
            status=0
            

    

    return render_template("by_four.html",template=template)











if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)    # Run the app in debug mode.

