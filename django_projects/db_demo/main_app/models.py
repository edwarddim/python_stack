from django.db import models

# 1. DEFINE WHAT TABLES LOOK LIKE IN THE DB
# Create your models here.
class User(models.Model):
    # id = YOUR ID NUMBER
    prefix = models.CharField(max_length=45, null = True)
    full_name = models.CharField(max_length = 45)
    email = models.CharField(max_length = 255)
    password = models.CharField(max_length = 255)
    age = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
