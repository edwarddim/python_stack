from django.shortcuts import render, redirect
from .models import User, Group

# Create your views here.
# ------------ CREATE ------------------------------- #
def index(request):
    context = {
        "all_users" : User.objects.all()
    }
    return render(request, "index.html", context)

def createUser(request):
    # 1. GRAB POST INFORMATION AND CREATE A NEW USER
    new_user = User.objects.create(
        name = request.POST['name'],
        email = request.POST['email'],
        password = request.POST['password']
    )
    print(new_user.id)
    # 2. REDIRECT TO INDEX ROUTE
    return redirect("/")
# ------------ CREATE ------------------------------- #

# ------------ READ ONE USER ------------------------ #
def user(request,user_id):
    print(f'User ID: {user_id}')
    context = {
        "one_user" : User.objects.get(id = user_id),
        "all_groups" : Group.objects.all()
    }
    return render(request, "user.html", context)
# ------------ READ ONE USER ------------------------ #

# ------------ USER JOINING A GROUP ------------------------ #
def joinGroup(request):
    user_id = request.POST['user_id']
    # 1. GRAB THE USER FROM DB
    user = User.objects.get(id = user_id)
    # 2. GRAB THE GROUP FROM DB
    group = Group.objects.get(id = request.POST['group_id'])
    # 3. CREATE RELATIONSHIP BETWEEN THE USER AND GROUP
    user.groups.add(group) # OR group.members.add(user)

    # 4. REDIRECT /users/ID#
    return redirect(f"/users/{user_id}")
# ------------ USER JOINING A GROUP ------------------------ #

