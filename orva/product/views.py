from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView
from rest_framework.response import Response

from .models import Product
from .serializers import ProductSerializer


class LatestProductsList(APIView):
    def get(self, request, format=None):
        products = Product.objects.all()[0:4]
        serializer = ProductSerializer(products, many=True)
        return JsonResponse(serializer.data, safe=False)
    

class ProductsByCategory(ListAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        category_slug = self.kwargs['category_slug']
        category = render(category, slug=category_slug)
        return Product.objects.filter(category=category)