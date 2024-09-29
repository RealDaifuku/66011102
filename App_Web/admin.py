from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth import get_user_model

# Get the custom User model
User = get_user_model()

# Unregister the default registration if it exists
if admin.site.is_registered(User):
    admin.site.unregister(User)

# Register your custom User model
@admin.register(User)
class UserAdmin(BaseUserAdmin):
    list_display = ["username", 'email', 'first_name', 'last_name']
    add_fieldsets = (
        (
            None,
            {
                "classes": ("wide",),
                "fields": ("username", "usable_password", "password1", "password2", 'email', 'first_name', 'last_name'),
            },
        ),
    )