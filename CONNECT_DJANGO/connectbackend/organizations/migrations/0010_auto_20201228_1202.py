# Generated by Django 2.2.6 on 2020-12-28 18:02

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('organizations', '0009_auto_20200411_1818'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Degree',
            new_name='School',
        ),
        migrations.DeleteModel(
            name='ProfCourse',
        ),
        migrations.DeleteModel(
            name='TechCourse',
        ),
        migrations.RenameField(
            model_name='project',
            old_name='degree',
            new_name='school',
        ),
        migrations.RemoveField(
            model_name='project',
            name='prof_courses',
        ),
        migrations.RemoveField(
            model_name='project',
            name='tech_courses',
        ),
    ]
