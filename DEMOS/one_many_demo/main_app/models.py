from django.db import models

# Create your models here.
class User(models.Model):
    name = models.CharField(max_length = 45)
    email = models.CharField(max_length = 255)
    password = models.CharField(max_length = 255)
    # posts = LIST OF ALL POSTS
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Post(models.Model):
    title = models.CharField(max_length = 255)
    body = models.TextField()

    creator = models.ForeignKey(User, related_name = "posts", on_delete =  models.CASCADE)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
