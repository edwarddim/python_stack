from django.urls import path
from . import views

urlpatterns = [
    path("", views.index),
    path("process/movie", views.process),
    path('dashboard', views.dash)
]