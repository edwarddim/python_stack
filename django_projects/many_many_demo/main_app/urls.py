from django.urls import path
from . import views

urlpatterns = [
# ------------ CREATE ------------------------------- #
    path("", views.index),
    path("user/new", views.createUser),
# ------------ CREATE ------------------------------- #
# ------------ READ ONE USER ------------------------ #
    path("users/<int:user_id>", views.user),
# ------------ READ ONE USER ------------------------ #
# ------------ USER JOINING A GROUP ----------------- #
    path("users/add_group", views.joinGroup)
# ------------ USER JOINING A GROUP ----------------- #

]