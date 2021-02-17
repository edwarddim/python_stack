from django.shortcuts import render

# Create your views here.
def index(request):
    # 1. BUILD A DICTIONARY
    context = {
        "first_name" : "Edward",
        "last_name" : "Im",
        "address" : {
            "street" : "123 Way St.",
            "city" : "Boise",
            "state" : "ID"
        },
        "likes" : ["games", "food", "sleep"],
        "age" : 30
    }
    # 2. PASS THE DICTIONARY INTO THE RENDER FUNCTION
    return render(request, "index.html", context)

# --------------------------------------------------- #
# 1. DISPAY THE FORM
def survey(request):
    return render(request, "survey.html")
# 2. PROCESS THE FORM
def process(request):
    context = {
        "full_name" : request.POST['full_name'],
        "age" : request.POST['age'],
        "comments" : request.POST['survey_comments']
    }
    return render(request, "results.html", context)

# --------------------------------------------------- #

def loops(request):
    context = {
        "numbers" : [1,2,3,4,5,6],
        "first_name" : "Edward",
        "last_name" : "Im",
        "address" : {
            "street" : "123 Way St.",
            "city" : "Boise",
            "state" : "ID"
        },
        "likes" : ["games", "food", "sleep"],
        "age" : 30
    }
    return render(request, "loop.html", context)