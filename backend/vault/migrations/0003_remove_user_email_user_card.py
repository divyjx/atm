# Generated by Django 4.2.7 on 2023-11-11 14:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vault', '0002_remove_user_card_user_email'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='email',
        ),
        migrations.AddField(
            model_name='user',
            name='card',
            field=models.CharField(default='1234567891234567', max_length=16, unique=True),
            preserve_default=False,
        ),
    ]
