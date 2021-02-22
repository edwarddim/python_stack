# CREATE USER
User.objects.create(name = "Edward Im", email = "ed@gmail.com", password = "testpassword")
User.objects.create(name = "Jane Doe", email = "jane@gmail.com", password = "testpassword")
User.objects.create(name = "John Doe", email = "john@gmail.com", password = "testpassword")

# CREATE GROUP
Group.objects.create(name = "Python", max_size = 50)
Group.objects.create(name = "JAVA", max_size = 40)
Group.objects.create(name = "JS", max_size = 30)

# -------------------------------------------------------- #
# USER 1 JOIN JAVA, JS GROUP
# 1. GRAB THE USER FROM DB
user1 = User.objects.get(id = 1)
# 2. GRAB THE GROUPS FROM DB
java_group = Group.objects.get(id = 2)
js_group = Group.objects.get(id = 3)
# 3. CREATE RELATIONSHIP BETWEEN THE USER GROUP
user1.groups.add(java_group)
user1.groups.add(js_group)


# USER 1 LEAVES JS GROUP
# 1. GRAB THE USER FROM DB
user1 = User.objects.get(id = 1)
# 2. GRAB THE GROUPS FROM DB
js_group = Group.objects.get(id = 3)
# 3. REMOIVE RELATIONSHIP BETWEEN THE USER GROUP
user1.groups.remove(js_group)

# -------------------------------------------------------- #
# PYTHON GROUP ACCEPT USER 2, 3
# 1. GRAB THE GROUP FROM DB
python_group = Group.objects.get(id = 1)
# 2. GRAB THE USERS FROM DB
user2 = User.objects.get(id = 2)
user3 = User.objects.get(id = 3)
# 3. CREATE RELATIONSHIP BETWEEN THE GROUP AND USERS
python_group.members.add(user2)
python_group.members.add(user3)


python_group.members.remove(user3)