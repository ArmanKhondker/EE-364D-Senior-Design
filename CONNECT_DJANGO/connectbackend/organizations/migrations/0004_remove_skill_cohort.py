# Generated by Django 2.2.10 on 2020-03-07 23:42

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('organizations', '0003_skill'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='skill',
            name='cohort',
        ),
    ]