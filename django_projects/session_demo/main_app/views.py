from django.shortcuts import render, redirect

# 1. THIS IS YOUR FIRST TIME VISITING OUR SITE
# 2. THIS IS NOT YOUR FIRST TIME VISITING OUR SITE

# Create your views here.
def index(request):
    request.session['user_id'] = 123
    return render(request, "index.html")

def dashboard(request):
    if "user_id" not in request.session:
        return redirect("/")
    print(f"Your ID is: {request.session['user_id']}")
    return render(request, "dashboard.html")


def counter(request):
    # if "counter" in request.session:
    #     request.session['counter'] += 1
    # else:
    #     request.session["counter"] = 1

    if "counter" not in request.session:
        request.session['counter'] = 0
    request.session['counter'] += 1
    return render(request, "counter.html")