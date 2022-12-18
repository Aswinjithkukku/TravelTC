from django.db import models
# from hotel.models import *
# from hotel.models import Hotel
# from tour.models import *
# from tour.models import Exe
# from hotel import models
# from tour import models

# Create your models here.

LANG_DIR = (
    ("left_to_right", "Left to Right"),
    ("right_to_left", "Right to Left"),
)

class User(models.Model):
    name = models.CharField(max_length=50)
    title = models.CharField(max_length=50)
    content = models.TextField(max_length=300)
    
    def __str__(self):
        return self.name 

class Country(models.Model):
    image = models.CharField(max_length=300)
    title = models.CharField(max_length=100)
    country = models.CharField(max_length=50)

    def __str__(self):
        return self.country  

class State(models.Model):
    country_id = models.ForeignKey(Country, on_delete=models.CASCADE)
    state = models.CharField(max_length=50)
    address = models.TextField(max_length=250)
    image = models.CharField(max_length=300, default=None)

    def __str__(self):
        return self.state 

class Category(models.Model):
    title = models.CharField(max_length=100, default=None)
    desc = models.CharField(max_length=300, default=None)
    img = models.CharField(max_length=300, default=None)
    img_title = models.CharField(max_length=150, default=None)

    
    def __str__(self):
        return self.title                          

class Role(models.Model):
    name = models.CharField(max_length=50)
    blog_section = models.BooleanField()
    space_section = models.BooleanField()
    home_page_settings = models.BooleanField()
    email_settings = models.BooleanField()
    lang_section = models.BooleanField()
    user_manage_section = models.BooleanField()
    hotel_section = models.BooleanField()
    car_section = models.BooleanField()
    payment_settings = models.BooleanField()
    social_settings = models.BooleanField()
    seo_tools = models.BooleanField()
    manage_role_section = models.BooleanField()
    tour_section = models.BooleanField()
    general_settings_section = models.BooleanField()
    menu_page_section = models.BooleanField()
    location_section = models.BooleanField()
    manage_staff_section = models.BooleanField()
    subscriber_section = models.BooleanField()

    def __str__(self):
        return self.name 

class Staff(models.Model):
    image = models.CharField(max_length=300)
    name = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    phone = models.CharField(max_length=50)
    password = models.CharField(max_length=50)
    role = models.CharField(max_length=50)

    def __str__(self):
        return self.name 

class AdminLanguage(models.Model):
    lang_name = models.CharField(max_length=50)
    lang_direction = models.CharField(max_length=30, choices=LANG_DIR, default='left_to_right')
    lang_key = models.CharField(max_length=20)
    lang_value = models.CharField(max_length=20)

    def __str__(self):
        return self.lang_name      

class WebsiteLanguage(models.Model):
    lang_name = models.CharField(max_length=50)
    lang_direction = models.CharField(max_length=30, choices=LANG_DIR, default='left_to_right')
    lang_key = models.CharField(max_length=20)
    lang_value = models.CharField(max_length=20)

    def __str__(self):
        return self.lang_name    

class Slider(models.Model):
    title = models.CharField(max_length=50)
    details = models.CharField(max_length=300)
    img = models.CharField(max_length=300)
    button_name = models.CharField(max_length=100)
    button_link = models.CharField(max_length=100)

    def __str__(self):
        return self.title  

class Member(models.Model):
    name = models.CharField(max_length=50)
    designation = models.CharField(max_length=30)
    img = models.CharField(max_length=300)
    message = models.TextField(max_length=500)

    def __str__(self):
        return self.name

class MemberBackgroud(models.Model):
    member_id = models.ForeignKey(Member, on_delete=models.CASCADE)
    img = models.CharField(max_length=300)
    
    def __str__(self):
        return self.name     

class EmailTemplate(models.Model):
    email_type = models.CharField(max_length=50)
    email_subject = models.CharField(max_length=100)
    email_body = models.TextField(max_length=300)
    
    def __str__(self):
        return self.email_type     

class EmailConfiguration(models.Model):
    smtp = models.BooleanField()
    smtp_host = models.CharField(max_length=20)
    smtp_port = models.TextField(max_length=7)
    smtp_username = models.CharField(max_length=20)
    smtp_password = models.CharField(max_length=20)
    from_email = models.CharField(max_length=20)
    from_name = models.CharField(max_length=20)

    def __str__(self):
        return self.smtp_host    

