# WHY PYTHON?
# PYTHON SYNTAX
# INTEPRETED LANGUAGE
# WEAK-TYPED LANGUAGE
# COMMUNITY

# VARIABLES
name = "Edward"
age = 30
decimal = 3.14
check = True # False
lists = [] # JS: var arr = []
dictionaries = {} # JS: var obj = {}
# print(f"Hello my name is {name} and I am {age} years old")

# print("Hello World") # console.log("Hello World")
# LOOPS

# INDENT VS 4 SPACES
# for i in range(0,26, 2):
#     print(i)

# for i in range(25, -1, -2):
#     print(i)

# count = 0
# while count < 25:
#     count += 1
#     print(f"The current count is {count}")
#     print("The current count is " + str(count))
# CONDITIONALS
# x = 0
# if x < 10:
#     print("x is less than 10")
# elif x < 25:
#     print("x is greater than 10 but less than 25")
# else:
#     print("x is greater than 25")

# FUNCTIONS

# DEFINED THE FUNCTION
def numberPrinter(number = 5):
    for i in range(0, number + 1):
        print(f"The number is {i}.")
    print("DONE")

# CALLED(EXECUTED) THE FUNCTION
# numberPrinter()
# numberPrinter(10)

# DEFAULT PARAMETERS, NAMED ARGUMENTS

def nameRepeater(name = "John", number = 5):
    for i in range(0, number):
        print(f"Hello, my name is {name}")

nameRepeater(number = 10, name =  "edward")

# 1. DEFAULT-ARGUMENTS MUST COME AFTER NON-DEFAULT ARGUMENTS
