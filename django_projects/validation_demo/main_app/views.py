from django.shortcuts import render, redirect
from django.contrib import messages
from .models import Movie
# Movie.objects.get
# Movie.objects.create
# Movie.objects.all

# Create your views here.
def index(request):
    return render(request, "index.html")

def process(request):
    # 1.VALIDATE THE POST INFORMATION
    errors = Movie.objects.validate_movie(request.POST)

    # VALIDATIONS DO NOT PASS
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect("/")

    # VALIDATIONS PASS
    else:
        # 2. GRAB POST INFO AND CREATE MOVIE
        new_movie = Movie.objects.create(
            title = request.POST['title'],
            description = request.POST['description'],
            release_date = request.POST['release_date'],
            duration = request.POST['duration']
        )
        return redirect("/dashboard")

def dash(request):
    return render(request, "dash.html")