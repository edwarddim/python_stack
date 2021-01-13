from django.shortcuts import render

# Create your views here.
def create_user(request):
    User.objects.create(
        name = request.POST['name'],
        email = request.POST['email'],
        password = request.POST['password'] ,
        age = request.POST['age']
    )