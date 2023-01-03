from django.db import models
from multiselectfield import MultiSelectField
from django.contrib.auth import get_user_model


class Project(models.Model):
    PROJECT_TAGS = [
        ('PY', 'Python'),
        ('DJA', 'Django'),
        ('JS', 'JavaScript'),
        ('PG', 'Postgres'),
        ('SQL', 'SQLite'),
        ('OOP', 'Object Oriented Programming'),
        ('AUTH', 'Authentication'),
        ('ECRP', 'Encryption'),
        ('TCSS', 'Tailwind CSS'),

    ]
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    project_name = models.CharField(max_length=50, unique=True)
    project_tags = MultiSelectField(choices=PROJECT_TAGS, max_choices=10, max_length=50)
    project_description = models.TextField()
    image = models.ImageField()
    animate_image = models.ImageField()
    github_link = models.URLField(max_length=200)
    live_link = models.URLField(max_length=200)


class Certification(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    cert_image = models.ImageField()
    cert_name = models.CharField(max_length=75, unique=True)
    cert_description = models.TextField()
    cert_link = models.URLField(max_length=200)


class About(models.Model):
    about = models.TextField()
