from django.shortcuts import render
from .utils import filtro_form
#Import Modelo de tablas User
from django.contrib.auth.models import User
from .models import UserProfile, Registro_materialidad
# Import Libreria de autentificacion
from django.contrib.auth import authenticate, logout,login as login_auth
#Import decorators para impedir ingreso de paginas sin estar registrado
from django.contrib.auth.decorators import login_required,permission_required
from django.http import HttpResponse
from django.db import IntegrityError
import pandas as pd
from decimal import Decimal, InvalidOperation

# Create your views here.

def registro(request):
    if request.method == 'POST':
        nombres = request.POST.get("nombres").strip()
        apellidos = request.POST.get("apellidos").strip()
        email = request.POST.get("email").strip()
        username = request.POST.get("username").strip()
        password = request.POST.get("password").strip()
        password2 = request.POST.get("password2").strip()
        roles = request.POST.get("roles").strip()

        # Validar que el correo no esté en uso
        if User.objects.filter(email=email).exists():
            message = "El correo ya está en uso"
            return render(request, 'web/registro.html', {'Error': message})

        try:
            # Intentar crear un nuevo usuario
            u = User.objects.create_user(username=username, email=email, password=password, first_name = nombres, last_name = apellidos)
            # Crear el perfil de usuario
            perfil = UserProfile(user=u, roles=roles)
            perfil.save()
            u.save()

            mensaje = "Registro exitoso"

            # Autenticar y loguear al usuario
            us = authenticate(request, username=username, password=password)
            login_auth(request, us)

            return render(request, 'web/login.html', {'user': us, 'msg': mensaje})
        except IntegrityError:
            # Si el usuario ya existe, manejar la excepción y mostrar el mensaje de error
            mensaje = "Usuario existente"
            return render(request, 'web/registro.html', {'msg': mensaje})

    # Renderizar la página de registro si el método no es POST
    return render(request, 'web/registro.html')
    
def login(request):
    if request.method == 'POST':
        username = request.POST.get('username', '').strip()
        password = request.POST.get('password', '').strip()
        # Validar que los campos no estén vacíos o contengan solo espacios en blanco
        if not username or not password:
            message = "Usuario y contraseña son obligatorios."
            return render(request, 'web/login.html', {'error': message})
        # Autenticar al usuario
        us = authenticate(request, username=username, password=password)
        if us is not None and us.is_active:
            login_auth(request, us)
            message = "Bienvenido a FichaBch Buen Día " + us.first_name + us.last_name
            return render(request, 'web/index.html', {'user': us, 'success': message})
        else:
            message = "Usuario o contraseña incorrectos"
            return render(request, 'web/login.html', {'error': message})
    return render(request, 'web/login.html')

def logout_view(request):
	logout(request)
	message = "Cerraste sesion correctamente"
	return render(request,'web/login.html',{'output':message})

@login_required
def index(request):
    form, filtros = filtro_form(request)
    return render(request, 'web/index.html', {'form': form, 'filtros': filtros})

@login_required
def base(request):
    form, filtros = filtro_form(request)
    return render(request, 'web/base.html', {'form': form, 'filtros': filtros})

@login_required
def listar_ejec(request):
    return render(request, 'web/listar_ejec.html')

@login_required
def reporte(request):
    return render(request, 'web/reporte.html')


def es_valido(row):
    # Ejemplo de validación: verificar que el RUT no esté vacío
    return row['RUT'] != ''

def limpiar_valor(valor):
    # Convertir el valor a cadena y eliminar espacios en blanco
    return str(valor).strip()

def carga_materialidad(request):
    if request.method == 'POST' and request.FILES['archivo']:
        archivo_excel = request.FILES['archivo']
        try:
            df = pd.read_excel(archivo_excel, dtype=str)  # Leer todo como cadenas
            # Limpiar el DataFrame eliminando filas con todos los valores NaN
            df.dropna(how='all', inplace=True)
            # Rellenar valores NaN con una cadena vacía
            df.fillna('', inplace=True)
        except Exception as e:
            return HttpResponse(f"Error al leer el archivo: {e}")

        errores = []
        registros = []
        for _, row in df.iterrows():
            if not es_valido(row):
                errores.append(f"Datos inválidos en la fila {_}")
                continue
            try:
                registros.append(Registro_materialidad(
                    rut=limpiar_valor(row['RUT']),
                    dv=limpiar_valor(row['DV']),
                    log_fecha_registro=limpiar_valor(row['LOG_FECHA_REGISTRO']),
                    login_creador=limpiar_valor(row['LOGIN_CREADOR']),
                    nombre_creador=limpiar_valor(row['NOMBRE_CREADOR']),
                    oficina_ejecutivo=limpiar_valor(row['OFICINA_EJECUTIVO']),
                    cui=limpiar_valor(row['CUI']),
                    etapa_venta_actual=limpiar_valor(row['ETAPA_VENTA_ACTUAL']),
                    inconsistencia=limpiar_valor(row['INCONSISTENCIA']),
                    monto_oferta=limpiar_valor(row['MONTO_OFERTA']),
                    proceso_credito=limpiar_valor(row['PROCESO_CREDITO']),
                    pauta_evaluacion=limpiar_valor(row['PAUTA_EVALUACION']),
                    decision_final=limpiar_valor(row['DECISION_FINAL']),
                    ano_mes=limpiar_valor(row['ANO_MES']),
                    canal=limpiar_valor(row['CANAL']),
                    prod_eval=limpiar_valor(row['PROD_EVAL']),
                    nombre_ejecutivo=limpiar_valor(row['NOMBRE EJECUTIVO']),
                    rut_ejecutivo=limpiar_valor(row['RUT EJECUTIVO']),
                    mes_numero=limpiar_valor(row['Mes Numero']),
                    mes_nombre=limpiar_valor(row['Mes Nombre']),
                    codigo_suc=limpiar_valor(row['CODIGO SUC']),
                    nombre_suc=limpiar_valor(row['NOMBRE SUC']),
                    aprobador=limpiar_valor(row['APROBADOR']),
                    n_oportunidad=limpiar_valor(row['N_OPORTUNIDAD'])
                ))
            except Exception as e:
                errores.append(f"Error en la fila {_}: {e}")

        if registros:
            Registro_materialidad.objects.bulk_create(registros)

        if errores:
            return HttpResponse(f"Errores encontrados: {', '.join(errores)}")
        return HttpResponse("Datos cargados exitosamente")
    return render(request, 'web/carga_materialidad.html')