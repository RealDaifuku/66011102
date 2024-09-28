from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils import timezone


class Player(models.Model):
    display_name = models.CharField(max_length=255, unique=True)
    kills = models.IntegerField(default=0)
    deaths = models.IntegerField(default=0)
    online_duration = models.IntegerField(default=0)  # Duration in seconds

    def __str__(self):
        return self.display_name
    
    class Meta:
        ordering = ['-kills']

class JoinLog(models.Model):
    player = models.ForeignKey(Player, on_delete=models.CASCADE)
    time_joined = models.DateTimeField()
    time_left = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return f"{self.player.display_name} joined at {self.time_joined}"

class Chat(models.Model):
    player = models.ForeignKey(Player, on_delete=models.CASCADE)
    message = models.TextField()
    time_sent = models.DateTimeField()

    def __str__(self):
        return f"{self.player.display_name}: {self.message}"

class Server(models.Model):
    player_count = models.IntegerField(default=0)
    ping = models.IntegerField(default=0)
    tick_per_sec = models.IntegerField(default=20)
    server_ver = models.CharField(max_length=50)
    api_ver = models.CharField(max_length=50)
    time = models.DateTimeField()
    weather = models.CharField(max_length=50)

    def __str__(self):
        return f"Server status at {self.time}"