from django.shortcuts import render
from .utils import filtro_form
#Import Modelo de tablas User
from django.contrib.auth.models import User
from .models import UserProfile
# Import Libreria de autentificacion
from django.contrib.auth import authenticate, logout,login as login_auth
#Import decorators para impedir ingreso de paginas sin estar registrado
from django.contrib.auth.decorators import login_required,permission_required
from django.http import JsonResponse
from django.db import IntegrityError

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
