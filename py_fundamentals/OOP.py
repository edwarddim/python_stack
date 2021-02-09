# OOP - Object Oriented Programming

# FOUR PILLARS OF OOP
# 1. Encapsulation
# 2. Abstraction
# 3. Inheritance
# 4. Polymorphism


# CLASSES
class ClassName:
    def __init__(self): # CONSTRUCTOR METHODS
        # DEFINING ATTRIBUTES
        self.something = "something"
    # ALL OTHER METHODS
    def doSomething(self):
        print("do something")


# DEFINE
class Dog: # SINGULAR AND UPPER CAMEL CASE
    def __init__(self, nameParam, legsParam, eyesParam, furParam): # CONSTRUCTOR METHOD
        # ATTRIBUTES (things that make up somethings)
        print("YOU ARE CREATING A NEW DOG")
        self.name = nameParam
        self.legs = legsParam
        self.eyes = eyesParam
        self.fur = furParam
    # METHODS (things you can do with attributes, actions)
    def bark(self):
        print(f"Hi my name is {self.name}")
    
    def play(self):
        print(f"{self.name} played in the mud")
        self.fur = "dirty"


    def __repr__(self):
        return f" {self.name}, {self.legs}"


# INSTANTIATE
dog1 = Dog("Spot", 4, "brown", "soft")
dog1.bark()
dog1.play()
print(dog1.fur)


dog2 = Dog("Rover", 4, "black", "mangy")
dog2.bark()

dog3 = Dog("Groovy", 3, "black", "mangy")
dog3.bark()
