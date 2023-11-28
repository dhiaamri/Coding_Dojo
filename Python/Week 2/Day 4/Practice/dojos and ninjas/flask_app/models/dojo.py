from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE



class Dojo:
    def __init__(self, data):
        self.id = data["id"]
        self.name = data["name"]
        self.created_at = data["created_att"]
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
    
    @classmethod
    def save(cls, data):
        query = """
                    INSERT INTO dojos(name)
                    VALUES (%(name)s);
                """

        result = connectToMySQL(DATABASE).query_db(query, data)
        # print(result)
        return result
