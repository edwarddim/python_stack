from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('survey', views.survey),
    path('process_survey', views.process),
    path('loops', views.loops)
]