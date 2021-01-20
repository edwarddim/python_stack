from django.shortcuts import render, redirect, HttpResponse
from django.contrib import messages
from .models import User
import bcrypt

# Create your views here.
def index(request):
    return render(request, "index.html")

def register(request):
    # 1. VALIDATE USER INFORMATION
    errors = User.objects.validate_register(request.POST)
    # USER DOESN'T PASS VALIDATION
    if errors:
        for value in errors.values():
            messages.error(request, value)
        return redirect("/")
    # USER PASSES VALIDATION
    hashed_pw = bcrypt.hashpw(request.POST['password'].encode(), bcrypt.gensalt() ).decode()
    print(hashed_pw)
    new_user = User.objects.create(
        name = request.POST['name'],
        email = request.POST['email'],
        password = hashed_pw
    )
    # STORE NEW USER'S ID IN SESSION
    request.session['user_id'] = new_user.id
    # REDIRECT YOU TO DASHBOARD
    return redirect("/dashboard")
def login(request):
    user = User.objects.filter(email = request.POST['email'])
    if user:
        logged_user = user[0]
        if bcrypt.checkpw(request.POST['password'].encode(), logged_user.password.encode()):
            request.session['user_id'] = logged_user.id
            return redirect("/dashboard")
        messages.error(request, "INVALID CREDENTIALS")
        return redirect("/")
    messages.error(request, "Email doesn't exist, register an account")
    return redirect("/")

def dashboard(request):
    return HttpResponse("Welcome to dash")