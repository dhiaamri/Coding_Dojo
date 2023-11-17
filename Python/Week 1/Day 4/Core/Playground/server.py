from flask import Flask, render_template
app = Flask(__name__)   






@app.route('/play/<int:x>') 
def play(x):
    return render_template("index.html",x=x)












if __name__=="__main__":   
    app.run(debug=True)    
