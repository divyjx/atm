from django.db import models

# Create your models here.
class User(models.Model):
    username = models.CharField(max_length=50)
    card = models.CharField(max_length=16, primary_key=True)
    password = models.CharField(max_length=50)
    balance = models.IntegerField()