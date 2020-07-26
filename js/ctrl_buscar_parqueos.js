'use strict';

const contenedor_parqueos = document.querySelector('#sct-contenedor-carta-parqueos');

const PLANTILLA_CARTA = '<div class=\"contenedor-superior\"> \n' +
    '<div class=\"contendor-info-parqueo\"> \n' +
    '<div class=\"contenedor-estado-parqueo\"> \n' +
    '<p [CLASE_ESTADO]>[ESTADO_PARQUEO]</p> \n' +
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
const crear_carta_parqueo = (p_parqueo) => {
    let nueva_carta = document.createElement('div');

    //Copia de la plantilla.
    let nueva_plantilla = PLANTILLA_CARTA;

    nueva_carta.classList.add('carta-parqueo');

    //Reemplazar los datos en la plantilla por los recibidos como parámetros.

    //Primero define el estado, si está abierto o cerrado.
    //Además cambia la clase del texto que muestra el estado dependiendo del mismo.
    let estado_parqueo;
    if (p_parqueo.abierto) {
        estado_parqueo = 'Abierto';
        nueva_plantilla = nueva_plantilla.replace('[CLASE_ESTADO]', 'class=\"parqueo-abierto\"');
    } else {
        estado_parqueo = 'Cerrado'
        nueva_plantilla = nueva_plantilla.replace('[CLASE_ESTADO]', 'class=\"parqueo-cerrado\"');
    }

    //Más reemplazo de texto en la plantilla que se va a usar para la nueva carta.
    nueva_plantilla = nueva_plantilla.replace('[ESTADO_PARQUEO]', estado_parqueo);
    nueva_plantilla = nueva_plantilla.replace('[CALIF_PARQUEO]', p_parqueo.calificacion_promedio);
    nueva_plantilla = nueva_plantilla.replace('[NOMBRE_PARQUEO]', p_parqueo.nombre);
    nueva_plantilla = nueva_plantilla.replace('[UBI_PARQUEO]', p_parqueo.ubicacion);

    //Se incluye la plantilla como el innerHTML de la carta creada.
    nueva_carta.innerHTML = nueva_plantilla;
    contenedor_parqueos.appendChild(nueva_carta);

    //Se conecta el evento click de la carta creada.
    nueva_carta.addEventListener('click', () => {
        mostrar_nombre_parqueo(p_parqueo.nombre);
    });
};

//Esta función se usa para mostrar las cartas de los parqueos existentes en la base de datos.
//No recibe parámetros porque los muestra todos.
const mostrar_parqueos = () => {
    for (let i = 1; i <= parqueos.cant_parqueos; i++) {
        let identificador_parqueo = ('parqueo_' + i);
        crear_carta_parqueo(parqueos[identificador_parqueo]);
    }
};

mostrar_parqueos();