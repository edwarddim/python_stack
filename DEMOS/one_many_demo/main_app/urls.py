from django.urls import path
from . import views

urlpatterns = [
    path("", views.index),
    path("user/create", views.createUser),
    path("post/create", views.createPost)
]