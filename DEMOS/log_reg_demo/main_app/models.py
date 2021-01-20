from django.db import models
import re

# Create your models here.
class UserManager(models.Manager):
    def validate_register(self, post_data):
        errors = {}
        # LENGTH OF NAME, CAPITAL OR NOT, NO SPECIAL CHARACTERS
        if len(post_data['name']) < 5:
            errors['name'] = "Name must be longer than 5 chars"
        # EMAIL PATTERN
        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        if not EMAIL_REGEX.match(post_data['email']):    # test whether a field matches the pattern            
            errors['email_pattern'] = "Invalid email address!"
        # UNIQUE EMAIL
        user_list = User.objects.filter(email = post_data['email'])
        if len(user_list) > 0:
            errors['email_duplicate'] = "Account already exists with email"
        # PASSWORD LENGTH IS GREATER THAN 8
        if len(post_data['password']) < 8:
            errors['password'] = "Password must be greater than 8"
        # PASSWORD MATCHESS CONFIRM PASSWORD
        if post_data['password'] != post_data['confirm_password']:
            errors['confirm_password'] = "Password and Confirm Password must match"
        return errors


class User(models.Model):
    name = models.CharField(max_length = 45)
    email = models.CharField(max_length = 255)
    password = models.CharField(max_length = 255)

    objects = UserManager()
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)