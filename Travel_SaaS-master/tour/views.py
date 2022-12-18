from django.shortcuts import render
from rest_framework import generics
from .models import *
from .serializers import *
# Create your views here.

class ListExeGeneric(generics.ListCreateAPIView):
    queryset=Exe.objects.all()
    serializer_class=ExeSerializer

class ExeGeneric(generics.RetrieveUpdateDestroyAPIView):
    queryset=Exe.objects.all()
    serializer_class=ExeSerializer 

class ListFAQSGeneric(generics.ListCreateAPIView):
    queryset=FAQS.objects.all()
    serializer_class=FAQSSerializer

class FAQSGeneric(generics.RetrieveUpdateDestroyAPIView):
    queryset=FAQS.objects.all()
    serializer_class=FAQSSerializer

class ListExe_IncludeGeneric(generics.ListCreateAPIView):
    queryset=Exe_Include.objects.all()
    serializer_class=Exe_IncludeSerializer

class Exe_IncludeGeneric(generics.RetrieveUpdateDestroyAPIView):
    queryset=Exe_Include.objects.all()
    serializer_class=Exe_IncludeSerializer

class ListExe_ExcludeGeneric(generics.ListCreateAPIView):
    queryset=Exe_Exclude.objects.all()
    serializer_class=Exe_ExcludeSerializer

class Exe_ExcludeGeneric(generics.RetrieveUpdateDestroyAPIView):
    queryset=Exe_Exclude.objects.all()
    serializer_class=Exe_ExcludeSerializer

class ListExe_ItinenaryGeneric(generics.ListCreateAPIView):
    queryset=Exe_Itinerary.objects.all()
    serializer_class=Exe_ItinerarySerializer

class Exe_ItinenaryGeneric(generics.RetrieveUpdateDestroyAPIView):
    queryset=Exe_Itinerary.objects.all()
    serializer_class=Exe_ItinerarySerializer

class ListExe_CatGeneric(generics.ListCreateAPIView):
    queryset=ExeCat.objects.all()
    serializer_class=Exe_CatSerializer

class Exe_CatGeneric(generics.RetrieveUpdateDestroyAPIView):
    queryset=ExeCat.objects.all()
    serializer_class=Exe_CatSerializer

class ListExe_AttributeGeneric(generics.ListCreateAPIView):
    queryset=ExeAttribute.objects.all()
    serializer_class=ExeAttributeSerializer

class Exe_AttributeGeneric(generics.RetrieveUpdateDestroyAPIView):
    queryset=ExeAttribute.objects.all()
    serializer_class=ExeAttributeSerializer  

class ListExe_PriceGeneric(generics.ListCreateAPIView):
    queryset=ExePrice.objects.all()
    serializer_class=Exe_PriceSerializer

class Exe_PriceGeneric(generics.RetrieveUpdateDestroyAPIView):
    queryset=ExePrice.objects.all()
    serializer_class=Exe_PriceSerializer