from rest_framework import serializers
from App_Minecraft.models import Player

class PlayerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Player
        fields = ['display_name', 'kills', 'deaths']  # Ensure these fields are included
