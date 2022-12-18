from django.shortcuts import render
from rest_framework import generics
import requests
from django.http import HttpResponse
from .models import *
from .serializers import *
from django.shortcuts import render
import razorpay
from django.views.decorators.csrf import csrf_exempt

# Create your views here.

class ListUserGeneric(generics.ListCreateAPIView):
    queryset=User.objects.all()
    serializer_class=UserSerializer


class UserGeneric(generics.RetrieveUpdateDestroyAPIView):
    queryset=User.objects.all()
    serializer_class=UserSerializer   
    
class ListCountryGeneric(generics.ListCreateAPIView):
    queryset=Country.objects.all()
    serializer_class=CountrySerializer

class CountryGeneric(generics.RetrieveUpdateDestroyAPIView):
    queryset=Country.objects.all()
    serializer_class=CountrySerializer

class ListStateGeneric(generics.ListCreateAPIView):
    queryset=State.objects.all()
    serializer_class=StateSerializer

class StateGeneric(generics.RetrieveUpdateDestroyAPIView):
    queryset=State.objects.all()
    serializer_class=StateSerializer  

class ListCategoryGeneric(generics.ListCreateAPIView):
    queryset=Category.objects.all()
    serializer_class=CategorySerializer

class CategoryGeneric(generics.RetrieveUpdateDestroyAPIView):
    queryset=Category.objects.all()
    serializer_class=CategorySerializer   

class ListRoleGeneric(generics.ListCreateAPIView):
    queryset=Role.objects.all()
    serializer_class=RoleSerializer

class RoleGeneric(generics.RetrieveUpdateDestroyAPIView):
    queryset=Role.objects.all()
    serializer_class=RoleSerializer  

class ListStaffGeneric(generics.ListCreateAPIView):
    queryset=Staff.objects.all()
    serializer_class=StaffSerializer

class StaffGeneric(generics.RetrieveUpdateDestroyAPIView):
    queryset=Staff.objects.all()
    serializer_class=StaffSerializer

class ListAdminLanguageGeneric(generics.ListCreateAPIView):
    queryset=AdminLanguage.objects.all()
    serializer_class=AdminLanguageSerializer

class AdminLanguageGeneric(generics.RetrieveUpdateDestroyAPIView):
    queryset=AdminLanguage.objects.all()
    serializer_class=AdminLanguageSerializer

class ListWebsiteLanguageGeneric(generics.ListCreateAPIView):
    queryset=WebsiteLanguage.objects.all()
    serializer_class=WebsiteLanguageSerializer

class WebsiteLanguageGeneric(generics.RetrieveUpdateDestroyAPIView):
    queryset=WebsiteLanguage.objects.all()
    serializer_class=WebsiteLanguageSerializer

class ListSliderGeneric(generics.ListCreateAPIView):
    queryset=Slider.objects.all()
    serializer_class=SliderSerializer

class SliderGeneric(generics.RetrieveUpdateDestroyAPIView):
    queryset=Slider.objects.all()
    serializer_class=SliderSerializer

class ListMemberGeneric(generics.ListCreateAPIView):
    queryset=Member.objects.all()
    serializer_class=MemberSerializer

class MemberGeneric(generics.RetrieveUpdateDestroyAPIView):
    queryset=Member.objects.all()
    serializer_class=MemberSerializer 

class ListMemberBackgroundGeneric(generics.ListCreateAPIView):
    queryset=MemberBackgroud.objects.all()
    serializer_class=MemberBackgroundSerializer

class MemberBackgroundGeneric(generics.RetrieveUpdateDestroyAPIView):
    queryset=MemberBackgroud.objects.all()
    serializer_class=MemberBackgroundSerializer       

class ListEmailTemplateGeneric(generics.ListCreateAPIView):
    queryset=EmailTemplate.objects.all()
    serializer_class=EmailTemplateSerializer

class EmailTemplateGeneric(generics.RetrieveUpdateDestroyAPIView):
    queryset=EmailTemplate.objects.all()
    serializer_class=EmailTemplateSerializer

class ListEmailConfigurationGeneric(generics.ListCreateAPIView):
    queryset=EmailConfiguration.objects.all()
    serializer_class=EmailConfigurationSerializer

class EmailConfigurationGeneric(generics.RetrieveUpdateDestroyAPIView):
    queryset=EmailConfiguration.objects.all()
    serializer_class=EmailConfigurationSerializer

class ListGeneralSettingGeneric(generics.ListCreateAPIView):
    queryset=GeneralSetting.objects.all()
    serializer_class=GeneralSettingSerializer

class GeneralSettingGeneric(generics.RetrieveUpdateDestroyAPIView):
    queryset=GeneralSetting.objects.all()
    serializer_class=GeneralSettingSerializer

class ListPaymentGatewayGeneric(generics.ListCreateAPIView):
    queryset=PaymentGateway.objects.all()
    serializer_class=PaymentGatewaySerializer

class PaymentGatewayGeneric(generics.RetrieveUpdateDestroyAPIView):
    queryset=PaymentGateway.objects.all()
    serializer_class=PaymentGatewaySerializer 

class ListCurrencyGeneric(generics.ListCreateAPIView):
    queryset=Currency.objects.all()
    serializer_class=CurrencySerializer

class CurrencyGeneric(generics.RetrieveUpdateDestroyAPIView):
    queryset=Currency.objects.all()
    serializer_class=CurrencySerializer

class ListWithdrawMethodGeneric(generics.ListCreateAPIView):
    queryset=WithdrawMethod.objects.all()
    serializer_class=WithdrawMethodSerializer

