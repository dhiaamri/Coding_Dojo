from flask_app import app
from flask import render_template, redirect, request,session

from flask_app.models.ninja import Ninja
from flask_app.models.dojo import Dojo


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
    dojo=Dojo.get_one(data)
    return render_template("show.html",ninjas=ninjas,dojo=dojo)

