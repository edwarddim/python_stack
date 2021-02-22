from django.shortcuts import render, redirect, HttpResponse
from .models import User

# Create your views here.
def index(request):
    context = {
        "all_users" : User.objects.all(),
        "most_recent_user" : User.objects.last()
    }
    return render(request, "index.html", context)

def create(request):
    if request.method == "GET":
        return redirect("/error")
    new_user = User.objects.create(
        prefix = request.POST['prefix'],
        full_name = request.POST['full_name'], 
        email = request.POST['email'], 
        password = request.POST['password'], 
        age = request.POST['age']
    )
    print(f"NEW USER ID: {new_user.id}")
    return redirect("/")

def error(request):
    return HttpResponse("YOU'RE DOING IT WRONG")