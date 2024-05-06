from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import Data 
from .serializer import DataSerializers


# Create your views here.


@api_view(['GET'])
def getData(request):
    rec = Data.objects.all()
    serializer = DataSerializers(rec, many=True)
    return Response(serializer.data)



@api_view(['POST'])
def postData(request):
    data = request.data
    serializer = DataSerializers(data=data)
    
    if serializer.is_valid():
        serializer.save()
        return Response("Data saved successfully", status=201)
    else:
        return Response(serializer.errors,status=400)  
    
