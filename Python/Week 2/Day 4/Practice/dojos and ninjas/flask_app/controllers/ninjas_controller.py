from flask_app import app
from flask import render_template, redirect, request,session

from flask_app.models.ninja import Ninja


@app.route("/create/ninja", methods=["post"])
def create_ninja():
    ninja_dict = {
        **request.form
    }
    Ninja.save(ninja_dict)
    session["id"]=ninja_dict["dojo_id"]
    return redirect("/show")



@app.route("/show")
def show_ninjas():
    data={"id" : session["id"]}
    ninjas=Ninja.get_all(data)
    return render_template("show",ninjas=ninjas)

