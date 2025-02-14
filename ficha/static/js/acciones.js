document.addEventListener('DOMContentLoaded', function() {
    var limpiarBtn = document.getElementById('limpiarBtn');
    var recuperarBtn = document.getElementById('recuperarBtn');
    var resultadosDiv = document.getElementById('resultados');

    limpiarBtn.addEventListener('click', function() {
        resultadosDiv.innerHTML = '';
    });

    recuperarBtn.addEventListener('click', function() {
        // Aquí puedes agregar la funcionalidad que desees para el botón "Recuperar"
        alert('Funcionalidad de recuperar aún no implementada.');
    });
});