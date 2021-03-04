from django.urls import path
from . import views

urlpatterns = [
    path("", views.index),
    path("city", views.city),
    path("process", views.process)
]