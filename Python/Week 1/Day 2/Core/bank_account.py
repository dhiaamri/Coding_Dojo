class BankAccount:
    def __init__(self, balance=0,interest=0.01,) -> None:
        self.balance = balance
        self.interest = interest
    def deposit(self, amount):
        self.balance+=amount
        return self
    
    def withdraw(self, amount):
        if(self.balance<amount):
            print("You don't have enough balance")
            self.balance-=5
        else:
            self.balance-=amount
        return self
    def display_account_info(self):
        print(f"Balance : {self.balance} ")
        return self
        
    def yield_interest(self):
        if (self.balance>=0):
            self.balance=self.balance*self.interest
        return self

        
        
dhia = BankAccount(15)

dhia.display_account_info()
dhia.deposit(5)
dhia.display_account_info().withdraw(5).display_account_info()
# dhia.withdraw(10)
# dhia.display_account_info()
# dhia.yield_interest()
# dhia.display_account_info()

