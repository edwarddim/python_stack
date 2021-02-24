from django.db import models
import re

# Create your models here.
class UserManager(models.Manager):
    def validate_register(self, postData):
        errors = {}
        # CHECK LENGTH OF FIRST NAME
        if len(postData['first_name']) < 2:
            errors['first_name'] = "Your first name must be longer than 1 chars"
        # CHECK LENGTH OF LAST NAME
        if len(postData['last_name']) < 2:
            errors['last_name'] = "Your last name must be longer than 1 chars"
        # FIRST NAME AND LAST ONLY CONTAIN ALPHABETS
        # CHECK EMAIL FOLLOWS EMAIL FORMAT
        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        if not EMAIL_REGEX.match(postData['email']):    # test whether a field matches the pattern            
            errors['email'] = "Invalid email address!"
        # CHECK IF EMAIL ALREADY EXISTS WITH THE DB
        user_list = User.objects.filter(email = postData['email'])
        if len(user_list) > 0:
            errors['email_duplicate'] = "Email aleady exists within DB"
        # CHECK PASSWORD IS AT LEAST 8 CHARS LONG
        if len(postData['password']) < 9:
            errors['password'] = "Password must be at least 8 chars"
        # CHECK IF PASSWORD MATCHES CONFIRM PASSWORD
        if postData['password'] != postData['confirm_password']:
            errors['match_password'] = "Your Password and Confirm Password must match"
        return errors


class User(models.Model):
    first_name = models.CharField(max_length = 45)
    last_name = models.CharField(max_length = 45)
    email = models.CharField(max_length = 45)
    password = models.CharField(max_length = 255)

    objects = UserManager()

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)