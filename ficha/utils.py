# utils.py
from .forms import SucursalForm
from .models import Registro_materialidad

def filtro_form(request):
    filtros = None
    form = SucursalForm(request.POST or None)
    if form.is_valid():
        cui = form.cleaned_data['cui']
        rut = form.cleaned_data.get('rut')
        filtros = Registro_materialidad.objects.filter(cui=cui)
        if rut:
            filtros = filtros.filter(rut=rut)
    return form, filtros


#   class evaluacion_cliente(APIView):
#       def post(self, request, *args, **kwargs):
        #data = request.data
        #   Ejemplo del funcionamiento esperado:
        #   { 'Tipo de clieten': 'Nuevo',
        #       'respuesta': [
        #           { 'id_parametro': 1,
        #   'status': 'sin_error'},
        #           {'id_parametro': 2,
        #   'status': 'error', 'id_tipo_error': 1 },
        #       nota_final == (total_puntaje / total_parametro) * 100] }