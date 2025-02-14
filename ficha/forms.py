from django import forms
from .models import cliente,oficina

class SucursalForm(forms.Form):
    cui = forms.IntegerField(label='Codigo Oficina: ')
    rut = forms.ModelChoiceField(
        queryset=cliente.objects.none(),  # Inicialmente vacío
        label='RUT Cliente',
        required=False
    )

    def __init__(self, *args, **kwargs):
        super(SucursalForm, self).__init__(*args, **kwargs)
        if 'cui' in self.data:
            try:
                cui = int(self.data.get('cui'))
                self.fields['rut'].queryset = cliente.objects.filter(oficina__cui=cui)
            except (ValueError, TypeError):
                pass  # Manejar el caso en que cui no sea un entero válido
        elif self.initial.get('cui'):
            cui = self.initial.get('cui')
            self.fields['rut'].queryset = cliente.objects.filter(oficina__cui=cui)