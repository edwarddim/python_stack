from django.shortcuts import render, redirect
from .models import User, Post

# Create your views here.
def index(request):
    context = {
        "all_users_from_db" : User.objects.all()
    }
    return render(request, "index.html", context)

def createUser(request):
    # 1. Create a user using POST information
    new_user = User.objects.create(
        name = request.POST['name'] ,
        email = request.POST['email'],
        password = request.POST['password']
    )
    print(new_user.id)
    # 2. Redirect "/"
    return redirect("/") # URL THIS IS GOING TO RENDER AN HTML

def createPost(request):
    # 1. Get user from DB
    user_from_db = User.objects.get(id = request.POST['user_id'])
    # 2. Create a new Post
    new_post = Post.objects.create(
        title = request.POST['title'],
        body = request.POST['body'],
        creator = user_from_db
    )
    print(new_post.id)
    # 3. Redirect "/"
    return redirect("/")