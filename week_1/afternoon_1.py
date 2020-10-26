import random

# 1. TASK: print "Hello World"
print("Hello World")
# 2. print "Hello Noelle!" with the name in a variable
name = "Noelle"
print("Hello", name)	# with a comma
print("Hello " + name)	# with a +
# # 3. print "Hello 42!" with the number in a variable
name = 42
print("Hello", name, "!")	# with a comma
print("Hello" + str(name) + "!")	# with a +	-- this one should give us an error!
# # 4. print "I love to eat sushi and pizza." with the foods in variables
# fave_food1 = "sushi"
# fave_food2 = "pizza"
# print( your code here ) # with .format()
# print( your code here ) # with an f string

# def randInt(min = , max = ):
#     # print(random.random())
#     num = random.random() * 50
#     print(num)
#     print(round(num))

# randInt()

# Set three variables: lowNum, highNum, mult. Starting at lowNum and going through highNum, print only the integers that are a multiple of mult. 
# For example, if lowNum=2, highNum=9, and mult=3, the loop should print 3, 6, 9 (on successive lines)


def multiples(lowNum, highNum, mult):
    for i in range(lowNum, highNum + 1):
        if i % mult == 0:
            print(i)

# multiples(2,9,3)


def iterateList(list):
    # for i in range( 0, len(list) ):
    #     print(list[i])
    for value in list:
        print(value)

iterateList([1,2,3,4,5])
iterateList(["a", "b", "c", "d", "e"])