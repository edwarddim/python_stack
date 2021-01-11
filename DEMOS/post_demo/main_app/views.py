from django.shortcuts import render, redirect

# Create your views here.
def index(request):
    if request.method == "GET":
        return render(request, "index.html")

    if request.method == "POST":
        db = {}
        print(request.POST['somehting'])
        if(request.POST['email'] in db): # cheking to see exists
            # check password
            return redirect("/homepage")
        else:
            # create some error messges
            return redirect("/login")
