from django.urls import path
from . import views

urlpatterns = [
    path("zip/<int:zip_code>", views.index)
]