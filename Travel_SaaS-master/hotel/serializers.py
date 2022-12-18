from rest_framework import serializers
from .models import *

class HotelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hotel
        fields = ('__all__')

class HotelPriceSerializer(serializers.ModelSerializer):
    class Meta:
        model = HotelPrice
        fields = ('__all__')    

class HotelPolicySerializer(serializers.ModelSerializer):
    class Meta:
        model = HotelPolicy
        fields = ('__all__')   

class NewRoomAttributeSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewRoomAttribute
        fields = ('__all__')    

class AttributeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Attribute
        fields = ('__all__')        