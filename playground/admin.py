from django.contrib import admin, messages
from App_Minecraft.models import Player, JoinLog, Chat, Server
from App_Web.models import User

# Register your models here.
@admin.register(Player)
class PlayerAdmin(admin.ModelAdmin):
    actions = ['reset_kills', 'reset_deaths']
    list_display = ['id', 'display_name', 'kills', 'deaths', 'online_duration', 'rank']
    list_per_page = 10
    search_fields = ['display_name__istartswith', 'id']

    def rank(self, player):
        if player.kills <= 20:
            return 'Novice'
        elif player.kills > 20 and player.kills <= 50:
            return 'Guardian'
        elif player.kills > 50 and player.kills <= 100:
            return 'Master'
        return 'Overlord'
    
    @admin.action(description="reset_kills")
    def reset_kills(self, request, queryset):
        updated_kills_count = queryset.update(kills = 0)
        self.message_user(
            request,
            f'{updated_kills_count} player(s) kills were reset!',
            messages.SUCCESS
        )

    @admin.action(description="reset_deaths")
    def reset_deaths(self, request, queryset):
        updated_deaths_count = queryset.update(deaths = 0)
        self.message_user(
            request,
            f'{updated_deaths_count} player(s) deaths were reset!',
            messages.SUCCESS
        )
    
@admin.register(JoinLog)
class JoinLogAdmin(admin.ModelAdmin):
    list_display = ['id', 'player_display_name', 'time_joined', 'time_left']

    def player_display_name(self, obj):
        return obj.player.display_name
    player_display_name.short_description = 'Player'

@admin.register(Chat)
class ChatAdmin(admin.ModelAdmin):
    list_display = ['id', 'player_display_name', 'message', 'time_sent']

    def player_display_name(self, obj):
        return obj.player.display_name
    player_display_name.short_description = 'Player'

@admin.register(Server)
class ServerAdmin(admin.ModelAdmin):
    list_display = ['id', 'ping', 'tick_per_sec', 'time', 'weather']
    list_per_page = 10

# admin.site.register(Player)
# admin.site.register(JoinLog)
# admin.site.register(Chat)
# admin.site.register(Server)
# admin.site.register(User)