from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    # Explicitly declare the password field to ensure it's write-only (won't be included in responses)
    password = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password', 'first_name', 'last_name', 'created_at', 'updated_at']

    def create(self, validated_data):
        # Pop the password from the validated data
        password = validated_data.pop('password')
        # Create the user instance without saving it to the database yet
        user = User(**validated_data)
        # Set the hashed password
        user.set_password(password)
        # Save the user to the database
        user.save()
        return user

    def update(self, instance, validated_data):
        # Pop the password if it's being updated
        password = validated_data.pop('password', None)
        # Update all other fields
        for (key, value) in validated_data.items():
            setattr(instance, key, value)
        # If a password is provided, hash it before updating
        if password:
            instance.set_password(password)
        # Save the updated instance
        instance.save()
        return instance
