from django.contrib import admin
from .models import Project, Certification, About
from .forms import ProjectEntryForm, CertEntryForm, AboutEntryForm


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    model = Project
    form = ProjectEntryForm


@admin.register(Certification)
class CertAdmin(admin.ModelAdmin):
    model = Certification
    form = CertEntryForm


@admin.register(About)
class AboutAdmin(admin.ModelAdmin):
    model = About
    form = AboutEntryForm

    def has_add_permission(self, request):
        MAX_OBJECTS = 1
        if self.model.objects.count() >= MAX_OBJECTS:
            return False
        return super().has_add_permission(request)
