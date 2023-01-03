from .models import Project, Certification, About
from rest_framework import serializers


class ProjectSerializer(serializers.ModelSerializer):
    project_tags = serializers.SerializerMethodField()

    class Meta:
        model = Project
        fields = '__all__'

    def get_project_tags(self, obj):
        return obj.get_project_tags_display()

    def create(self, validated_data): 
        return Project.objects.create(**validated_data)


class CertificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Certification
        fields = '__all__'


class AboutSerializer(serializers.ModelSerializer):
    class Meta:
        model = About
        fields = '__all__'

    def create(self, validated_data): 
        return Project.objects.create(**validated_data)
