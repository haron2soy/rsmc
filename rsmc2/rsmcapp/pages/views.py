from django.shortcuts import render

from rest_framework.generics import RetrieveAPIView, ListAPIView
from rest_framework.permissions import AllowAny

from .models import Page
from .serializers import PageSerializer

class PageDetailView(RetrieveAPIView):
    serializer_class = PageSerializer
    permission_classes = [AllowAny]
    lookup_field = "slug"

    def get_queryset(self):
        return Page.objects.filter(is_published=True)


class PageListView(ListAPIView):
    serializer_class = PageSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        return Page.objects.filter(is_published=True)
