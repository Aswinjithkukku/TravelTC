from django.db import models
# from general.models import Category, State, User
# from general.models import Country

# Create your models here.

SEO_SEARCH_CHOICES = (
    ("yes", "Yes"),
    ("no", "No"),
)

PUBLISH_CHOICES = (
    ("publish", "Publish"),
    ("draft", "Draft"),
)

EXE_PRICING_FREQ = (
    ("one_time", "One Time"),
    ("per_day", "Per Day"),
)


class Exe(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField(max_length=250)
    category = models.ForeignKey("general.Category", on_delete=models.CASCADE)
    youtube_link = models.CharField(max_length=300)
    duration = models.IntegerField()
    min_people = models.CharField(max_length=50)
    max_people = models.CharField(max_length=50)
    # faq_title = models.CharField(max_length=50)
    # faq_content = models.CharField(max_length=50)
    # include_title = models.CharField(max_length=50)
    # exclude_title = models.CharField(max_length=50)
    banner_image = models.CharField(max_length=300)
    country = models.ForeignKey("general.Country", on_delete=models.CASCADE)
    state = models.ForeignKey("general.State", on_delete=models.CASCADE)
    address = models.CharField(max_length=300)
    current_price = models.IntegerField()
    previous_price = models.IntegerField()
    discount = models.IntegerField()
    seo_seach_engine = models.CharField(max_length=5, choices=SEO_SEARCH_CHOICES, default='yes')
    seo_meta_title = models.CharField(max_length=100)
    seo_meta_tag = models.CharField(max_length=100)
    seo_desc = models.TextField(max_length=250)
    user_settings = models.ForeignKey("general.User", on_delete=models.CASCADE)
    availability = models.BooleanField()
    wifi = models.BooleanField()
    gym = models.BooleanField()
    mountain_bike = models.BooleanField()
    sat_office = models.BooleanField()
    staff_lounge = models.BooleanField()
    golf_cages = models.BooleanField()
    aerobics = models.BooleanField()
    cultural = models.BooleanField()
    nature_adventure = models.BooleanField()
    marine = models.BooleanField()
    independent = models.BooleanField()
    activities = models.BooleanField()
    festival_events = models.BooleanField()
    special_interests = models.BooleanField()
    feature_image = models.CharField(max_length=300)
    publish = models.CharField(max_length=50, choices=PUBLISH_CHOICES, default='publish')
    
    def __str__(self):
        return self.title        

class FAQS(models.Model):
    exe_id = models.ForeignKey(Exe, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    content = models.CharField(max_length=300)
    
    def __str__(self):
        return self.title       

class Exe_Include(models.Model):
    exe_id = models.ForeignKey(Exe, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    
    def __str__(self):
        return self.title        

class Exe_Exclude(models.Model):
    exe_id = models.ForeignKey(Exe, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    
    def __str__(self):
        return self.title       

class Exe_Itinerary(models.Model):
    exe_id = models.ForeignKey(Exe, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    desc = models.CharField(max_length=300)
    content = models.TextField(max_length=300)
    
    def __str__(self):
        return self.title                             


class ExeCat(models.Model):
    name = models.CharField(max_length=100)
    slug = models.CharField(max_length=100)
    
    def __str__(self):
        return self.name     

class ExeAttribute(models.Model):
    name = models.CharField(max_length=50)
    
    def __str__(self):
        return self.name  

class ExePrice(models.Model):
    exe_name = models.CharField(max_length=100)
    exe_price_id = models.ForeignKey(Exe, on_delete=models.CASCADE)
    current_price = models.CharField(max_length=300)
    previous_price = models.CharField(max_length=300)
    discount = models.CharField(max_length=300)
    person_type = models.CharField(max_length=300)
    min_age = models.IntegerField()
    max_age = models.IntegerField()
    person_price = models.IntegerField()
    extra_price_name = models.CharField(max_length=20)
    extra_price = models.IntegerField()
    freq = models.CharField(max_length=10, choices=EXE_PRICING_FREQ, default='one_time')
    
    def __str__(self):
        return self.exe_name
