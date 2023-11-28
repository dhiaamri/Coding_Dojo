from flask_app import app
from flask import render_template, redirect, request

from flask_app.models.dojo import Dojo


@app.route(
    "/"
)  # The "@" decorator associates this route with the function immediately following
def get_all_dojos():
    all_dojos = Dojo.get_all()
    print("+++++++++++++++")
    return render_template("dojo.html", dojos=all_dojos)