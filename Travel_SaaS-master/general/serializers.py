from rest_framework import serializers
from .models import *

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('__all__')        

class CountrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Country
        fields = ('__all__')    

class StateSerializer(serializers.ModelSerializer):
    class Meta:
        model = State
        fields = ('__all__')               

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('__all__')          

class RoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Role
        fields = ('__all__')        

class StaffSerializer(serializers.ModelSerializer):
    class Meta:
        model = Staff
        fields = ('__all__') 

class AdminLanguageSerializer(serializers.ModelSerializer):
    class Meta:
        model = AdminLanguage
        fields = ('__all__') 

class WebsiteLanguageSerializer(serializers.ModelSerializer):
    class Meta:
        model = WebsiteLanguage
        fields = ('__all__') 

class SliderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Slider
        fields = ('__all__') 

class MemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = ('__all__') 

class MemberBackgroundSerializer(serializers.ModelSerializer):
    class Meta:
        model = MemberBackgroud
        fields = ('__all__') 

class EmailTemplateSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmailTemplate
        fields = ('__all__')     

class EmailConfigurationSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmailConfiguration
        fields = ('__all__')    

class GeneralSettingSerializer(serializers.ModelSerializer):
    class Meta:
        model = GeneralSetting
        fields = ('__all__')

class PaymentGatewaySerializer(serializers.ModelSerializer):
    class Meta:
        model = PaymentGateway
        fields = ('__all__')  

class CurrencySerializer(serializers.ModelSerializer):
    class Meta:
        model = Currency
        fields = ('__all__') 

class WithdrawMethodSerializer(serializers.ModelSerializer):
    class Meta:
        model = WithdrawMethod
        fields = ('__all__')  

class FAQSPageSerializer(serializers.ModelSerializer):
    class Meta:
        model = FAQPage
        fields = ('__all__')

class NewPagefaqSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewPagefaq
        fields = ('__all__')

class BlogCatSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogCat
        fields = ('__all__')

class BlogPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPost
        fields = ('__all__')  

class LogoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Logo
        fields = ('__all__')

class LandingPageSerializer(serializers.ModelSerializer):
    class Meta:
        model = LandingPage
        fields = ('__all__')

class SectionActivitySerializer(serializers.ModelSerializer):
    class Meta:
        model = SectionActivity
        fields = ('__all__')   

class SectionTourSerializer(serializers.ModelSerializer):
    class Meta:
        model = SectionTour
        fields = ('__all__')

class SectionHotelSerializer(serializers.ModelSerializer):
    class Meta:
        model = SectionHotel
        fields = ('__all__')

class SectionFeatureSerializer(serializers.ModelSerializer):
    class Meta:
        model = SectionFeature
        fields = ('__all__')  

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = ('__all__')

class NearbyDestinationSerializer(serializers.ModelSerializer):
    class Meta:
        model = NearbyDestination
        fields = ('__all__')     

class FooterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Footer
        fields = ('__all__')

class HelplineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Helpline
        fields = ('__all__')

class BannerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Banner
        fields = ('__all__')                                                                                          