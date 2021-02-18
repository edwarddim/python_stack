# CREATE
User.objects.create(name = "Edward Im", email = "ed@gmail.com", password = "fjeiwoa;3847rj439", age = 30)
User.objects.create(name = "Jane Doe", email = "jane@gmail.com", password = "fjeiwoa;3847rj439", age = 31)
User.objects.create(name = "John Doe", email = "john@gmail.com", password = "fjeiwoa;3847rj439", age = 32)
# READ
User.objects.all() # GRABS ALL USERS
User.objects.first() # GRABS FIRST USER IN TABLE
User.objects.last() # GRABS LAST USER IN TABLE
User.objects.get(id = 2) # GRABS USER WITH ID 2
User.objects.filter(name = "Edward Im", age = 35)
# ----------------------UPDATE-----------------------#
# 1. GRAB THE OBJECT YOU WANT TO UPDATE
user_to_update = User.objcets.get(id = 1)
# 2. CHANGE THE INFORMATION INSIDE OF THE OBJECT
user_to_update.name = "Edward Im"
user_to_update.email = "edd@gmail.com"
user_to_update.password = "fjieowa;8234u9tu43q9p"
user_to_update.age = 30
# 3. SAVE THE NEWLY UPDATED INFORMATION
user_to_update.save()
# ----------------------UPDATE-----------------------#
# ----------------------DELETE-----------------------#
# 1. GRAB THE OBJECT I WANT TO DELETE
user_to_delete = User.objects.get(id = 3)
# 2. DELETE THE OBJECT
user_to_delete.delete()
# OR
User.objects.get(id = 3).delete()
# ----------------------DELETE-----------------------#