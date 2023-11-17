class Pet:
    def __init__(self,name,pet_type,tricks):
        self.name=name
        self.pet_type=pet_type
        self.tricks=tricks
        self.health=100
        self.energy=100
    
    def sleep(self):
        self.energy+=25
    
    def eat(self):
        self.energy+=5
        self.health+=10
    
    def play(self):
        self.health+=5
        
    def noise(self):
        if(self.pet_type=="dog"):
            print("Woof!")
        elif(self.pet_type=="cat"):
            print("Meow !")
        else:
            print("Haaa !")
    
    def display_info(self):
        print()
        
        

pet1 = Pet("Luffy","Dog",["Sit","Roll over"])