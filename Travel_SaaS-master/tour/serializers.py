from rest_framework import serializers
from .models import * 

class ExeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exe
        fields = ('__all__')

class FAQSSerializer(serializers.ModelSerializer):
    class Meta:
        model = FAQS
        fields = ('__all__')                  

class Exe_IncludeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exe_Include
        fields = ('__all__')

class Exe_ExcludeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exe_Exclude
        fields = ('__all__')

class Exe_ItinerarySerializer(serializers.ModelSerializer):
    class Meta:
        model = Exe_Itinerary
        fields = ('__all__') 

class Exe_CatSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExeCat
        fields = ('__all__') 

class ExeAttributeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExeAttribute
        fields = ('__all__')

class Exe_PriceSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExePrice
        fields = ('__all__')