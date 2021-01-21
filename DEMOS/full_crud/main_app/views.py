from django.shortcuts import render, redirect
from .models import Show
from django.contrib import messages

# Create your views here.
def index(request):
    return redirect("/shows")
# ---------------- CREATE ---------------------------#
# DISPLAY THE FORM
def newShow(request):
    return render(request, "index.html")

# PROCESS THE POST INFO FROM FORM
def createShow(request):
    # 1. VALIDATE YOUR POST INFORMATION
    errors = Show.objects.validate_show(request.POST)
    if errors:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect("/")
    # 2. IF VALIDATIONS PASS, CREATE SHOW
    new_show = Show.objects.create(
        title = request.POST['title'],
        network = request.POST['network'],
        release_date = request.POST['release_date'],
        description = request.POST['description']
    )
    return redirect(f"/shows/{new_show.id}") #/shows/2
# ---------------- CREATE ---------------------------#
# ---------------- READ -----------------------------#
def dashboard(request):
    context = {
        "all_shows" : Show.objects.all()
    }
    return render(request, "dashboard.html", context)

def displayShow(request, show_id):
    context = {
        "one_show" : Show.objects.get(id = show_id)
    }
    return render(request, "show.html", context)
# ---------------- READ -----------------------------#
# ---------------- UPDATE ---------------------------#
def editShow(request, show_id):
    context = {
        "one_show" : Show.objects.get(id = show_id)
    }
    return render(request, "edit.html", context)

def updateShow(request, show_id):
    # 1. VALIDATE YOUR POST INFORMATION
    errors = Show.objects.validate_show(request.POST)
    if errors:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect(f"/shows/{show_id}/edit")
    # IF VALIDATIONS PASS UPDATE THE SHOW
    # STEP 1. GRAB SHOW FROM DB
    update_show = Show.objects.get(id = show_id)
    # STEP 2. CHANGE THE INFORMATION
    update_show.title = request.POST['title']
    update_show.network = request.POST['network']
    update_show.release_date = request.POST['release_date']
    update_show.description = request.POST['description']
    # STEP 3. SAVE THE UPDATED SHOW
    update_show.save()
    return redirect(f"/shows/{show_id}")
# ---------------- UPDATE ---------------------------#

# ---------------- DELETE ---------------------------#
def deleteShow(request, show_id):
    show = Show.objects.get(id = show_id)
    show.delete()
    return redirect("/shows")
# ---------------- DELETE ---------------------------#

