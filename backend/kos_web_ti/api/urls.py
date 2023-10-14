from django.urls import path
from .views import AtmsView, OfficesView

app_name = 'api'

urlpatterns = [
    path("atms/", AtmsView.as_view(), name="atms"),
    path("offices/", OfficesView.as_view(), name="officess"),
]
