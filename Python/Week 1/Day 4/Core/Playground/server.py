from flask import Flask,render_template
app = Flask(__name__)   





@app.route('/play/<int:number>/<string:color>')
def repeat_hello(number, color):
    return render_template("index.html", number=number, color=color)









if __name__=="__main__":   
    app.run(debug=True)    
