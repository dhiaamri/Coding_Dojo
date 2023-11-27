from flask import Flask ,render_template,request,session,redirect
import random
app = Flask(__name__)

app.secret_key="shhh"





 
@app.route('/')          
def index():
    if 'chosen' not in session:
        session["chosen"]=random.randint(1, 100)
       
        
    return render_template("index.html")



@app.route('/compare' ,methods=["post"])          
def compare():
    session["user_choice"]=request.form["number"]
    print("+++++++++++++++++++",session["chosen"])
    print("°°°°°°°°°°°°°°°°°°°",session["user_choice"])
    return redirect("/")





if __name__=="__main__":   
    app.run(debug=True)    

