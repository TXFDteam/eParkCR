'use strict'

const inp_nombre_tarjeta = document.querySelector('#nombre-tarjeta');
const inp_numero_tarjeta = document.querySelector('#numero-tarjeta');
const inp_cod_seguridad = document.querySelector('#codigo-seguridad');
const inp_mes_expr = document.querySelector('#mes-expiracion');
const inp_anno_expr = document.querySelector('#anno-expiracion');
const btn_agregar_tarjeta = document.querySelector('#btn-agregar-tarjeta');


const validar = () => {
    let error = true;
    let campos_requeridos = document.querySelectorAll('[required]');



    return error;
}



const obtener_datos = () => {

    let error = validar();

    if (error) {
        console.log('Error al llenar formulario');
    } else {
        console.log('Formulario llenado correctamente');
    }
}

btn_agregar_tarjeta.addEventListener('click', obtener_datos);