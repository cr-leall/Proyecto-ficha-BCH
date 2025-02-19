document.addEventListener('DOMContentLoaded', function() {
    var limpiarBtn = document.getElementById('limpiarBtn');
    var guardarBtn = document.getElementById('guardarBtn');
    var resul = document.getElementById('resul');
    var sucursalForm = document.getElementById('sucursalForm');

    if (limpiarBtn && guardarBtn && resul && sucursalForm) {
        limpiarBtn.addEventListener('click', function() {
            sucursalForm.reset(); // Restablece el formulario
            resul.innerHTML = ''; // Limpia el contenido de resul
        });

        guardarBtn.addEventListener('click', function() {
            // Aquí puedes agregar la funcionalidad que desees para el botón "guardar"
            alert('Funcionalidad de guardar aún no está implementada.');
        });
    } else {
        console.error('Uno o más elementos no fueron encontrados en el DOM.');
    }
});