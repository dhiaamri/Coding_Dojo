class BankAccount:
    def __init__(self, balance=0,interest=0.01,) -> None:
        self.balance = balance
        self.interst = interest
    def deposit(self, amount):
        self.balance+=amount
    
    def withdraw(self, amount):
        if(self.balance<amount):
            print("You don't have enough balance")
            self.balance-=5
        else:
            self.balance-=amount
    