from django.shortcuts import render, HttpResponse

# Create your views here.
def index(request):
    return HttpResponse("I have created as Django App!")

def coffee(request):
    print("Hello you are in Coffee function")
    return HttpResponse("Welcome to coffee page")