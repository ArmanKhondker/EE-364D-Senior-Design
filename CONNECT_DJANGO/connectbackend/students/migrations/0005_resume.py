# Generated by Django 2.2.6 on 2020-04-14 03:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('students', '0004_auto_20200411_1818'),
    ]

    operations = [
        migrations.CreateModel(
            name='Resume',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('unique_id', models.CharField(max_length=100, null=True, unique=True)),
                ('data', models.TextField()),
            ],
        ),
    ]
