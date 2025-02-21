document.addEventListener('DOMContentLoaded', function() {
    function validateForm(event) {
        event.preventDefault();
        var valid = true; 
        var observaciones = document.querySelector("input[name='observacion_verfic']").value;
        console.log(observaciones); // Verifica si observaciones está siendo seleccionado correctamente

        var verificacionLaboral = document.getElementById("respuesta-verificacion-laboral").value;
        console.log(verificacionLaboral); // Verifica si verificacionLaboral está siendo seleccionado correctamente
        var tipoErrorVerificacionLaboral = document.querySelector('select[name="tipo-error-verificacion-laboral"]').value;
        console.log(tipoErrorVerificacionLaboral); // Verifica si tipoErrorVerificacionLaboral está siendo seleccionado correctamente
        if (verificacionLaboral === "") {
            alert("Por favor, seleccione una opción para Verificación Laboral.");
            valid = false;
        } else if (verificacionLaboral === "error" && tipoErrorVerificacionLaboral === "") {
            alert("Por favor, seleccione un tipo de error para Verificación Laboral.");
            valid = false;
        } else if (verificacionLaboral === "error" && observaciones === "") {
            alert("Por favor, indique observaciones para la Verificación Laboral.");
            valid = false;
        }

        var observaciones = document.querySelector("input[name='observacion_estado']").value;
        console.log(observaciones); // Verifica si observaciones está siendo seleccionado correctamente
        var estadoSituacion = document.getElementById("respuesta-estado-situacion").value;
        console.log(estadoSituacion); // Verifica si estadoSituacion está siendo seleccionado correctamente
        var tipoErrorEstadoSituacion = document.querySelector('select[name="tipo-error-estado-situacion"]').value;
        console.log(tipoErrorEstadoSituacion); // Verifica si tipoErrorEstadoSituacion está siendo seleccionado correctamente
        if (estadoSituacion === "") {
            alert("Por favor, seleccione una opción para Estado de Situación.");
            valid = false;
        } else if (estadoSituacion === "error" && tipoErrorEstadoSituacion === "") {
            alert("Por favor, seleccione un tipo de error para Estado de Situación.");
            valid = false;
        } else if (estadoSituacion === "error" && observaciones === "") {
            alert("Por favor, indique observaciones para el Estado de Situación.");
            valid = false;
        }

        var observaciones = document.querySelector("input[name='observacion_acredita']").value;
        var acreditacionIngresos = document.getElementById("respuesta-acreditacion-ingresos").value;
        console.log(acreditacionIngresos); // Verifica si acreditacionIngresos está siendo seleccionado correctamente
        var tipoErrorAcreditacionIngresos = document.querySelector('select[name="tipo-error-acreditacion-ingresos"]').value;
        console.log(tipoErrorAcreditacionIngresos); // Verifica si tipoErrorAcreditacionIngresos está siendo seleccionado correctamente
        if (acreditacionIngresos === "") {
            alert("Por favor, seleccione una opción para Acreditación de Ingresos.");
            valid = false;
        } else if (acreditacionIngresos === "error" && tipoErrorAcreditacionIngresos === "") {
            alert("Por favor, seleccione un tipo de error para Acreditación de Ingresos.");
            valid = false;
        } else if (acreditacionIngresos === "error" && observaciones === "") {
            alert("Por favor, indique observaciones para la Acreditación de Ingresos.");
            valid = false;
        }

        if (valid) {
            document.querySelector('#form-evaluacion').submit(); // Enviar el formulario si todo es válido
        }

        return valid;
    }

    document.querySelector('#form-evaluacion').addEventListener('submit', validateForm);    
});