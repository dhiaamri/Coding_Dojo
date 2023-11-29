from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE
from flask_app.models import dojo



class Ninja:
    def __init__(self, data):
        self.id = data["id"]
        self.first_name=data["first_name"]
        self.last_name=data["last_name"]
        self.age=data["age"]
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]
        self.dojo_id = data["dojo_id"]


    @classmethod
    def get_all(cls,data):
        query = "SELECT * FROM ninjas WHERE dojo_id=%(id)s"
        results = connectToMySQL(DATABASE).query_db(query, data)
        ninjas = []
        for row in results:
            one_ninja = cls(row)
            ninjas.append(one_ninja)

        return ninjas
    



    @classmethod
    def get_all_for_user(cls, data):
        query= """
               SELECT *
               FROM ninjas n
               JOIN dojos d ON n.dojo_id=d.id
               WHERE d.id = %(dojo_id)s;
               """
        results = connectToMySQL(DATABASE).query_db(query, data)
        ninjas =[]
        dojo_instance= dojo.Dojo(results[0])
        for result in results:
            print(result)
            one_ninja = cls(result)
            one_ninja.enrolled_dojo = dojo_instance
            ninjas.append(one_ninja)
        return ninjas





    @classmethod
    def save(cls, data):
        query = """
                    INSERT INTO ninjas(first_name,last_name,age,dojo_id)
                    VALUES (%(first_name)s,%(last_name)s,%(age)s,%(dojo_id)s);
                """

        result = connectToMySQL(DATABASE).query_db(query, data)
        # print(result)
        return result