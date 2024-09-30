from django.urls import path
from . import views

urlpatterns = [
    path('player/', views.player_list),
    path('chat/', views.chat_list),
    path('joinlog/', views.joinlog_list),
    path('serverstatus/', views.serverstatus_list),
    path('player/<int:id>/', views.player_detail),
    path('chat/<int:id>/', views.chat_detail),
    path('joinlog/<int:id>/', views.joinlog_detail),
    path('serverstatus/<int:id>/', views.serverstatus_detail),
]