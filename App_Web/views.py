from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import User
from .serializers import UserSerializer
from rest_framework.views import APIView

# App_Web/views.py
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.response import Response
from django.contrib.auth import authenticate

class CustomTokenObtainPairView(TokenObtainPairView):
    def post(self, request, *args, **kwargs):
        username = request.data.get('username')
        password = request.data.get('password')

        print(f"Attempting to authenticate user: {username} with password: {password}")

        user = authenticate(username=username, password=password)
        if user is None:
            print(f"Authentication failed for user: {username}")
            return Response({'detail': 'No active account found with the given credentials'}, status=401)

        print(f"User {username} authenticated successfully")
        return super().post(request, *args, **kwargs)


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    # Require authentication for certain actions (if needed)
    def get_permissions(self):
        if self.action in ['list', 'retrieve']:
            return [IsAuthenticated()]  # Only authenticated users can list or retrieve users
        return super().get_permissions()
    




class ProtectedAdminRoute(APIView):
    permission_classes = [IsAuthenticated]  # Require authentication to access this route

    def get(self, request):
        return Response({"message": "Welcome to the protected admin route!"})
