from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils import timezone

class User(AbstractUser):
    email = models.EmailField(unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    # Add related_name to prevent clashes
    groups = models.ManyToManyField(
        'auth.Group',
        related_name='appweb_user_set',  # Custom related_name
        blank=True,
        help_text='The groups this user belongs to.'
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='appweb_user_set',  # Custom related_name
        blank=True,
        help_text='Specific permissions for this user.'
    )

    def __str__(self):
        return self.username
