from django.shortcuts import render, redirect
from time import gmtime, strftime

# Create your views here.

def index(request):
    # IS THIS YOUR FIRST TIME VISITING THIS APPLICATION
    if "number" in request.session: # NO IT ISN'T
        request.session['number'] += 1
    else:                           # YES IT IS
        request.session['number'] = 1
    
    
    context = {
        "time": strftime("%Y-%m-%d %H:%M %p", gmtime()),
        "list" : [1,2,3,4,5],
        "name" : "Edward Im"
    }
    return render(request, "index.html", context)

def form(request):
    return render(request, "form.html")

# def create(request):
#     # print(request.POST)
#     print(request.POST['name'])
#     print(request.POST['email'])
#     print(request.POST['password'])
#     print(request.POST['fav_letter'])
#     return redirect("/form")

def create(request):
    dummy_info = {
        "context_name" : request.POST['name'],
        "context_email" : request.POST['email'],
        "context_pw" : request.POST['password'],
        "context_letter" : request.POST['fav_letter']
    }
    return render(request, "result.html", dummy_info)

def reset(request):
    if request.method == "GET":
        print("GET /RESET")
        request.session.clear()
    if request.method == "POST":
        print("POST /RESET")
        request.session.clear()
    return redirect("/")

# VERB       URL
# GET       /reset
# POST      /reset
