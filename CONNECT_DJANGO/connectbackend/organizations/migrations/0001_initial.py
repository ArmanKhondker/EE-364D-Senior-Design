# Generated by Django 2.2.6 on 2019-11-19 06:00

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, unique=True)),
                ('primary', models.CharField(max_length=100)),
                ('secondary', models.CharField(max_length=100)),
                ('technical', models.DecimalField(decimal_places=3, max_digits=5)),
                ('professional', models.DecimalField(decimal_places=3, max_digits=5)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
