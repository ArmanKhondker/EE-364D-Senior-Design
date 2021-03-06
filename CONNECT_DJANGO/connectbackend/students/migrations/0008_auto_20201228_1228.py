# Generated by Django 2.2.6 on 2020-12-28 18:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('students', '0007_auto_20201228_1202'),
    ]

    operations = [
        migrations.RenameField(
            model_name='student',
            old_name='degree',
            new_name='school',
        ),
        migrations.AddField(
            model_name='student',
            name='hear',
            field=models.CharField(default='NA', max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='student',
            name='other_availability',
            field=models.TextField(blank=True, max_length=500),
        ),
    ]
