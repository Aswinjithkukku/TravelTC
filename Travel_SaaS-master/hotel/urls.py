from django.urls import path
from django.views.decorators.cache import cache_page
from .views import *

urlpatterns = [
    path("hotel/",ListHotelGeneric.as_view()),
    path("hotel/<int:pk>/",cache_page(60*1)(HotelGeneric.as_view())),
    path("hotelprice/",ListHotelPriceGeneric.as_view()),
    path("hotelprice/<int:pk>/",cache_page(60*1)(HotelPriceGeneric.as_view())),
    path("hotelpolicy/",ListHotelPolicyGeneric.as_view()),
    path("hotelpolicy/<int:pk>/",cache_page(60*1)(HotelPolicyGeneric.as_view())),
    path("newroomattri/",ListNewRoomAttributeGeneric.as_view()),
    path("newroomattri/<int:pk>/",cache_page(60*1)(NewRoomAttributeGeneric.as_view())),
    path("attribute/",ListAttributeGeneric.as_view()),
    path("attribute/<int:pk>/",cache_page(60*1)(AttributeGeneric.as_view())),
]