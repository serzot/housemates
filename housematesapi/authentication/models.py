from django.db import models
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser):
    middle_name = models.CharField(max_length=30, null=True, blank=True)
    phone_number = models.CharField(max_length=15, null=True, blank=True)
    address = models.TextField(null=True, blank=True)
    profile_picture = models.ImageField(upload_to='profile_pics/', null=True, blank=True)
    birth_date = models.DateField(null=True, blank=True)
    user_type = models.CharField(max_length=20, choices=[('host', 'Host'), ('roommate', 'Roommate')])
