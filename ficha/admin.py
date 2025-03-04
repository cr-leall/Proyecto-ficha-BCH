from django.contrib import admin
from .models import Pilares,Errores_agravante,Parametro,cliente,ejecutivo,sucursal,oficina,UserProfile,FiltroRevision
from .models import Evaluacion, DetalleEvaluacion

admin.site.site_header = 'Admin Ficha Banco de Chile'

# Register your models here.
admin.site.register(Pilares)
admin.site.register(cliente)
admin.site.register(Errores_agravante)
admin.site.register(Parametro)
admin.site.register(ejecutivo)
admin.site.register(sucursal)
admin.site.register(oficina)
admin.site.register(UserProfile)
admin.site.register(FiltroRevision)
admin.site.register(Evaluacion)
admin.site.register(DetalleEvaluacion)