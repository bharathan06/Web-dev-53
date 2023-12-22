from django.conf import settings 
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api/v1/', include('djoser.urls')),  # Use 'djoser.urls' for authentication
    path('api/v1/token/', include('djoser.urls.authtoken')),  # Use 'djoser.urls.authtoken' for token-based authentication
    path('api/v1/', include('product.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
