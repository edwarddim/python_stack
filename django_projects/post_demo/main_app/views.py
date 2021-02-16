from django.shortcuts import render, redirect

# 1. return render(template/HTML)
# 2. return redirect(route/URL)

# Create your views here.
def index(request):
    return render(request, "index.html")

def register(request):
    # CHECK TO SEE IF INFORMATION IS PROPER
    print(f"Creating a new user with {request.POST['last_name']}, {request.POST['email']}, {request.POST['password']} ")
    # IF INFORMATION IS NOT PROPER, REDIRECT THEM BACK TO REGISTER PAGE AND SHOW ERROR
    return redirect("/")
    # IF INFOMRATION IS PROPER CREATE USER AND THE REDIRECT TO DASHBOARD
    return redrect("/dashboard")

def dashboard(request):
    return render(request, "dashboard.html")