from django.urls import path
from . import views

urlpatterns = [
    path('latest-products/', views.LatestProductsList.as_view(), name='latest-products'),

]
