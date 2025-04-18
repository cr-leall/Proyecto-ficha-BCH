# Generated by Django 5.1.6 on 2025-02-27 19:21

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ficha', '0008_parametro_id_pilar'),
    ]

    operations = [
        migrations.RenameField(
            model_name='errores_agravante',
            old_name='id_base',
            new_name='id',
        ),
        migrations.RenameField(
            model_name='errores_agravante',
            old_name='nombre_parametro',
            new_name='nombre_error',
        ),
        migrations.RenameField(
            model_name='parametro',
            old_name='id_parametro',
            new_name='id',
        ),
        migrations.RenameField(
            model_name='parametro',
            old_name='nombre_parametro',
            new_name='nombre',
        ),
        migrations.RenameField(
            model_name='parametro',
            old_name='id_pilar',
            new_name='pilar',
        ),
        migrations.RemoveField(
            model_name='errores_agravante',
            name='puntaje',
        ),
        migrations.RemoveField(
            model_name='errores_agravante',
            name='tipo_cliente',
        ),
        migrations.AddField(
            model_name='parametro',
            name='error_agravante',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='ficha.errores_agravante'),
        ),
        migrations.AlterField(
            model_name='errores_agravante',
            name='nota',
            field=models.DecimalField(decimal_places=1, max_digits=5),
        ),
    ]
