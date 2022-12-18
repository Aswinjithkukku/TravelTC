from django.contrib import admin
from .models import *

# Register your models here.

admin.site.register(Hotel)
admin.site.register(HotelPrice)
admin.site.register(HotelPolicy)
admin.site.register(NewRoomAttribute)
admin.site.register(Attribute)