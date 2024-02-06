from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User
from .serializers import UserSerializer



class UserRegistrationAPIView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def perform_create(self, serializer):
        user = serializer.save()
        token = Token.objects.create(user=user)
        response_data = UserSerializer(user).data
        response_data['token'] = token.key
        return Response(response_data, status=status.HTTP_201_CREATED)


class RegistrationAPIView(APIView):
    def post(self, request):
        print(request.data)  # This will print the request data to the console
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Registration successful'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
