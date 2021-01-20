from django.shortcuts import render, redirect
from .models import User, Group

# Create your views here.
def index(request):
    context = {
        "all_users_from_db" : User.objects.all()
    }
    return render(request, "index.html", context)

def createUser(request):
    new_user = User.objects.create(
        name = request.POST['name'],
        email = request.POST['email'],
        password = request.POST['password']
    )
    print(new_user.id)
    return redirect("/") # URL

def showUser(request, user_id):
    context = {
        "user_from_db" : User.objects.get(id = user_id),
        "all_groups_from_db" : Group.objects.all()
    }
    return render(request, "show_user.html", context)

def addUser(request):
    user_id = request.POST['user_id']
    group_id = request.POST['group_id']

    # RETRIEVE USER AND GROUP FROM DB
    user = User.objects.get(id = user_id)
    group = Group.objects.get(id = group_id)
    # CREATE RELATIONSHIP BETWEEN USER AND GROUP
    user.groups.add(group)
    # OR group.members.add(user)

    return redirect(f"/user/{user_id}")

def removeUser(request):
    user_id = request.POST['user_id']
    group_id = request.POST['group_id']

    # RETRIEVE USER AND GROUP FROM DB
    user = User.objects.get(id = user_id)
    group = Group.objects.get(id = group_id)
    # CREATE RELATIONSHIP BETWEEN USER AND GROUP
    user.groups.remove(group)
    # OR group.members.remove(user)

    return redirect(f"/user/{user_id}")