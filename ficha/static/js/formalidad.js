document.addEventListener('DOMContentLoaded', function() {
    window.validateSection1 = function() {
        var valid = true;
        // Validar campos de la sección 1
        var verificacionLaboral = document.getElementById("respuesta-verificacion-laboral").value;
        var tipoErrorVerificacionLaboral = document.querySelector('select[name="tipo-error-verificacion-laboral"]').value;
        var observacionVerificacion = document.querySelector("input[name='observacion_verfic']").value;

        if (verificacionLaboral === "") {
            alert("Por favor, seleccione una opción para Verificación Laboral.");
            valid = false;
        } else if (verificacionLaboral === "error" && tipoErrorVerificacionLaboral === "") {
            alert("Por favor, seleccione un tipo de error para Verificación Laboral.");
            valid = false;
        } else if (verificacionLaboral === "error" && observacionVerificacion === "") {
            alert("Por favor, indique observaciones para la Verificación Laboral.");
            valid = false;
        }
        
        var estadoSituacion = document.getElementById("respuesta-estado-situacion").value;
        var tipoErrorEstadoSituacion = document.querySelector('select[name="tipo-error-estado-situacion"]').value;
        var observacion_estado = document.querySelector("input[name='observacion_estado']").value;
        if (estadoSituacion === "") {
            alert("Por favor, seleccione una opción para Estado de Situación.");
            valid = false;
        } else if (estadoSituacion === "error" && tipoErrorEstadoSituacion === "") {
            alert("Por favor, seleccione un tipo de error para Estado de Situación.");
            valid = false;
        } else if (estadoSituacion === "error" && observacion_estado === "") {
            alert("Por favor, indique observaciones para el Estado de Situación.");
            valid = false;
        }

        var acreditacionIngresos = document.getElementById("respuesta-acreditacion-ingresos").value;
        var tipoErrorAcreditacionIngresos = document.querySelector('select[name="tipo-error-acreditacion-ingresos"]').value;
        var observacion_acredita = document.querySelector("input[name='observacion_acredita']").value;
        if (acreditacionIngresos === "") {
            alert("Por favor, seleccione una opción para Acreditación de Ingresos.");
            valid = false;
        } else if (acreditacionIngresos === "error" && tipoErrorAcreditacionIngresos === "") {
            alert("Por favor, seleccione un tipo de error para Acreditación de Ingresos.");
            valid = false;
        } else if (acreditacionIngresos === "error" && observacion_acredita === "") {
            alert("Por favor, indique observaciones para la Acreditación de Ingresos.");
            valid = false;
        }

        if (valid) {
            document.getElementById('section1').style.display = 'block';
            document.getElementById('section2').style.display = 'block';
        }
    }

    window.validateSection2 = function() {
        var valid = true;
        // Validar campos de la sección 2
        var atribuciones = document.getElementById("respuesta-atribuciones").value;
        var observacionRevCredito = document.querySelector("input[name='observaciones-revision-credito']").value;
        if (atribuciones === "") {
            alert("Por favor, seleccione una opción para Atribuciones.");
            valid = false;
        } else if (atribuciones === "error" && observacionRevCredito === "") {
            alert("Por favor, indique observaciones para las Atribuciones.");
            valid = false;
        }

        var Contribución_Garan = document.getElementById("respuesta-contribucion-garantia").value;
        var observacionContri = document.querySelector("input[name='observaciones-contribucion-garantia']").value;
        if (Contribución_Garan === "") {
            alert("Por favor, seleccione una opción para la Contribución Garantías y/o Aval.");
            valid = false;
        } else if (Contribución_Garan === "error" && observacionContri === "") {
            alert("Por favor, indique observaciones para la Contribución Garantías y/o Aval.");
            valid = false;
        }

        var condicion_aprob = document.getElementById("respuesta-condiciones-aprobacion").value;
        var tipoErrorcondicion_aprob = document.querySelector('select[name="tipo-error-condiciones-aprobacion"]').value;
        var observacion_condicion_aprob = document.querySelector("input[name='observacion_condicion_aprob']").value;
        if (condicion_aprob === "") {
            alert("Por favor, seleccione una opción para las Condiciones de Aprobación.");
            valid = false;
        } else if (condicion_aprob === "error" && tipoErrorcondicion_aprob === "") {
            alert("Por favor, seleccione un tipo de error para las Condiciones de Aprobación.");
            valid = false;
        } else if (condicion_aprob === "error" && observacion_condicion_aprob === "") {
            alert("Por favor, indique observaciones para las Condiciones de Aprobación.");
            valid = false;
        }

        var Cambio_evaAT = document.getElementById("Cambio_evaAT").value;
        var tipoError_cambio_eva = document.querySelector('select[name="tipo-error-Cambio_evaAT"]').value;
        var observacion_cambioEva = document.querySelector("input[name='observacion_cambioEva']").value;
        if (Cambio_evaAT === "") {
            alert("Por favor, seleccione una opción para los Cambio Resultado Evaluación Automática.");
            valid = false;
        } else if (Cambio_evaAT === "error" && tipoError_cambio_eva === "") {
            alert("Por favor, seleccione un tipo de error para los Cambio Resultado Evaluación Automática.");
            valid = false;
        } else if (Cambio_evaAT === "error" && observacion_cambioEva === "") {
            alert("Por favor, indique observaciones para los Cambio Resultado Evaluación Automática.");
            valid = false;
        }

        var res_deu_vincula = document.querySelector('select[name="respuesta-deudas-vinculadas"]').value;
        var observacion_res_deuda_vincu = document.querySelector("input[name='observacion_res_deuda_vincu']").value;
        if (res_deu_vincula === "") {
            alert("Por favor, seleccione una opción para las Deudas Vinculadas.");
            valid = false;
        } else if (res_deu_vincula === "error" && observacion_res_deuda_vincu === "") {
            alert("Por favor, indique observaciones para las Deudas Vinculadas.");
            valid = false;
        }

        if (valid) {
            document.getElementById('section2').style.display = 'block';
            document.getElementById('section3').style.display = 'block';
        }
    }

    window.validateSection3 = function() {
        var valid = true;
        // Validar campos de la sección 3
        var ingresosMensuales = document.querySelector('select[name="respuesta-ingresos-mensuales"]').value;
        var obsIngresosMensuales = document.querySelectorAll("input[name='obs-ingresos-mensuales']");
        if (ingresosMensuales === "") {
            alert("Por favor, seleccione una opción para Ingresos Mensuales.");
            valid = false;
        } else {
            obsIngresosMensuales.forEach(function(input) {
                if (ingresosMensuales === "error" && input.value === "") {
                    alert("Por favor, complete todos los campos de observaciones para Ingresos Mensuales.");
                    valid = false;
                }
            });
        }

        var activo = document.querySelector('select[name="respuesta-activo"]').value;
        var obs_activo = document.querySelectorAll("input[name='obs-activo']");
        if (activo === "") {
            alert("Por favor, seleccione una opción para el parametro Activo.");
            valid = false;
        } else {
            obs_activo.forEach(function(input) {
                if (activo === "error" && input.value === "") {
                    alert("Por favor, complete todos los campos de observaciones para el parametro activo.");
                    valid = false;
                }
            });
        }
        
        var dividendos = document.querySelector('select[name="respuesta-dividendo-gasto-vivienda"]').value;
        var obs_dividendos = document.querySelectorAll("input[name='obs-activo']");
        if (dividendos === "") {
            alert("Por favor, seleccione una opción para el parametro Dividendos.");
            valid = false;
        } else {
            obs_dividendos.forEach(function(input) {
                if (dividendos === "error" && input.value === "") {
                    alert("Por favor, complete todos los campos de observaciones para el parametro Dividendos.");
                    valid = false;
                }
            });
        }

        var arriendos_pagados = document.querySelector('select[name="arriendos_pagados"]').value;
        var obs_arriendos_pagados = document.querySelectorAll("input[name='obs_arriendos_pagados']");
        if (arriendos_pagados === "") {
            alert("Por favor, seleccione una opción para el parametro Arriendos Pagados.");
            valid = false;
        } else {
            obs_arriendos_pagados.forEach(function(input) {
                if (arriendos_pagados === "error" && input.value === "") {
                    alert("Por favor, complete todos los campos de observaciones para el parametro Arriendos Pagados.");
                    valid = false;
                }
            });
        }

        var Cuota_presta_empleador = document.querySelector('select[name="Cuota_presta_empleador"]').value;
        var obs_presta_empleador = document.querySelectorAll("input[name='obs_presta_empleador']");
        if (Cuota_presta_empleador === "") {
            alert("Por favor, seleccione una opción para el parametro Cuota Préstamo Empleador y/o CCAF.");
            valid = false;
        } else {
            obs_presta_empleador.forEach(function(input) {
                if (Cuota_presta_empleador === "error" && input.value === "") {
                    alert("Por favor, complete todos los campos de observaciones para el parametro Cuota Préstamo Empleador y/o CCAF.");
                    valid = false;
                }
            });
        }
        
        var Otro_egresos = document.querySelector('select[name="Otro_egresos"]').value;
        var obs_Otro_egresos = document.querySelectorAll("input[name='obs_Otro_egresos']");
        if (Otro_egresos === "") {
            alert("Por favor, seleccione una opción para el parametro Otros Egresos.");
            valid = false;
        } else {
            obs_Otro_egresos.forEach(function(input) {
                if (Otro_egresos === "error" && input.value === "") {
                    alert("Por favor, complete todos los campos de observaciones para el parametro Otros Egresos.");
                    valid = false;
                }
            });
        }
                
        var Reestructurar_renegociado = document.querySelector('select[name="Reestructurar_renegociado"]').value;
        var obs_Reestructurar_renegociado = document.querySelectorAll("input[name='obs_Reestructurar_renegociado']");
        if (Reestructurar_renegociado === "") {
            alert("Por favor, seleccione una opción para el parametro Monto a Restructurar Renegociado.");
            valid = false;
        } else {
            obs_Reestructurar_renegociado.forEach(function(input) {
                if (Reestructurar_renegociado === "error" && input.value === "") {
                    alert("Por favor, complete todos los campos de observaciones para el parametro Monto a Restructurar Renegociado.");
                    valid = false;
                }
            });
        }
                 
        var Cuota_banco_CP = document.querySelector('select[name="Cuota_banco_CP"]').value;
        var obs_Cuota_banco_CP = document.querySelectorAll("input[name='obs_Cuota_banco_CP']");
        if (Cuota_banco_CP === "") {
            alert("Por favor, seleccione una opción para el parametro Cuota Banco CP.");
            valid = false;
        } else {
            obs_Cuota_banco_CP.forEach(function(input) {
                if (Cuota_banco_CP === "error" && input.value === "") {
                    alert("Por favor, complete todos los campos de observaciones para el parametro Cuota Banco CP.");
                    valid = false;
                }
            });
        }
                  
        var Cuota_compra_OOII = document.querySelector('select[name="Cuota_compra_OOII"]').value;
        var obs_Cuota_compra_OOII = document.querySelectorAll("input[name='obs_Cuota_compra_OOII']");
        if (Cuota_compra_OOII === "") {
            alert("Por favor, seleccione una opción para el parametro Cuota Compra OOII.");
            valid = false;
        } else {
            obs_Cuota_compra_OOII.forEach(function(input) {
                if (Cuota_compra_OOII === "error" && input.value === "") {
                    alert("Por favor, complete todos los campos de observaciones para el parametro Cuota Compra OOII.");
                    valid = false;
                }
            });
        }

        var Monto_compra_bancoLP = document.querySelector('select[name="Monto_compra_bancoLP"]').value;
        var obs_Monto_compra_bancoLP = document.querySelectorAll("input[name='obs_Monto_compra_bancoLP']");
        if (Monto_compra_bancoLP === "") {
            alert("Por favor, seleccione una opción para el parametro Monto Compra Banco LP.");
            valid = false;
        } else {
            obs_Monto_compra_bancoLP.forEach(function(input) {
                if (Monto_compra_bancoLP === "error" && input.value === "") {
                    alert("Por favor, complete todos los campos de observaciones para el parametro Monto Compra Banco LP.");
                    valid = false;
                }
            });
        }
        
        var Monto_compra_bancoCP = document.querySelector('select[name="Monto_compra_bancoCP"]').value;
        var obs_Monto_compra_bancoCP = document.querySelectorAll("input[name='obs_Monto_compra_bancoCP']");
        if (Monto_compra_bancoCP === "") {
            alert("Por favor, seleccione una opción para el parametro Monto Compra Banco CP.");
            valid = false;
        } else {
            obs_Monto_compra_bancoCP.forEach(function(input) {
                if (Monto_compra_bancoCP === "error" && input.value === "") {
                    alert("Por favor, complete todos los campos de observaciones para el parametro Monto Compra Banco CP.");
                    valid = false;
                }
            });
        }
         
        var Monto_compra_OOII = document.querySelector('select[name="Monto_compra_OOII"]').value;
        var obs_Monto_compra_OOII = document.querySelectorAll("input[name='obs_Monto_compra_OOII']");
        if (Monto_compra_OOII === "") {
            alert("Por favor, seleccione una opción para el parametro Monto Compra OOII.");
            valid = false;
        } else {
            obs_Monto_compra_OOII.forEach(function(input) {
                if (Monto_compra_OOII === "error" && input.value === "") {
                    alert("Por favor, complete todos los campos de observaciones para el parametro Monto Compra OOII.");
                    valid = false;
                }
            });
        }

        var Monto_compraSBIF = document.querySelector('select[name="Monto_compraSBIF"]').value;
        var obs_Monto_compraSBIF = document.querySelectorAll("input[name='obs_Monto_compraSBIF']");
        if (Monto_compraSBIF === "") {
            alert("Por favor, seleccione una opción para el parametro Monto Compra SBIF.");
            valid = false;
        } else {
            obs_Monto_compraSBIF.forEach(function(input) {
                if (Monto_compraSBIF === "error" && input.value === "") {
                    alert("Por favor, complete todos los campos de observaciones para el parametro Monto Compra SBIF.");
                    valid = false;
                }
            });
        }
        if (valid) {
            document.getElementById('section3').style.display = 'block';
            document.getElementById('section4').style.display = 'block';
        }
    }
    
    window.validateSection4 = function() {
        var valid = true;
        // Validar campos de la sección 3
        var Actividad = document.querySelector('select[name="Actividad"]').value;
        var obs_Actividad = document.querySelectorAll("input[name='obs_Actividad']");
        if (Actividad === "") {
            alert("Por favor, seleccione una opción para el parametro Actividad.");
            valid = false;
        } else {
            obs_Actividad.forEach(function(input) {
                if (Actividad === "error" && input.value === "") {
                    alert("Por favor, complete todos los campos de observaciones para el parametro Actividad.");
                    valid = false;
                }
            });
        }

        var Dirección_Particular = document.querySelector('select[name="Dirección_Particular"]').value;
        var obs_Dirección_Part = document.querySelectorAll("input[name='obs_Dirección_Part']");
        if (Dirección_Particular === "") {
            alert("Por favor, seleccione una opción para el parametro Dirección Particular.");
            valid = false;
        } else {
            obs_Dirección_Part.forEach(function(input) {
                if (Dirección_Particular === "error" && input.value === "") {
                    alert("Por favor, complete todos los campos de observaciones para el parametro Dirección Particular.");
                    valid = false;
                }
            });
        }
        
        var Universidad = document.querySelector('select[name="Universidad"]').value;
        var obs_Universidad = document.querySelectorAll("input[name='obs_Universidad']");
        if (Universidad === "") {
            alert("Por favor, seleccione una opción para el parametro Universidad.");
            valid = false;
        } else {
            obs_Universidad.forEach(function(input) {
                if (Universidad === "error" && input.value === "") {
                    alert("Por favor, complete todos los campos de observaciones para el parametro Universidad.");
                    valid = false;
                }
            });
        }
                
        var Fecha_ing_empleo = document.querySelector('select[name="Fecha_ing_empleo"]').value;
        var obs_Fecha_ing_empleo = document.querySelectorAll("input[name='obs_Fecha_ing_empleo']");
        if (Fecha_ing_empleo === "") {
            alert("Por favor, seleccione una opción para el parametro Fecha de Ingreso Empleo.");
            valid = false;
        } else {
            obs_Fecha_ing_empleo.forEach(function(input) {
                if (Fecha_ing_empleo === "error" && input.value === "") {
                    alert("Por favor, complete todos los campos de observaciones para el parametro Fecha de Ingreso Empleo.");
                    valid = false;
                }
            });
        }
                 
        var Nivel_educacional = document.querySelector('select[name="Nivel_educacional"]').value;
        var obs_Nivel_educacional = document.querySelectorAll("input[name='obs_Nivel_educacional']");
        if (Nivel_educacional === "") {
            alert("Por favor, seleccione una opción para el parametro Nivel Educacional.");
            valid = false;
        } else {
            obs_Nivel_educacional.forEach(function(input) {
                if (Nivel_educacional === "error" && input.value === "") {
                    alert("Por favor, complete todos los campos de observaciones para el parametro Nivel Educacional.");
                    valid = false;
                }
            });
        }

        var Nacionalidad = document.querySelector('select[name="Nacionalidad"]').value;
        var obs_Nacionalidad = document.querySelectorAll("input[name='obs_Nacionalidad']");
        if (Nacionalidad === "") {
            alert("Por favor, seleccione una opción para el parametro Nacionalidad.");
            valid = false;
        } else {
            obs_Nacionalidad.forEach(function(input) {
                if (Nacionalidad === "error" && input.value === "") {
                    alert("Por favor, complete todos los campos de observaciones para el parametro Nacionalidad.");
                    valid = false;
                }
            });
        }

        var TipoContrato = document.querySelector('select[name="TipoContrato"]').value;
        var obs_TipoContrato = document.querySelectorAll("input[name='obs_TipoContrato']");
        if (TipoContrato === "") {
            alert("Por favor, seleccione una opción para el parametro Tipo de Contrato.");
            valid = false;
        } else {
            obs_TipoContrato.forEach(function(input) {
                if (TipoContrato === "error" && input.value === "") {
                    alert("Por favor, complete todos los campos de observaciones para el parametro Tipo de Contrato.");
                    valid = false;
                }
            });
        }

        var TipoRenta = document.querySelector('select[name="TipoRenta"]').value;
        var obs_TipoRenta = document.querySelectorAll("input[name='obs_TipoRenta']");
        if (TipoRenta === "") {
            alert("Por favor, seleccione una opción para el parametro Tipo de Renta.");
            valid = false;
        } else {
            obs_TipoRenta.forEach(function(input) {
                if (TipoRenta === "error" && input.value === "") {
                    alert("Por favor, complete todos los campos de observaciones para el parametro Tipo de Renta.");
                    valid = false;
                }
            });
        }

        var Carrera_semestre = document.querySelector('select[name="Carrera_semestre"]').value;
        var obs_Carrera_semestre = document.querySelectorAll("input[name='obs_Carrera_semestre']");
        if (Carrera_semestre === "") {
            alert("Por favor, seleccione una opción para el parametro Carrera/Semestre.");
            valid = false;
        } else {
            obs_Carrera_semestre.forEach(function(input) {
                if (Carrera_semestre === "error" && input.value === "") {
                    alert("Por favor, complete todos los campos de observaciones para el parametro Carrera/Semestre.");
                    valid = false;
                }
            });
        }

        var Profesion = document.querySelector('select[name="Profesion"]').value;
        var obs_Profesion = document.querySelectorAll("input[name='obs_Profesion']");
        if (Profesion === "") {
            alert("Por favor, seleccione una opción para el parametro Profesión.");
            valid = false;
        } else {
            obs_Profesion.forEach(function(input) {
                if (Profesion === "error" && input.value === "") {
                    alert("Por favor, complete todos los campos de observaciones para el parametro Profesión.");
                    valid = false;
                }
            });
        }

        var Estado_civil = document.querySelector('select[name="Estado_civil"]').value;
        var obs_Estado_civil = document.querySelectorAll("input[name='obs_Estado_civil']");
        if (Estado_civil === "") {
            alert("Por favor, seleccione una opción para el parametro Estado Civil.");
            valid = false;
        } else {
            obs_Estado_civil.forEach(function(input) {
                if (Estado_civil === "error" && input.value === "") {
                    alert("Por favor, complete todos los campos de observaciones para el parametro Estado Civil.");
                    valid = false;
                }
            });
        }
    }
});