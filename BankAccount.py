class BankAccount:
    def __init__(self, int_rate, balance = 0):
        self.int_rate = int_rate
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount
    def withdraw(self, amount):
        if self.balance < amount:
            print("Insufficient funds: Charging a $5 fee")
            self.balance -= 5
        else:
            self.balance -= amount
    def display_account_info(self):
        print(f"Balance: ${self.balance}")
    def yield_interest(self):
        self.balance += self.balance * self.int_rate

account1 = BankAccount(0.05)
account2 = BankAccount(0.1, 500)

account1.deposit(300)
account1.withdraw(100)
account1.yield_interest()
account1.display_account_info()