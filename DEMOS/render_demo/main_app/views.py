from django.shortcuts import render, redirect

# Create your views here.
def index(request):
    context = {
        "nanme" : "Edward Im",
        "list" : [1,2,3,4,5],
        "guess" : 79,
        "random_num" : 100
    }
    return render(request, "index.html", context)