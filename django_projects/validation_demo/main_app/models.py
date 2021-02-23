from django.db import models

# Create your models here.
class MovieManager(models.Manager):
    def validate_movie(self, postData):
        print(postData)
        errors = {}
        # CHECK TO SEE IF TITLE IS LONGER THAN 0 CHARS
        if len(postData['title']) < 2:
            errors['title'] = "Title length must be longer than 1 character"
        # CHECK TO SEE IF DESCRIPTION IS LONGER THAN 10 CHARS
        if len(postData['description']) < 10:
            errors['description'] = "Description length must be longer than 9 chars"
        # CHECK TO SEE IF RELEASE DATE IS RIGHT FORMAT
        if len(postData['release_date']) == 0:
            errors['release_date'] = "You must input release date"
        # CHECK TO SEE IF DURATION IS SUPPLIED
        if len(postData['duration']) == 0:
            errors['duration']  = "Duration must be supplied"
        return errors

class Movie(models.Model):
    title = models.CharField(max_length=45)
    description = models.TextField()
    release_date = models.DateField()
    duration = models.IntegerField()

    # objects = CONTAINS ALL CRUD COMMANDS
    objects = MovieManager() # CONTAINS ALL CRUD COMMANDS BUT ALSO MY VALIDATION FUNCTIONS
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)