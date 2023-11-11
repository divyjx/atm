from rest_framework.serializers import ModelSerializer 
from .models import *

class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'card', 'password', 'balance')