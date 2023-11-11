from django.shortcuts import render

def index(request, dummy = 1):
    return render(request, 'index.html')