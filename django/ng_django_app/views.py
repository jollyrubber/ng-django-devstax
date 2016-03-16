from rest_framework import generics
from django.contrib.auth.models import User

from ng_django_app.serializers import UserSerializer

class UserListView(generics.ListAPIView):

    queryset = User.objects.all()
    serializer_class = UserSerializer
