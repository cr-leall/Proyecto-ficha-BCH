document.addEventListener('DOMContentLoaded', function() {
    var limpiarBtn = document.getElementById('limpiarBtn');
    var resul = document.getElementById('resul');
    var sucursalForm = document.getElementById('sucursalForm');

    if (limpiarBtn && resul && sucursalForm ) {
        limpiarBtn.addEventListener('click', function() {
            sucursalForm.reset(); // Restablece el formulario
            resul.innerHTML = ''; // Limpia el contenido de resul
        });

    }
     // Función para cambiar el color del círculo según el estado del usuario
     function setUserStatus(status) {
        var circle = document.getElementById('user-status');
        if (status === 'active') {
            circle.classList.remove('inactive');
            circle.classList.add('active');
        } else if (status === 'inactive') {
            circle.classList.remove('active');
            circle.classList.add('inactive');
        }
    }

    // Simulación de cambio de estado del usuario
    // Puedes reemplazar esto con la lógica real de tu aplicación
    setTimeout(function() {
        setUserStatus('active'); // Cambia a 'inactive' para probar el estado inactivo
    }, 1000); 
});
function mostrarPilares() {
    // Oculta todos los formularios
    document.querySelectorAll('.componente-form').forEach(form => {
        form.style.display = 'none';
    });

    // Muestra el formulario según el tipo de componente seleccionado
    const pilar_select = document.getElementById('pilar_select').value;
    if (pilar_select === 'formalidad') {
        document.getElementById('formFormalidad').style.display = 'block';
    } else if (pilar_select === 'gestion_otorga') {
        document.getElementById('formGestion_otorga').style.display = 'block';
    } else if (pilar_select === 'depuracon_antece') {
        document.getElementById('formDepuracon_antece').style.display = 'block';
    } else if (pilar_select === 'ingreso_datos') {
        document.getElementById('formIngreso_datos').style.display = 'block';
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const pilarSelect = document.getElementById("pilar_select");
    pilarSelect.addEventListener("change", mostrarPilares);
});