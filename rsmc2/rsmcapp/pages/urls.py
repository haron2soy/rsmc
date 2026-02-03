from django.urls import path
from .views import PageDetailView, PageListView

urlpatterns = [
    path("pages/", PageListView.as_view(), name="page-list"),
    path("pages/<slug:slug>/", PageDetailView.as_view(), name="page-detail"),
]
