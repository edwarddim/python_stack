# Functions

# DEFINE
# 1. FUNCTION NAME  - addTwoThings
# 2. PARAMETERS - a, b
def addTwoThings(a, b):
    c = a + b
    return c

# CALL
print(addTwoThings(42, 56)) # Arguments - 42, 56
print(addTwoThings(1,2))
print(addTwoThings(4,8))
print(addTwoThings("Hello ", "World"))

# return VS print()
def a():
    print(1)
    x = b()
    print(x)
    return 10

def b():
    print(3)
    return 5

y = a()
print(y)