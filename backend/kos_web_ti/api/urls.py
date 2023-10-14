from django.urls import path
from .views import TestView, AtmsView, OfficesView

app_name = 'api'

urlpatterns = [
    path("index/", TestView.as_view(), name="index"),
    path("atms/", AtmsView.as_view(), name="atms"),
    path("offices/", OfficesView.as_view(), name="officess"),
]
