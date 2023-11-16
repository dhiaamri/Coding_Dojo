from bank_account import BankAccount

class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account = BankAccount(interest=0.02, balance=0)
    
    def make_deposit(self, amount):
        self.account.deposit(amount)
        
        
    def make_deposit(self, amount):
        self.account.withdraw(amount)
        
    def display_user_balance(self):
        print(f"Balance : {self.account.display_account_info}")
        
        
        
user1=User("dhia","d@d.com")
user1.make_deposit(50)