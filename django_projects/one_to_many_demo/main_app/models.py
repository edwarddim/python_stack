from django.db import models

# Create your models here.
class User(models.Model):
    name = models.CharField(max_length = 255)
    email = models.CharField(max_length = 255)
    password = models.CharField(max_length = 255)
    # posts = LIST OF ALL POSTS CREATED BY THIS USER

    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

class Post(models.Model):
    title = models.CharField(max_length = 255)
    content = models.TextField()

    user = models.ForeignKey('User', related_name = 'posts', on_delete = models.CASCADE)

    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)