class GeneralSetting(models.Model):
    header_logo = models.CharField(max_length=300)
    footer_logo = models.CharField(max_length=300)
    favicon = models.CharField(max_length=300)
    breadcumb_banner = models.CharField(max_length=300)
    website_title = models.CharField(max_length=200)
    theme_color = models.CharField(max_length=150)
    secondary_color = models.CharField(max_length=150)
    sign_up_verification = models.BooleanField()
    disqus = models.BooleanField()
    disqus_website_name = models.CharField(max_length=250)
    footer_text = models.TextField(max_length=300)
    copyright_text = models.TextField(max_length=300)
    error_img = models.CharField(max_length=300)
    error_title = models.TextField(max_length=100)
    error_text = models.TextField(max_length=100)

    def __str__(self):
        return self.website_title  

class PaymentGateway(models.Model):
    name = models.CharField(max_length=50)
    desc = models.CharField(max_length=400)
    
    def __str__(self):
        return self.name                   

class Currency(models.Model):
    name = models.CharField(max_length=50)
    sign = models.CharField(max_length=50)
    value = models.CharField(max_length=50)
    img = models.CharField(max_length=300, default=None)

    def __str__(self):
        return self.name

class WithdrawMethod(models.Model):
    name = models.CharField(max_length=50)
    
    def __str__(self):
        return self.name       

class FAQPage(models.Model):
    title = models.CharField(max_length=100)
    details = models.CharField(max_length=300)

    def __str__(self):
        return self.name          

class NewPagefaq(models.Model):
    title = models.CharField(max_length=100)
    slug = models.CharField(max_length=100)
    details = models.CharField(max_length=500)
    allow_seo_page = models.CharField(max_length=100)
    meta_tag = models.CharField(max_length=100)
    meta_desc = models.CharField(max_length=100)

    def __str__(self):
        return self.name          

class BlogCat(models.Model):
    name = models.CharField(max_length=50)
    slug = models.CharField(max_length=50)

    def __str__(self):
        return self.name  

class BlogPost(models.Model):
    title = models.CharField(max_length=100)
    category = models.CharField(max_length=100)
    thumbnail = models.CharField(max_length=300)
    tags = models.CharField(max_length=300)
    desc = models.CharField(max_length=300)
    source = models.CharField(max_length=300)
    allow_blog_seo = models.CharField(max_length=300)
    meta_tag = models.CharField(max_length=100)
    meta_desc = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Attendance(models.Model):
    user_name = models.ForeignKey(User, on_delete=models.CASCADE)
    check_in = models.DateTimeField()
    check_out = models.DateTimeField()
    total_hours = models.IntegerField()

    def __str__(self):
        return self.user_name      

class IP_Address(models.Model):
    ip = models.CharField(max_length=50)

    def __str__(self):
        return self.ip  

class Logo(models.Model):
    title = models.CharField(max_length=50)
    img = models.CharField(max_length=300)

    def __str__(self):
        return self.title     

class LandingPage(models.Model):
    title = models.CharField(max_length=100)
    img = models.CharField(max_length=300)
    desc = models.CharField(max_length=350)

    def __str__(self):
        return self.title   

class SectionFeature(models.Model):
    title = models.CharField(max_length=100)
    icon = models.CharField(max_length=300)
    subtitle = models.CharField(max_length=250)
    paragraph = models.CharField(max_length=300)

    def __str__(self):
        return self.title     

class SectionActivity(models.Model):
    title = models.CharField(max_length=100)


    def __str__(self):
        return self.title       

class SectionTour(models.Model):
    section_id = models.ForeignKey(SectionActivity, on_delete=models.CASCADE)
    tour_id = models.ForeignKey("tour.Exe", on_delete=models.CASCADE)

    def __str__(self):
        return self.section_id

class SectionHotel(models.Model):
    section_id = models.ForeignKey(SectionActivity, on_delete=models.CASCADE)
    hotel_id = models.ForeignKey("hotel.Hotel", on_delete=models.CASCADE)

    def __str__(self):
        return self.section_id      

class Blog(models.Model):
    title = models.CharField(max_length=100)
    img = models.CharField(max_length=300)
    desc = models.CharField(max_length=250)
    date = models.DateTimeField()

    def __str__(self):
        return self.title

class NearbyDestination(models.Model):
    title = models.CharField(max_length=100)
    img = models.CharField(max_length=300)
    desc = models.CharField(max_length=250)

    def __str__(self):
        return self.title

class Footer(models.Model):
    row_title = models.CharField(max_length=100)
    row_subtitle = models.CharField(max_length=300)
    link = models.CharField(max_length=250)
    footer_logo = models.CharField(max_length=300)
    footer_desc = models.CharField(max_length=300)

    def __str__(self):
        return self.row_title      

class Helpline(models.Model):
    number_1 = models.CharField(max_length=20)
    number_2 = models.CharField(max_length=20)
    whatsapp_no = models.CharField(max_length=20)
    email = models.CharField(max_length=50)
    
    def __str__(self):
        return self.number_1

class Banner(models.Model):
    img = models.CharField(max_length=300)
    link = models.CharField(max_length=300)

    def __str__(self):
        return self.link

