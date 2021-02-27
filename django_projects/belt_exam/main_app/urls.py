from django.urls import path
from . import views

urlpatterns = [
    path("", views.index),
    path("register", views.register),
    path("login", views.login),
    path("shows", views.show),
    # CREATE
    path("shows/new", views.new), # RENDER THE FORM
    path("shows/process", views.process) #PROCESS THE FORM
]