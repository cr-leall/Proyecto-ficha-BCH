from django.contrib import admin
from django.urls import path
from .views import login, base, index, registro, listar_ejec, reporte,carga_materialidad
#from .views import 
urlpatterns = [
    path('', login, name='login'),
    path('registro/', registro, name='registro'),
    path('base/', base, name='base'),
    path('index/', index, name='index'),
    path('listar_ejec/', listar_ejec, name='Listado'),
    path('reporte/', reporte, name='Reporte'),
    path('carga_materialidad/', carga_materialidad, name='Carga'),
]