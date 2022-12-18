from django.contrib import admin
from .models import *

# Register your models here.

admin.site.register(Exe)
admin.site.register(FAQS)
admin.site.register(Exe_Include)
admin.site.register(Exe_Exclude)
admin.site.register(Exe_Itinerary)
admin.site.register(ExeCat)
admin.site.register(ExeAttribute)
admin.site.register(ExePrice)