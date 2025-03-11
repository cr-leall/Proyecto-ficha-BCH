from django import forms
from .models import Registro_materialidad

class SucursalForm(forms.Form):
    cui = forms.IntegerField(label='Código Oficina:')
    rut = forms.ModelChoiceField(
        queryset=Registro_materialidad.objects.none(),  # Inicialmente vacío
        label='RUT Cliente',
        required=False
    )

    def __init__(self, *args, **kwargs):
        super(SucursalForm, self).__init__(*args, **kwargs)
        if 'cui' in self.data:
            try:
                cui = int(self.data.get('cui'))
                self.fields['rut'].queryset = Registro_materialidad.objects.filter(cui=cui)
            except (ValueError, TypeError):
                pass  # Manejar el caso en que cui no sea un entero válido
        elif self.initial.get('cui'):
            cui = self.initial.get('cui')
            self.fields['rut'].queryset = Registro_materialidad.objects.filter(cui=cui)