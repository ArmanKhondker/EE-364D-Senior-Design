# Generated by Django 2.2.6 on 2020-12-28 18:02

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('students', '0006_resume_student_number'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='student',
            name='prof_courses',
        ),
        migrations.RemoveField(
            model_name='student',
            name='tech_courses',
        ),
    ]