class WithdrawMethodGeneric(generics.RetrieveUpdateDestroyAPIView):
    queryset=WithdrawMethod.objects.all()
    serializer_class=WithdrawMethodSerializer

class ListFAQPageGeneric(generics.ListCreateAPIView):
    queryset=FAQPage.objects.all()
    serializer_class=FAQSPageSerializer

class FAQPageGeneric(generics.RetrieveUpdateDestroyAPIView):
    queryset=FAQPage.objects.all()
    serializer_class=FAQSPageSerializer

class ListNewPagefaqGeneric(generics.ListCreateAPIView):
    queryset=NewPagefaq.objects.all()
    serializer_class=NewPagefaqSerializer

class NewPagefaqGeneric(generics.RetrieveUpdateDestroyAPIView):
    queryset=NewPagefaq.objects.all()
    serializer_class=NewPagefaqSerializer 

class ListBlogCatGeneric(generics.ListCreateAPIView):
    queryset=BlogCat.objects.all()
    serializer_class=BlogCatSerializer

class BlogCatGeneric(generics.RetrieveUpdateDestroyAPIView):
    queryset=BlogCat.objects.all()
    serializer_class=BlogCatSerializer

class ListBlogPostGeneric(generics.ListCreateAPIView):
    queryset=BlogPost.objects.all()
    serializer_class=BlogPostSerializer

class BlogPostGeneric(generics.RetrieveUpdateDestroyAPIView):
    queryset=BlogPost.objects.all()
    serializer_class=BlogPostSerializer    


def index(request):
    ip_request = requests.get('https://ipinfo.io/json')
    ip_add = str(ip_request.json()['ip'])
    print(ip_add)
    context = {'ip_add' : ip_add,
               }

    return HttpResponse(ip_add)  

class ListLogoGeneric(generics.ListCreateAPIView):
    queryset=Logo.objects.all()
    serializer_class=LogoSerializer

class LogoGeneric(generics.RetrieveUpdateDestroyAPIView):
    queryset=Logo.objects.all()
    serializer_class=LogoSerializer

class ListLandingPageGeneric(generics.ListCreateAPIView):
    queryset=LandingPage.objects.all()
    serializer_class=LandingPageSerializer

class LandingPageGeneric(generics.RetrieveUpdateDestroyAPIView):
    queryset=LandingPage.objects.all()
    serializer_class=LandingPageSerializer

class ListSectionActivityGeneric(generics.ListCreateAPIView):
    queryset=SectionActivity.objects.all()
    serializer_class=SectionActivitySerializer

class SectionActivityGeneric(generics.RetrieveUpdateDestroyAPIView):
    queryset=SectionActivity.objects.all()
    serializer_class=SectionActivitySerializer

class ListSectionTourGeneric(generics.ListCreateAPIView):
    queryset=SectionTour.objects.all()
    serializer_class=SectionTourSerializer

class SectionTourGeneric(generics.RetrieveUpdateDestroyAPIView):
    queryset=SectionTour.objects.all()
    serializer_class=SectionTourSerializer

class ListSectionHotelGeneric(generics.ListCreateAPIView):
    queryset=SectionHotel.objects.all()
    serializer_class=SectionHotelSerializer

class SectionHotelGeneric(generics.RetrieveUpdateDestroyAPIView):
    queryset=SectionHotel.objects.all()
    serializer_class=SectionHotelSerializer

class ListSectionFeatureGeneric(generics.ListCreateAPIView):
    queryset=SectionFeature.objects.all()
    serializer_class=SectionFeatureSerializer

class SectionFeatureGeneric(generics.RetrieveUpdateDestroyAPIView):
    queryset=SectionFeature.objects.all()
    serializer_class=SectionFeatureSerializer

class ListBlogGeneric(generics.ListCreateAPIView):
    queryset=Blog.objects.all()
    serializer_class=BlogSerializer

class BlogGeneric(generics.RetrieveUpdateDestroyAPIView):
    queryset=Blog.objects.all()
    serializer_class=BlogSerializer 

class ListNearbyDestinationGeneric(generics.ListCreateAPIView):
    queryset=NearbyDestination.objects.all()
    serializer_class=NearbyDestinationSerializer

class NearbyDestinationGeneric(generics.RetrieveUpdateDestroyAPIView):
    queryset=NearbyDestination.objects.all()
    serializer_class=NearbyDestinationSerializer

class ListFooterGeneric(generics.ListCreateAPIView):
    queryset=Footer.objects.all()
    serializer_class=FooterSerializer

class FooterGeneric(generics.RetrieveUpdateDestroyAPIView):
    queryset=Footer.objects.all()
    serializer_class=FooterSerializer

class ListHelplineGeneric(generics.ListCreateAPIView):
    queryset=Helpline.objects.all()
    serializer_class=HelplineSerializer

class HelplineGeneric(generics.RetrieveUpdateDestroyAPIView):
    queryset=Helpline.objects.all()
    serializer_class=HelplineSerializer

class ListBannerGeneric(generics.ListCreateAPIView):
    queryset=Banner.objects.all()
    serializer_class=BannerSerializer

class BannerGeneric(generics.RetrieveUpdateDestroyAPIView):
    queryset=Banner.objects.all()
    serializer_class=BannerSerializer 

def home(request):
    if request.method == "POST":
        name = request.POST.get('name')
        amount = 50000

        client = razorpay.Client(
            auth=("rzp_test_9nmrK825fjo0Ym", "1f1icPZDRCKvac3lzpOmLSl1"))

        payment = client.order.create({'amount': amount, 'currency': 'INR',
                                       'payment_capture': '1'})
    return render(request, 'index.html')

@csrf_exempt
def success(request):
    return render(request, "success.html")                