from django.db import models

# Create your models here.
class User(models.Model):
    name = models.CharField(max_length = 45)
    email = models.CharField(max_length = 255)
    password = models.CharField(max_length = 255)
    # groups = LIST OF ALL THE GROUPS THIS USER HAS JOINED
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Group(models.Model):
    name = models.CharField(max_length = 255)
    description = models.TextField()

    members = models.ManyToManyField(User, related_name = "groups") # LIST OF ALL USERS WHO HAVE JOINED THIS GROUP

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
