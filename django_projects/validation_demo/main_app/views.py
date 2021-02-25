from django.shortcuts import render, redirect
from django.contrib import messages
from .models import Movie
# Movie.objects.get
# Movie.objects.create
# Movie.objects.all

# Create your views here.
def index(request):
    return redirect("/movies/new")

# ------------ CREATE ------------------#
# 1. DISPLAY THE FORM
def new(request):
    return render(request, "index.html")

# 2. PROCESS THE FORM INFORMATION
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
        return redirect(f"/movies/{new_movie.id}")
# ------------ CREATE ------------------#
# ------------ READ(DASHBOARD) ------------------#
def dashboard(request):
    all_movies = Movie.objects.all()
    context = {
        "all_movies" : all_movies
    }
    return render(request, "dashboard.html", context)
# ------------ READ(DASHBOARD) ------------------#
# ------------ READ(DETAILS) ------------------#
def movie(request, movie_id):
    # 1. GET MOVIE FROM DB USING movie_id
    # 2. BUILD CONTEXT
    movie = Movie.objects.get(id = movie_id)
    context = {
        "one_movie" : movie
    }
    return render(request, "movie.html", context)
# ------------ READ(DETAILS) ------------------#
# ------------ UPDATE ------------------#
# 1. RENDER THE FORM
def edit(request, movie_id):
    context = {
        "edit_movie" : Movie.objects.get(id = movie_id)
    }
    return render(request, "edit.html", context)
# 2. PROCESS FORM INFORMATION
def update(request, movie_id):
    # 1.VALIDATE THE POST INFORMATION
    errors = Movie.objects.validate_movie(request.POST)

    # VALIDATIONS DO NOT PASS
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect(f"/movies/{movie_id}/edit")

    # VALIDATIONS PASS
    # 1. GRAB MOVIE FROM DB
    movie_to_update = Movie.objects.get(id = movie_id)
    # 2. CHANGE THE INFORMATION USING POST INFORMATION
    movie_to_update.title = request.POST['title']
    movie_to_update.description = request.POST['description']
    movie_to_update.release_date = request.POST['release_date']
    movie_to_update.duration = request.POST['duration']
    # 3. UPDATE THE DB WITH THE NEW MOVIE OBJECT
    movie_to_update.save()
    # 4. REDIRECT TO DETAILS
    return redirect(f"/movies/{movie_id}")
# ------------ UPDATE ------------------#
# ------------ DELETE ------------------#
def delete(request, movie_id):
    movie_to_delete = Movie.objects.get(id = movie_id)
    movie_to_delete.delete()
    return redirect("/movies")

# ------------ DELETE ------------------#