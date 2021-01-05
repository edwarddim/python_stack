
# OOP
class Person:
    # ATTRIBUTES(CHARACTERISTICS)
    def __init__(self, limbs, hair_color, name, age): # CONSTRUCTOR METHODS
        self.limbs = limbs
        self.hair_color = hair_color
        self.name = name
        self.age = age
        print(f"{self.name} IS BORN")

    # METHODS(ACTIONS) RETRIEVE ATTRIBUTES OR MANIPULATE ATTRIBUTES
    def introduction(self):
        print("Hello World")
        print(f" Hello my name is {self.name} and I am {self.age} years old")
    def birthday(self):
        self.age += 1
    def accident(self):
        if self.limbs > 0:
            self.limbs -= 1
        else:
            print("Stop getting in accidents please")
    def hairColorChange(self, color):
        self.hair_color = color

# CONSTRUCTOR METHOD AND OTHER METHODS

# INSANTIATING CLASS
# user1 = Person(4, "Black", "Edward", 30) # INSTANTIATING A NEW OBJECT
# user2 = Person(4, "Blue", "John", 34) # INSTANTIATING A NEW OBJECT
# print(user1.limbs)
# print(user1.name)
# print(user1.age)
# user1.introduction()
# user2.introduction()
# print(user1.hair_color)
# user1.birthday()
# user1.hairColorChange("Red")
# print(user1.hair_color)
# print(user1.age)


# DEFAULT PARAMETERS & NAMED ARGUMENTS
class User:
    def __init__(self, name, int_rate, amount):
        self.name = name
        self.account = BankAccount(int_rate, amount)
    
    def deposit(self, amount):
        self.account.deposit(amount)

class BankAccount:
    def __init__(self, int_rate, balance):
        self.int_rate = int_rate
        self.balance = balance
    def deposit(self, amount):
        print(f"Depositing {amount} into balance")
    
    def withdraw(self, amount):
        print(f"Withdrawing {amount} from balance")

user1 = User("Edward", 0.1, 1000)
user1.deposit(400)
user1.deposit(400)
user1.deposit(400)
user1.deposit(400)