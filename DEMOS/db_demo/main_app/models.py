from django.db import models

# Create your models here.
# DEFINE WHAT THE TABLES LOOK LIKE
class User(models.Model):
    name = models.CharField(max_length = 45)
    email = models.CharField(max_length = 255)
    password = models.CharField(max_length = 255)
    age = models.IntegerField()
    dob = models.DateField(null = True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

# class Movie(models.Model):
#     title = models.CharField(max_length = 45)
#     director = models.CharField(max_length = 45)
#     release_date = models.DateField()
#     genre = models.CharField(max_length = 45)
#     rating = models.DecimalField(max_digits=2, decimal_places = 1)
#     runtime = models.IntegerField()

#     created_at = models.DateTimeField(auto_now_add=True)
#     updated_at = models.DateTimeField(auto_now=True)