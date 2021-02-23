from django.shortcuts import render, redirect
from .models import User, Post

# Create your views here.
def index(request):
    context = {
        "all_users" : User.objects.all()
    }
    return render(request, "index.html", context)

def processUser(request):
    # 1. TAKE USER INFO, STORE(CREATE A NEW USER) IN DB
    new_user = User.objects.create(
        name = request.POST['name'],
        email = request.POST['email'],
        password = request.POST['password']
    )
    print(f'New user ID: {new_user.id}')
    # 2. REDIRECT TO "/"
    return redirect("/")

def processPost(request):
    # 1. GET THE INPUTS, STORE(CREATE A NEW POST) IN DB
    user_from_db = User.objects.get(id = request.POST['user_id'])
    Post.objects.create(
        title = request.POST['title'],
        content = request.POST['content'],
        user = user_from_db
    )
    # 2. REDIRECT TO "/"
    return redirect("/")