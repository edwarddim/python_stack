from django.shortcuts import render, redirect,HttpResponse

# Create your views here.
def index(request):
    return redirect("/register")

def register(request):
    return redirect(request, "index.html")

def edit(request, user_id):
    return HttpResponse(f"User edit page for {user_id}")

def another(request):
    return HttpResponse("You have landed on ANOTHER function")

def start(request):
    return redirect("/route")

def show(request, user_id):
    return HttpResponse(f"The User ID is {user_id} ")

def route(request):
    return redirect("/another_route")

def dashboard(request):
    return HttpResponse("This is your dashboard")

def delete(request, user_id):
    print(f"Deleting user with ID {user_id}")
    return redirect("/dashboard")
