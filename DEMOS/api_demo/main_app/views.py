from django.shortcuts import render
import requests, json

# Create your views here.
def index(request, zip_code):
    # .all() - grabbing all of something
    # .create() - creating something
    # .get() - grabbing on of something
    # user = User.objects.get(id = request.session['user_id'])
    # zip_code = user.zip_code
    zip_code = request.POST['zip_code']
    string = f"http://api.openweathermap.org/data/2.5/weather?zip={zip_code}&units=metric&appid=YOUR API CODE"
    resp = requests.get(string)
    json_res = resp.json()
    context = {
        "info": json_res
    }

    return render(request, "index.html", context)