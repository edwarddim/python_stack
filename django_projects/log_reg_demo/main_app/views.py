from django.shortcuts import render, redirect
from django.contrib import messages
from .models import User
import bcrypt

# Create your views here.
def index(request):
    return render(request, "index.html")

def register(request):
    # 1. GET INPUTS VALIDATE
    errors = User.objects.validate_register(request.POST)
    # VALIDATIONS DO NOT PASS
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect("/")
    # VALIDATIONS DO PASS
    else:
        # HASH THE PASSWORD
        hash_pw = bcrypt.hashpw(request.POST['password'].encode(), bcrypt.gensalt()).decode()
        # GET INPUTS AND CREATE USER
        new_user = User.objects.create(
            first_name = request.POST['first_name'],
            last_name = request.POST['last_name'],
            email = request.POST['email'],
            password = hash_pw
        )
        # STORE NEW USER ID INSIDE OF SESSION
        request.session['user_id'] = new_user.id
        return redirect("/dashboard")
    
def login(request):
    # 1. CHECK TO SEE IF THE EMAIL EXISTS WITHIN DB
    user_list = User.objects.filter(email = request.POST['email'])
    # IF EMAIL DOESN'T EXIST WITH DB, REDIRECT WITH ERROR MESSAGE
    if len(user_list) == 0:
        messages.error(request, "INVALID CREDENTIALS")
        return redirect("/")
    # IF EMAIL DOES EXIST WITHIN DB, CHECK PW
    logged_user = user_list[0]
    if bcrypt.checkpw(request.POST['password'].encode(), logged_user.password.encode()):
        # PASSWORD MATCHES
        request.session['user_id'] = logged_user.id
        return redirect("/dashboard")
    else:
        # PASSWORD DOES NOT MATCHES
        messages.error(request, "INVALID CREDENTIALS")
        return redirect("/")


def dashboard(request):
    context = {
        "logged_in_user" : User.objects.get(id = request.session['user_id'])
    }
    return render(request, "dashboard.html", context)

def logout(request):
    request.session.clear()
    return redirect("/")