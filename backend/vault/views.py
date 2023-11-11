from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import *
from .serializer import *

class UserViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    def get(self, request):
        output = [{'username':output.username,
                   'card':output.card,
                   'password':output.password,
                   'balance': output.balance}
                  for output in User.objects.all()]
        return Response(output)
    def post(self, request):
        serializer = UserSerializer(data = request.data)
        if (serializer.is_valid(raise_exception = True)):
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors) 

class UserUpdate(APIView):
    def post(self, request, pk):
        try:
            userObj = User.objects.get(pk = pk)
        except:
            return Response({"error":"User Not Present"})
        
        serializer = UserSerializer(userObj, data=request.data)
        if (serializer.is_valid()):
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

class UserDelete(APIView):
    def post(self, request, pk):
        try:
            userObj = User.objects.get(pk = pk)
        except:
            return Response({"error":"User Not Present"})
        userObj.delete()
        return Response({"status":"200",
                         "message":"deleted successfully"
                         })
