from django.shortcuts import render, redirect

# Create your views here.
def index(request):
    return render(request, "index.html")

def process(request):
    if request.POST['which_form'] == "register":
        print("EXECUTE REGISTER LOGIC")
        print(request.POST)
        print(request.POST['username'])
        print(request.POST['password'])
        print(request.POST['confirm_password'])
        return redirect("/")
    elif request.POST['which_form'] == "login":
        print("EXECUTE LOGIN LOGIC")
        print(request.POST)
        print(request.POST['username'])
        print(request.POST['password'])
        return redirect("/")

# def register(request):
#     print("EXECUTE REGISTER LOGIC")
#     return redirect("/")

# def login(request):
#     print("EXECUTE LOGIN LOGIC")
#     return redirect("/")