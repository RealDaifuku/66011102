from django.shortcuts import get_object_or_404
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from App_Minecraft.models import Player, JoinLog, Chat, Server
from App_Web.models import User
from .serializers import PlayerSerializer, JoinLogSerializer, ChatSerializer, ServerSerializer

# Create your views here.
@api_view(['GET', 'POST'])
def player_list(request):
    # if request.method == 'GET':
    #     queryset = Player.objects.all()
    #     serializer = PlayerSerializer(queryset, many=True)
    #     return Response(serializer.data)
    if request.method == 'GET':
        # Retrieve all players and order by kills in descending order
        queryset = Player.objects.all().order_by('-kills')
        serializer = PlayerSerializer(queryset, many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = PlayerSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.validated_data
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET', 'POST'])
def chat_list(request):
    if request.method == 'GET':
        queryset = Chat.objects.all()
        serializer = ChatSerializer(queryset, many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = ChatSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.validated_data
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET', 'POST'])
def joinlog_list(request):
    if request.method == 'GET':
        queryset = JoinLog.objects.all()
        serializer = JoinLogSerializer(queryset, many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = JoinLogSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.validated_data
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET', 'POST'])
def serverstatus_list(request):
    if request.method == 'GET':
        queryset = Server.objects.all()
        serializer = ServerSerializer(queryset, many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = ServerSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.validated_data
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET', 'PUT', 'DELETE'])
def player_detail(request, id):
    player = get_object_or_404(Player, pk=id)
    if request.method == 'GET':
        serializer = PlayerSerializer(player)
        return Response(serializer.data)
    
    elif request.method == 'PUT':
        serializer = PlayerSerializer(player, data= request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    elif request.method == 'DELETE':
        if JoinLog.objects.filter(player=player).exists() or Chat.objects.filter(player=player).exists():
            return Response(
                {
                    'error': 'Cannot delete this player because they have associated logs or messages.'
                },
                status=status.HTTP_400_BAD_REQUEST
            )
        else:
            player.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET'])
def chat_detail(request, id):
    chat = get_object_or_404(Chat, pk=id)
    serializer = ChatSerializer(chat)
    return Response(serializer.data)

@api_view(['GET'])
def joinlog_detail(request, id):
    joinlog = get_object_or_404(JoinLog, pk=id)
    serializer = JoinLogSerializer(joinlog)
    return Response(serializer.data)

@api_view(['GET'])
def serverstatus_detail(request, id):
    server = get_object_or_404(Server, pk=id)
    serializer = ServerSerializer(server)
    return Response(serializer.data)
