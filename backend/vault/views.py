from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from .models import *
from .serializer import *

class UserViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    def get(self, request):
        output = [{'username':output.username,
                   'password':output.password,
                   'balance': output.balance}
                  for output in User.objects.all()]
        return Response(output)
    def post(self, request):
        serializer = UserSerializer(data = request.data)
        if (serializer.is_valid(raise_exception = True)):
            serializer.save()
            return Response(serializer.data) 

