'use strict'

//Llamar a la informacion desde el HTML
const btn_descargar = document.querySelector('#btn_descargar');

/* ----------------- Opcion descargar reporte para imprimir ----------------- */
btn_descargar.addEventListener('click', function() {
    let printContent = document.querySelector('#pagina_principal_bitacora');

    window.print(printContent);

});