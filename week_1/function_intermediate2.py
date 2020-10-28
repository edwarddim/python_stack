# Change the value 10 in x to 15. Once you're done, x should now be [ [5,2,3], [15,8,9] ].
# Change the last_name of the first student from 'Jordan' to 'Bryant'
# In the sports_directory, change 'Messi' to 'Andres'
# Change the value 20 in z to 30

x = [ [5,2,3], [10,8,9] ]
x.append([1,2,3])
# print(x)

students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'}, # 0
     {'first_name' : 'John', 'last_name' : 'Rosales'} # 1
]
# create a new key called "rings" and store number of championships inside
students[0]["rings"] = 6
students[1]["rings"] = 0
# print(students)


# lists are created with []
# dictionaries are created with {}

students[0]['last_name'] = "Bryant"
# print(students)

sports_directory = {
    'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer' : ['Messi', 'Ronaldo', 'Rooney'],
    'baseball' : ["Babe Ruth", "Kershaw", "ARod"]
}
for key, value in sports_directory.items():
    print(key)
    for item in value:
        print(f"{item} is a {key} player")
    print("-------------------------------------------")

for key in sports_directory.keys():
    print(key)
    print(sports_directory[key])

for value in sports_directory.values():
    print(value)


# add a new list baseball players
sports_directory["baseball"] = ["Babe Ruth", "Kershaw", "ARod"]
sports_directory['soccer'][2] = "Ronaldinho"
# print(sports_directory["baseball"][0])
# print(sports_directory)


z = [ {'x': 10, 'y': 20} ]
z[0]['y'] = 30
# print(z)

