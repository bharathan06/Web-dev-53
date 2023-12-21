from django.urls import path
from . import views
from .views import LatestProductsList, ProductsByCategory  


urlpatterns = [
    path('latest-products/', views.LatestProductsList.as_view(), name='latest-products'),
    path('api/v1/products-by-category/<slug:category_slug>/', ProductsByCategory.as_view(), name='products-by-category'),

]
