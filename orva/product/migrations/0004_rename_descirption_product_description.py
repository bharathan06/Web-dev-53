# Generated by Django 4.2.8 on 2023-12-09 11:26

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0003_alter_product_image_alter_product_thumbnail'),
    ]

    operations = [
        migrations.RenameField(
            model_name='product',
            old_name='descirption',
            new_name='description',
        ),
    ]
