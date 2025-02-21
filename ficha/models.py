from django.db import models
from django.core.validators import RegexValidator
from django.core.exceptions import ValidationError
from datetime import date
from django.contrib.auth.models import User

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    roles = models.CharField(max_length=50)
    foto = models.ImageField(upload_to='static/img', default='default.jpg')
    ci = models.CharField(max_length=10, unique=True, validators=[
             RegexValidator(
                regex = r'^\d{7,8}-[\dkK]$',
                  message = "El RUT debe estar en formato 20222777-X"
                        )
                    ],
                    help_text="Formato: 20222777-X"
                        )
    def __str__(self):
        return self.user.username

class Pilares(models.Model):
    id_pilar = models.AutoField(primary_key=True)
    name =  models.CharField(max_length=100)

    def __str__(self):
        return self.name
    
class Parametro(models.Model):
    id_parametro = models.AutoField(primary_key=True)
    #id_pilar = models.ForeignKey(Pilares,on_delete=models.CASCADE)
    nombre_parametro = models.CharField(max_length=150)

    def __str__(self):
         return f"{self.nombre_parametro}"

class Errores_agravante(models.Model):
    id_base = models.AutoField(primary_key=True)
    nombre_parametro = models.CharField(max_length=100)
    tipo_error = models.CharField(max_length=100)
    tipo_cliente = models.CharField(max_length=20)
    nota = models.CharField(max_length=20) 
    puntaje = models.DecimalField(max_digits=5, decimal_places=1)
    #factor_penalty = models.FloatField() - Penaliza {self.factor_penalty * 100} %
    def __str__(self):
         return f"{self.nombre_parametro}"
    
class sucursal(models.Model):
    cod_sucursal = models.CharField(("Codigo Sucursal"),primary_key=True, max_length=10)
    nombre_suc = models.CharField(("Nombre Sucursal"),max_length=50)
    aprobador = models.CharField(("Nombre aprobador"),max_length=30)
    cant_ejecutivo = models.CharField(("Cantidad Ejecutivos"),max_length=5)

    def __str__(self):
         return self.nombre_suc
    
class oficina(models.Model):
    cui = models.CharField(("CUI"),primary_key=True, max_length=10)
    nombre_ofi = models.CharField(("Nombre Oficina"),max_length=50)  

    def __str__(self):
        return self.nombre_ofi
    
def validar_rut(rut):
    rut = rut.replace(".", "").replace("-","").upper()
    cuerpo = rut[:-1]
    dv = rut[-1]

    if not cuerpo.isdigit():
        raise ValidationError("Solo se adminten caracteres numericos")

    suma = 0
    multiplicador = 2
    for c in reversed(cuerpo):
        suma += int(c) * multiplicador
        multiplicador += 1
        if multiplicador > 7:
            multiplicador = 2

    resto = suma % 11
    dv_calculado = str(11 - resto) if resto != 0 else "0"
    if dv_calculado =="10":
        dv_calculado = "K"

    if dv != dv_calculado:
                raise ValidationError("El digito verificador del RUT no es válido")
class cliente(models.Model):
    rut = models.CharField(
        primary_key=True,
        max_length=10,
        validators=[
             RegexValidator(
                regex = r'^\d{7,8}-[\dkK]$',
                  message = "El RUT debe estar en formato 20222777-X"
                        )
                    ],
                    help_text="Formato: 20222777-X"
                        )
    oficina = models.ForeignKey(oficina, on_delete=models.CASCADE)
    tipo_producto = models.CharField(max_length=100)
    tipo_cliente = models.CharField(max_length=40)

    def clean(self):
        super().clean()
        self.rut = self.rut.replace(".","").upper()
        validar_rut(self.rut)
    def __str__(self):
         return f"{self.rut}"

def val_rut_ejecutivo(rut_ejecutivo):
    rut_ejecutivo = rut_ejecutivo.replace(".", "").replace("-", "").upper()
    if not rut_ejecutivo.isdigit():
        raise ValidationError("Solo se admiten caracteres numéricos")
    return rut_ejecutivo

class ejecutivo(models.Model):
    rut_ejecutivo = models.CharField(
        primary_key=True,
        max_length=8,
        validators=[
            RegexValidator(
                regex=r'^\d{7,8}$',
                message="El RUT debe estar en formato 20222778"
            ),
            val_rut_ejecutivo
        ],
        help_text="Formato: 20222778"
    )
    nombre_ejecutivo = models.CharField(max_length=100)
    username_ejecutivo = models.CharField(max_length=20)

    def __str__(self):
        return f"{self.nombre_ejecutivo}"

class FiltroRevision(models.Model):
    id_filtro = models.AutoField(primary_key=True)
    oficina = models.ForeignKey(oficina, on_delete=models.CASCADE)
    sucursal = models.ForeignKey(sucursal, on_delete=models.CASCADE)
    cliente = models.ForeignKey(cliente, on_delete=models.CASCADE)
    ejecutivo = models.ForeignKey(ejecutivo, on_delete=models.CASCADE)
    monto_solicitado = models.CharField(max_length=30)
    n_revision = models.IntegerField(('N° Revision'))

    def __str__(self):
        return f"N° filtro {self.id_filtro}"

#class reporte(models.Model):
    #id_reporte = models.AutoField(primary_key=True)
    #name_reporte = models.CharField(max_length=50)

    #def __str__(self):
        #return f{N° Reporte{self.id_reporte}, {self.name_reporte}}""