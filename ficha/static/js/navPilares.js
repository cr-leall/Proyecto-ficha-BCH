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

    // Función para navegar según la selección del usuario
    function navegarPilar() {
        var select = document.getElementById('pilar-select');
        var url = select.value;

        if (url) {
            window.location.href = url;
        }
    }

    // Enlazar la función de navegación al evento onchange del select
    document.getElementById('pilar-select').addEventListener('change', navegarPilar);
});