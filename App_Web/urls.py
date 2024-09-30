# from django.urls import path, include
# from rest_framework.routers import DefaultRouter
# from .views import UserViewSet

# from rest_framework_simplejwt.views import (
#     TokenObtainPairView,
#     TokenRefreshView,
# )

# router = DefaultRouter()
# router.register(r'users', UserViewSet)

# urlpatterns = [
#     path('api/', include(router.urls)),
#     path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
#     path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
# ]
# App_Web/views.py

# App_Web/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserViewSet, CustomTokenObtainPairView, ProtectedAdminRoute
from rest_framework_simplejwt.views import TokenRefreshView

router = DefaultRouter()
router.register(r'users', UserViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    path('api/token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),  # Use custom view
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/protected-admin-route/', ProtectedAdminRoute.as_view(), name='protected_admin_route'),  # Add this line
]
