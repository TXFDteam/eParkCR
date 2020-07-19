'use strict';

const contenedor_parqueos = document.querySelector('#sct-contenedor-carta-parqueos');

const PLANTILLA_CARTA = '<div class=\"contenedor-superior\"> \n' +
    '<div class=\"contendor-info-parqueo\"> \n' +
    '<div class=\"contenedor-estado-parqueo\"> \n' +
    '<p>[ESTADO_PARQUEO]</p> \n' +
    '</div> \n' +
    '<div class=\"contenedor-calificacion-parqueo\"> \n' +
    '<p>[CALIF_PARQUEO]</p> \n' +
    '</div> \n' +
    '</div> \n' +
    '</div> \n' +
    '<div class=\"contenedor-inferior\"> \n' +
    '<div> \n' +
    '<h3>[NOMBRE_PARQUEO]</h3> \n' +
    '<p>[UBI_PARQUEO]</p> \n' +
    '</div> \n' +
    '</div> \n' +
    '</div>';

//Esta función se usa como prueba para mostrar el nombre del parqueo seleccionado.
const mostrar_nombre_parqueo = (p_nombre_parqueo) => {
    console.log('Se ha seleccionado el parqueo: ' + p_nombre_parqueo);
}

//Esta funcion se utiliza para crear cartas de parqueos de forma dinámica.
//<p_estado> Se espera recibir un string que contenga el estado del parqueo (abierto, cerrado)
//<p_calificacion> Se espera recibir un string que posea el número promedio de estrellas con las que fue calificado el parqueo.
//<p_nombre> Se espera recibir un string con el nombre del parqueo.
//<p_nombre> Se espera recibir un string con la ubicación del parqueo.
const crear_carta_parqueo = (p_estado, p_calificacion, p_nombre, p_ubicacion) => {
    let nueva_carta = document.createElement('div');

    //Copia de la plantilla.
    let nueva_plantilla = PLANTILLA_CARTA;

    nueva_carta.classList.add('carta-parqueo');

    //Reemplazar los datos en la plantilla por los recibidos como parámetros.
    nueva_plantilla = nueva_plantilla.replace('[ESTADO_PARQUEO]', p_estado);
    nueva_plantilla = nueva_plantilla.replace('[CALIF_PARQUEO]', p_calificacion);
    nueva_plantilla = nueva_plantilla.replace('[NOMBRE_PARQUEO]', p_nombre);
    nueva_plantilla = nueva_plantilla.replace('[UBI_PARQUEO]', p_ubicacion);

    nueva_carta.innerHTML = nueva_plantilla;
    contenedor_parqueos.appendChild(nueva_carta);

    nueva_carta.addEventListener('click', () => {
        mostrar_nombre_parqueo(p_nombre);
    });
};


//Valores quemados para probar.
crear_carta_parqueo('Abierto', '5', 'Parqueo maravilloso', 'San José');
crear_carta_parqueo('Abierto', '4.7', 'Parqueo López López', 'San José');
crear_carta_parqueo('Cerrado', '3.85', 'Parqueo el Covid', 'Heredia');