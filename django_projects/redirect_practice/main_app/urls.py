from django.urls import path
from . import views

urlpatterns = [
    path("", views.index),
    path("route", views.route),
    path("register", views.register),
    path("start", views.start),
    path("another_route", views.another),
    path("dashboard", views.dashboard),
    path("user/<int:user_id>", views.show),
    path("user/<int:user_id>/edit", views.edit),
    path("user/<int:user_id>/delete", views.delete)
]