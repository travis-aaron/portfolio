from rest_framework import viewsets, filters
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .serializers import ProjectSerializer, CertificationSerializer, AboutSerializer
from .models import Project, Certification, About


class ProjectView(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticatedOrReadOnly,)

    serializer_class = ProjectSerializer
    queryset = Project.objects.all()
    filter_backends = [filters.OrderingFilter]


class CertificationView(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticatedOrReadOnly,)

    serializer_class = CertificationSerializer
    queryset = Certification.objects.all()


class AboutView(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticatedOrReadOnly,)

    serializer_class = AboutSerializer
    queryset = About.objects.all()
