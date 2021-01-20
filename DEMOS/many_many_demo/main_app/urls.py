from django.urls import path
from . import views

urlpatterns = [
    path("", views.index),
    path("user/create", views.createUser),
    path("user/<int:user_id>", views.showUser),
    path("user/add", views.addUser),
    path("user/remove", views.removeUser)
]