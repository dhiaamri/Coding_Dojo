from flask_app import app
from flask import render_template, redirect, request

from flask_app.models.dojo import Dojo


@app.route(
    "/"
)  # The "@" decorator associates this route with the function immediately following
def get_all_dojos():
    all_dojos = Dojo.get_all()
    return render_template("dojo.html", dojos=all_dojos)



@app.route("/create/dojo", methods=["post"])
def create_dojo():
    dojo_dict = {
        **request.form
    }
    Dojo.save(dojo_dict)
    return redirect("/")



@app.route("/ninjas/new")
def view_all_dojos():
    all_dojos=Dojo.get_all()
    return render_template("create_ninja.html",dojos=all_dojos)