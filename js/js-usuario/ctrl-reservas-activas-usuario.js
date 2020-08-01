'use strict';

let btn_pagar = document.querySelector('#btn-pagar');

btn_pagar.addEventListener('click', function() {
    window.location.assign("cl_pagar_pendientes.html");
});