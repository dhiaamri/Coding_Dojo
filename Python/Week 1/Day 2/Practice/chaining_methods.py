class User :
    def __init__(self,first_name,last_name,email,age) -> None:
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.age = age
        self.is_rewards_member = False
        self.gold_card_points = 0
    
    def display_info(self):
        print(self.last_name)
        print(self.first_name)
        print(self.email)
        print(self.age)
        print(self.is_rewards_member)
        print(self.gold_card_points)
        
        return self
        
    def enroll(self):
        if(self.is_rewards_member==True):
            print("This user is already a member")
        else:
            self.is_rewards_member = True
        
        self.gold_card_points = 200
        
        return self
        
    def spend_points(self, amount):
        if (self.gold_card_points<amount):
            print(f"This user doesn't have enough points to spend, current points : {self.gold_card_points}")
        else:
            self.gold_card_points=self.gold_card_points-amount
            
        return self
        
        
        
        
        
    

dhia=User("dhia","amri","@",25)
dhia1=User("name","last","me@me.com",29)
dhia.enroll().display_info().spend_points(40)

dhia1.enroll().spend_points(50).display_info()

        