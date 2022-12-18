from django.db import models
# from general.models import *
# from general.models import Country
# from general.models import User

# Create your models here.

PUBLISH_CHOICES = (
    ("publish", "Publish"),
    ("draft", "Draft"),
)

class Hotel(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(max_length=300)
    videolink = models.CharField(max_length=300)
    banner_image = models.CharField(max_length=300)
    country = models.ForeignKey("general.Country", on_delete=models.CASCADE)
    state = models.ForeignKey("general.State", on_delete=models.CASCADE)
    address = models.CharField(max_length=300)
    hotel_rating_standard = models.CharField(max_length=300)
    # policy_title = models.CharField(max_length=300)
    # policy_content = models.CharField(max_length=300)
    # current_price = models.IntegerField()
    # previous_price = models.IntegerField()
    # discount = models.IntegerField()
    seo_search_engine = models.BooleanField()
    seo_meta_title = models.CharField(max_length=100)
    seo_meta_tag = models.CharField(max_length=100)
    seo_desc = models.TextField(max_length=250)
    user_settings = models.ForeignKey("general.User", on_delete=models.CASCADE)
    availability = models.BooleanField()
    havana_lobby = models.BooleanField()
    fiesta_rest = models.BooleanField()
    hotel_transport = models.BooleanField()
    free_luggage = models.BooleanField()
    loundry = models.BooleanField()
    pets = models.BooleanField()
    ticket = models.BooleanField()
    car_hire = models.BooleanField()
    bicycle_hire = models.BooleanField()
    flat_tv = models.BooleanField()
    internet_wifi = models.BooleanField()
    coffee_tea = models.BooleanField()
    loundry_dry = models.BooleanField()
    motels = models.BooleanField()
    resorts = models.BooleanField()
    lodges = models.BooleanField()
    swimming_pool = models.BooleanField()
    feature_image = models.CharField(max_length=300)
    publish = models.CharField(max_length=10, choices=PUBLISH_CHOICES, default='publish')

    def __str__(self):
        return self.title

class HotelPrice(models.Model):
    hotel_name = models.CharField(max_length=100)
    hotel_price_id = models.ForeignKey(Hotel, on_delete=models.CASCADE)
    current_price = models.CharField(max_length=300)
    previous_price = models.CharField(max_length=300)
    discount = models.CharField(max_length=300)
    
    def __str__(self):
        return self.hotel_name 


class HotelPolicy(models.Model):
    hotel_id = models.ForeignKey(Hotel, on_delete=models.CASCADE)
    title = models.CharField(max_length=300)
    content = models.CharField(max_length=300)
    
    def __str__(self):
        return self.title 

class NewRoomAttribute(models.Model):
    name = models.CharField(max_length=100)
    
    def __str__(self):
        return self.name 

class Attribute(models.Model):
    name = models.CharField(max_length=100)
    
    def __str__(self):
        return self.name