from django.db import models

# Create your models here.
class User(models.Model):
    name = models.CharField(max_length = 45)
    email = models.CharField(max_length = 255)
    password = models.CharField(max_length = 255)
    # groups = LIST OF ALL GROUPS THAT THIS USER BELONGS TO

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Group(models.Model):
    name = models.CharField(max_length = 45)
    max_size = models.IntegerField()

    members = models.ManyToManyField(User, related_name = "groups")
    # LIST OF ALL USERS BELONGING TO THIS GROUP
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)