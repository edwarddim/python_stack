# ORDERED DATA STRUCTURE
# lists / arrays -> OPERATE ON INDEX / VALUE
numArr = [0,3,5,76,2,54,7]
namesList = ["edward", "steven", "fred"]
namesList.append("george")



# UNORDERED DATA STRUCTURE
# dictionaries / objects -> OPERATE KEY / VALUE

persons = [
    {
        "name" : "Edward",
        "age" : 30
    },
    {
        "name" : "Steve",
        "age" : 30
    },
    {
        "name" : "Fred",
        "age" : 30
    }
]

personInfo = {
    "name" : "Edward Im",
    "age" : 30,
    "eye_color" : "brown",
    "address" : {
        "street_address" : "123 Street Way",
        "city" : "Somewhere",
        "state" : "Somplace",
        "zip_code" : 99999
    },
    "likes" : ["food", "games", "sleep"]
}

key_name = "something"

another = {
    key_name : "hello"
}
print(another)

key_name = "another_key"
print(another)


# print(personInfo['address']['zip_code'])
# print(personInfo['likes'][2])