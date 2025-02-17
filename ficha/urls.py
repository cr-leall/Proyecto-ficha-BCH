from django.contrib import admin
from django.urls import path
from .views import login, base, index, registro, gestion_otorga, depuracion_antece, ingreso_datos, buscar, listar_ejec, reporte

urlpatterns = [
    path('', login, name='login'),
    path('registro/', registro, name='registro'),
    path('base/', base, name='base'),
    path('index/', index, name='index'),
    path('gestion_otorga/', gestion_otorga, name='gestion'),
    path('depuracion_antece/', depuracion_antece, name='depuracion'),
    path('ingreso_datos/', ingreso_datos, name='ingresos'),
    path('buscar/', buscar, name='Buscar'),
    path('listar_ejec/', listar_ejec, name='Listado'),
    path('reporte/', reporte, name='Reporte'),
]