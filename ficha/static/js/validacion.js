document.getElementById('sucursalForm').addEventListener('submit', function(event) {
    var idSucursal = document.getElementById('id_sucursal').value;
    if (!idSucursal) {
        alert('El campo ID de Sucursal no puede estar vacío.');
        event.preventDefault();
    }
});

document.addEventListener('DOMContentLoaded', function() {
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