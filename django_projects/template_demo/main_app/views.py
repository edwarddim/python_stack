from django.shortcuts import render, HttpResponse

# Create your views here.
def index(request):
    context = {
        "name" : "Edward",
        "age" : 30,
        "likes" : ['food', 'games', 'sleep'],
        "users" : [
            {
                "name" : "Edward",
                "age" : 30
            },
            {
                "name" : "Fred",
                "age" : 35
            },
            {
                "name" : "Steve",
                "age" : 56
            },
        ]
    }
    return render(request,"index.html", context)