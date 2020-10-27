
class BankAccount:
    def __init__(self):
        self.amount = 100

class Something:
    def __init__(self):
        self.something = "Something"

class User:
    def __init__(self):
        self.name = "John"
        self.account = BankAccount()
        self.something = Something()