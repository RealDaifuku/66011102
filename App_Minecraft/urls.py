# urls.py
from django.urls import path
from . import views

urlpatterns = [
    path("api/get-player-data/<str:username>/", views.get_player_data, name="get-player-data"),
]
