from django.urls import path
from django.views.decorators.cache import cache_page
from .views import *


urlpatterns = [
    path("exe/",ListExeGeneric.as_view()),
    path("exe/<int:pk>/",cache_page(60*1)(ExeGeneric.as_view())),
    path("faqs/",ListFAQSGeneric.as_view()),
    path("faqs/<int:pk>/",cache_page(60*1)(FAQSGeneric.as_view())),
    path("exe_include/",ListExe_IncludeGeneric.as_view()),
    path("exe_include/<int:pk>/",cache_page(60*1)(Exe_IncludeGeneric.as_view())),
    path("exe_exclude/",ListExe_ExcludeGeneric.as_view()),
    path("exe_exclude/<int:pk>/",cache_page(60*1)(Exe_ExcludeGeneric.as_view())),
    path("exe_iti/",ListExe_ItinenaryGeneric.as_view()),
    path("exe_iti/<int:pk>/",cache_page(60*1)(Exe_ItinenaryGeneric.as_view())),
    path("exe_cat/",ListExe_CatGeneric.as_view()),
    path("exe_cat/<int:pk>/",cache_page(60*1)(Exe_CatGeneric.as_view())),
    path("exe_attri/",ListExe_AttributeGeneric.as_view()),
    path("exe_attri/<int:pk>/",cache_page(60*1)(Exe_AttributeGeneric.as_view())),
    path("exe_price/",ListExe_PriceGeneric.as_view()),
    path("exe_price/<int:pk>/",cache_page(60*1)(Exe_PriceGeneric.as_view())),
]