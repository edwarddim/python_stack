# WHAT IS OOP?
# Object Oriented Programming - Programming paradigm that creates objects and has those objects interact with each other.

# CLASSES VS INSTANCES
def countByNum(num):
    for i in range(0,num):
        print(i)

# count()

# WHEN YOU ARE CREATING A CLASS, CLASS NAMES MUST BE SINGULAR AND UPPER CAMEL CASE
class Car:
    # ATTRIBUES
    def __init__(self, make, model, engine, doors):
        print("A CAR IS BEING CREATED WITH {make},{model},{engine},{doors} ")
        self.make = make
        self.model = model
        self.engine = engine
        self.doors = doors
        self.speed = 0
    # METHODS
    def accelerate(self, num):
        self.speed += num
        return self

    def deccelrate(self, num):
        self.speed -= num
        return self

    def check_speed(self):
        print(self)
        print(f"You current speed is: {self.speed}")
        return self
    

car1 = Car("Toyota", "Camry", "V4", 4)
car1.check_speed()
car1.accelerate(5).accelerate(5).accelerate(5).accelerate(5).accelerate(5)


car1.check_speed()

car2 = Car("Honda", "Civic", "V6", 2)
car2.check_speed()
