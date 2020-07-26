'use strict'

const inp_nombre_tarjeta = document.querySelector('#nombre_tarjeta');
const inp_numero_tarjeta = document.querySelector('#numero_tarjeta');
const inp_cod_seguridad = document.querySelector('#codigo-seguridad');
const inp_mes_expr = document.querySelector('#mes-expiracion');
const inp_anno_expr = document.querySelector('#anno-expiracion');
const btn_agregar_tarjeta = document.querySelector('#btn-agregar-tarjeta');
const formulario = document.querySelector('#formulario_agregar_tarjetas');


const validar = () => {
    let error = false;
    let campos_requeridos = document.querySelectorAll('[required]');
    let tamanno = campos_requeridos.length;

    /* ------------------------ Falta evaluar numero de digitos de tarjeta y CVV!! ----------------------- */


    //Evalua que todos los espacios esten llenos
    for (let i = 0; i < tamanno; i++) {
        if (campos_requeridos[i].value == '') {
            error = true;
            campos_requeridos[i].classList.add('error');
        } else {
            campos_requeridos[i].classList.remove('error');
        }
    }

    return error;
}


// * Input numero de tarjeta
formulario.numero_tarjeta.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    formulario.numero_tarjeta.value = valorInput
        // Eliminamos espacios en blanco
        .replace(/\s/g, '')
        // Eliminar las letras
        .replace(/\D/g, '')
        // Ponemos espacio cada cuatro numeros
        .replace(/([0-9]{4})/g, '$1 ')
        // Elimina el ultimo espaciado
        .trim();
});


const obtener_datos = () => {

    let error = validar();

    if (error) {
        console.log('Error al llenar formulario');
    } else {
        console.log('Formulario llenado correctamente');
    }
}



btn_agregar_tarjeta.addEventListener('click', obtener_datos);