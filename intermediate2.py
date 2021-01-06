x = [ [5,2,3], [10,8,9] ] 
# Change the value 10 in x to 15. Once you're done, x should now be [ [5,2,3], [15,8,9] ].
x[1][0] = 15

# Change the last_name of the first student from 'Jordan' to 'Bryant'
students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'}
]
students[0]['last_name'] = "Bryant"

# In the sports_directory, change 'Messi' to 'Andres'
sports_directory = {
    'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer' : ['Messi', 'Ronaldo', 'Rooney']
}
sports_directory["soccer"][0] = "Andres"

# Change the value 20 in z to 30
z = [ {'x': 10, 'y': 20} ]

z[0]['y'] = 30


#-------------------------------------------------------------------------------------------------- #
students = [
    {'first_name':  'Michael', 'last_name' : 'Jordan'},
    {'first_name' : 'John', 'last_name' : 'Rosales'},
    {'first_name' : 'Mark', 'last_name' : 'Guillen'},
    {'first_name' : 'KB', 'last_name' : 'Tonel'}
]

def iterateDict(some_list):
    for i in range(0, len(some_list)): # ITERATING THROUGH THE LIST
        # some_list[i] => DICTIONARY
        line = ""
        for a,b in some_list[i].items(): # ITERATING THROUGH THE KEYS, VALUES OF THE DICTIONARY
            line += f"{a} - {b} "
        print(line)

# iterateDict(students)

def iterateDict2(key_name, some_list):
    for i in range(0, len(some_list)):
        print(some_list[i][key_name])
    
# iterateDict2("first_name", students)
# iterateDict2("last_name", students)

#-------------------------------------------------------------------------------------------------- #
dojo = {
    'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
    'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}
def iterateDict3(some_dict):
    for key, value in some_dict.items():
        print(f"{len(value)} {key} ")
        for i in range(0, len(value)):
            print(value[i])

iterateDict3(dojo)


# 7 LOCATIONS
# San Jose
# Seattle
# Dallas
# Chicago
# Tulsa
# DC
# Burbank

# 8 INSTRUCTORS
# Michael
# Amy
# Eduardo
# Josh
# Graham
# Patrick
# Minh
# Devon
#-------------------------------------------------------------------------------------------------- #