document.getElementById('sucursalForm').addEventListener('submit', function(event) {
    var idSucursal = document.getElementById('id_sucursal').value;
    if (!idSucursal) {
        alert('El campo ID de Sucursal no puede estar vacío.');
        event.preventDefault();
    }
});