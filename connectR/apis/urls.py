from django.urls import path
from . import views

urlpatterns = [
    path('get/', views.getData, name='getData'),
    path('post/', views.postData, name='postData'),

]
