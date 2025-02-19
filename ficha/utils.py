# utils.py
from .forms import SucursalForm
from .models import FiltroRevision

def filtro_form(request):
    filtros = None
    form = SucursalForm(request.POST or None)
    if form.is_valid():
        cui = form.cleaned_data['cui']
        rut = form.cleaned_data.get('rut')
        filtros = FiltroRevision.objects.filter(oficina__cui=cui)
        if rut:
            filtros = filtros.filter(cliente=rut)
    return form, filtros