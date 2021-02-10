# PROBLEM 1 - UPDATE VALUES IN DICTIONARIES AND LISTS
x = [ [5,2,3], [10,8,9] ] 
students = [
    {'first_name':  'Michael', 'last_name' : 'Jordan'},
    {'first_name' : 'John', 'last_name' : 'Rosales'}
]
sports_directory = {
    'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer' : ['Messi', 'Ronaldo', 'Rooney']
}
z = [ {'x': 10, 'y': 20} ]


def update_values(x, students, sports_directory, z):
    # Change the value 10 in x to be 15
    x[1][0] = 15
    # change last_name of the first student from "Jordan" to "Bryant"
    students[0]['last_name'] = "Bryant"
    # sports_directory change "Messi" to "Andres"
    sports_directory['soccer'][0] = "Andres"
    # Change the value of 20 in z to 30
    z[0]['y'] = 30


update_values(x, students, sports_directory, z)


# PROBLEM 2 - ITERATE THROUGH A LIST OF DICTIONARIES
students = [
        {'first_name':  'Michael', 'last_name' : 'Jordan'},
        {'first_name' : 'John', 'last_name' : 'Rosales'},
        {'first_name' : 'Mark', 'last_name' : 'Guillen'},
        {'first_name' : 'KB', 'last_name' : 'Tonel'}
]

dogs = [
    {"name": "Spot", "hair_texture": "brown"},
    {"name": "Rover", "hair_color": "black"}
]

def interate_dictionary(some_list):
    # Loop through the list
    print_string = ""
    for i in range(len(some_list)): # iterate through some_list - the list of dictionaries
        # print the keys and values
        for key in some_list[i]: # iterate through each dictionary to access all the keys
            print_string += f"{key} - {some_list[i][key]} "
        print(print_string)
        print_string = ""

# interate_dictionary(students)
# interate_dictionary(dogs)


# PROBLEM 3 - GET VALUES FROM A LIST OF DICTIONARIES
def interate_dictionary2(key_value, some_list):
    # Loop through the list
    for i in range(len(some_list)):
        # Print the value of the key
        # Edge case - check if key_value is in the dictionary
        if key_value not in some_list[i]:
            print("Key is not in dictionary")
        else:
            print(some_list[i][key_value])

# interate_dictionary2("first_name", students)
# interate_dictionary2("last_name", students)
# interate_dictionary2("age", students)

# PROBLEM 4 - ITERATE THROUGH A DICTIONARY WITH LIST VALUES
dojo = {
    'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
    'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}


def print_info(some_dict):
    # Loop through the dictionary
    for key in some_dict:
        # Print length of the list and the key
        print(f"{len(some_dict[key])} {key.upper()}")
        # Loop to print each item
        for i in range(len(some_dict[key])):
            print(some_dict[key][i])

print_info(dojo)
