from django.db import models

# Create your models here.
class ShowManager(models.Manager):
    def validate_show(self, post_data):
        errors = {}
        if len(post_data['title']) < 2:
            errors['title'] = "Title must be longer than 2 chars"
        if len(post_data['network']) < 3:
            errors['network'] = "Network must be longer than 3 chars"
        if len(post_data['description']) < 10:
            errors['description'] = "Description must be longer than 10 chars"
        return errors

# class User(models.Model):
#     name = models.CharField()

class Show(models.Model):
    title = models.CharField(max_length = 255)
    network = models.CharField(max_length = 255)
    release_date = models.DateField()
    description = models.TextField()

    # creator = models.ForeignKey(User, related_namte = "shows_created")

    objects = ShowManager()

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)