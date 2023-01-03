from django.forms import ModelForm
from api.models import Project, Certification, About


class ProjectEntryForm(ModelForm):
    class Meta:
        model = Project
        fields = '__all__'


class CertEntryForm(ModelForm):
    class Meta:
        model = Certification
        fields = '__all__'


class AboutEntryForm(ModelForm):
    class Meta:
        model = About
        fields = '__all__'
