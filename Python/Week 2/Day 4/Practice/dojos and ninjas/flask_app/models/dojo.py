from flask_app.config.mysqlconnection import connectToMySQL



DATABASE = "dojos_and_ninjas_schema"

class Dojo:
    def __init__(self, data):
        self.id = data["id"]
        self.first_name = data["name"]
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]

        

    
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM dojos;"
        results = connectToMySQL(DATABASE).query_db(query)
        dojos = []
        for row in results:
            one_dojo = cls(row)
            dojos.append(one_dojo)

        return dojos