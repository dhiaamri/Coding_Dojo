from flask_app import app
from flask import render_template, redirect, request

from flask_app.models.dojo import Dojo

from flask_app.models.ninja import Ninja


@app.route(
    "/"
)  # The "@" decorator associates this route with the function immediately following
def get_all_dojos():
    all_dojos = Dojo.get_all()
    return render_template("dojo.html", dojos=all_dojos)

@app.route(
    "/dojo/ninjas/<int:id>" 
)  # The "@" decorator associates this route with the function immediately following
def get_dojo_ninjas(id):
    data={"dojo_id":id }
    all_dojo_ninjas = Ninja.get_all_for_user(data)
    print("+++++++++++++++++++++++++++++++++")
    print( all_dojo_ninjas[0].enrolled_dojo.name)
    dojo_name = all_dojo_ninjas[0].enrolled_dojo.name
    return render_template("show.html", ninjas=all_dojo_ninjas, dojo_name=dojo_name)



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