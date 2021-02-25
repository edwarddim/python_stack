from django.urls import path
from . import views

urlpatterns = [
    path("", views.index),




    # DISPLAY ALL (READ)
    path("movies", views.dashboard),
    # CREATE
    path("movies/new", views.new),
    path("movies/process", views.process),
    # DISPLAY ONE (READ)
    path("movies/<int:movie_id>", views.movie),
    # UPDATE
    path("movies/<int:movie_id>/edit", views.edit),
    path("movies/<int:movie_id>/update", views.update),
    # DELETE
    path("movies/<int:movie_id>/delete", views.delete)

]