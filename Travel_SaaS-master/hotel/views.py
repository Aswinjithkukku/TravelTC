from django.shortcuts import render
from rest_framework import generics
from .models import *
from .serializers import *
# Create your views here.

class ListHotelGeneric(generics.ListCreateAPIView):
    queryset=Hotel.objects.all()
    serializer_class=HotelSerializer

class HotelGeneric(generics.RetrieveUpdateDestroyAPIView):
    queryset=Hotel.objects.all()
    serializer_class=HotelSerializer   

class ListHotelPriceGeneric(generics.ListCreateAPIView):
    queryset=HotelPrice.objects.all()
    serializer_class=HotelPriceSerializer

class HotelPriceGeneric(generics.RetrieveUpdateDestroyAPIView):
    queryset=HotelPrice.objects.all()
    serializer_class=HotelPriceSerializer    

class ListHotelPolicyGeneric(generics.ListCreateAPIView):
    queryset=HotelPolicy.objects.all()
    serializer_class=HotelPolicySerializer

class HotelPolicyGeneric(generics.RetrieveUpdateDestroyAPIView):
    queryset=HotelPolicy.objects.all()
    serializer_class=HotelPolicySerializer

class ListNewRoomAttributeGeneric(generics.ListCreateAPIView):
    queryset=NewRoomAttribute.objects.all()
    serializer_class=NewRoomAttributeSerializer

class NewRoomAttributeGeneric(generics.RetrieveUpdateDestroyAPIView):
    queryset=NewRoomAttribute.objects.all()
    serializer_class=NewRoomAttributeSerializer

class ListAttributeGeneric(generics.ListCreateAPIView):
    queryset=Attribute.objects.all()
    serializer_class=AttributeSerializer

class AttributeGeneric(generics.RetrieveUpdateDestroyAPIView):
    queryset=Attribute.objects.all()
    serializer_class=AttributeSerializer