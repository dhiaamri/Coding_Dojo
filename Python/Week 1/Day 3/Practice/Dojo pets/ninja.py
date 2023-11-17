from pet import Pet,pet1

class Ninja:
    def __init__(self,first_name,last_name,treats,pet_food,pet):
        self.first_name=first_name
        self.last_name=last_name
        self.treats=treats
        self.pet_food=pet_food
        self.pet=pet
    def walk(self):
        self.pet.play()
        
    def feed(self):
        self.pet.eat()
        
    def bath(self):
        self.pet.noise()
        
    def display(self):
        print(self.pet.pet_type,self.pet.health)


Hamza = Ninja("Hamza","weti",["Run","caress"],"Salami",pet1)

Hamza.display()

Hamza.pet.eat()

Hamza.display()

