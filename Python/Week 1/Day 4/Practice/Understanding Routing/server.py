from flask import Flask, render_template
app = Flask (__name__)

@app.route('/')

def hello_world():
    return 'hello world'

@app.route('/dojo')
def dojo():
    print("dojo")

@app.route('/say/<name>')
def say_name(name):
    return f"Hi {name.capitalize()}!"


@app.route('/repeat/<int:number>/<string:word>')
def repeat_hello(number, word):
    return render_template("index.html", number=number, word=word)


@app.errorhandler(404)
def page_not_found(error):
    return "Sorry, this page does not exist."


if __name__=="__main__":
    app.run(debug=True)


