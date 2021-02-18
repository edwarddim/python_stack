from django.urls import path
from . import views

urlpatterns = [
    path("", views.index),
    path("process", views.process)
    # path("register", views.register),
    # path("login", views.login),
]