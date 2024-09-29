from rest_framework import serializers
from App_Minecraft.models import Player, JoinLog, Chat, Server

class PlayerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Player
        fields = ['id', 'display_name', 'kills', 'deaths', 'online_duration']

class JoinLogSerializer(serializers.ModelSerializer):
    player = serializers.StringRelatedField()  # This will return the `display_name` of the Player

    class Meta:
        model = JoinLog
        fields = ['id', 'player', 'time_joined', 'time_left']

class ChatSerializer(serializers.ModelSerializer):
    player = serializers.StringRelatedField()  # This will return the `display_name` of the Player

    class Meta:
        model = Chat
        fields = ['id', 'player', 'message', 'time_sent']

class ServerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Server
        fields = ['id', 'player_count', 'ping', 'tick_per_sec', 'server_ver', 'api_ver', 'time', 'weather']
