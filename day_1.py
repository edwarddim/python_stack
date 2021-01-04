# PYTHON BASICS
# DATA TYPES
# variables
num = 1
doub = 2.22
check = False
check1 = True
newString = ""
stringList = []
dictionary = {
    "a" : 1
}
# F STRINGS
nameList = ["Edward", "John", "Steve"]
age = 31
# string = f"Hello my name {name} is and I am {age} years old"
# print(string)
# LOOPS

# # USE INDEX TO MANIPULATE THE LIST
# for i in range(0, len(nameList)):
#     print(nameList[i])
# # CAN'T CHANGE THE INFORMATION INSIDE THE LIST
# for name in nameList:
#     print(name)

# FUNCTIONS
# DEFINE THE FUNCTION
def functionName(num):
    for i in range(0,num):
        # if, elif, else
        if i < 10:
            print(i)
            print("singles")
        elif i >= 10 and i <= 20:
            print(i)
            print("tens")
        else:
            print(i)
            print("greater than twenty")
# CALLING(EXECUTING) THE FUNCTION
functionName(30)
functionName(0)
functionName(14)
functionName(-1)