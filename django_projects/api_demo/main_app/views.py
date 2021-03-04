from django.shortcuts import render, redirect
import requests

# Create your views here.
def index(request):
    city_name = request.session['city_name']
    units = request.session['units']
    r = requests.get(f"http://api.openweathermap.org/data/2.5/weather?q={city_name}&appid=ee3c9c6ce2ffbf2d0672687edcf94f74&units={units}")
    res_json = r.json()
    print(res_json)
    context = {
        'weather' : res_json
    }
    return render(request, "index.html", context)

# RENDER FORM
def city(request):
    return render(request, "city.html")

# PROCESS FORM
def process(request):
    request.session['city_name'] = request.POST['city_name']
    request.session['units'] = request.POST['units']
    return redirect("/")