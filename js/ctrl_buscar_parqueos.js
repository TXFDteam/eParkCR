'use strict';

//#region Constantes
const contenedor_parqueos = document.querySelector('#sct-contenedor-carta-parqueos');

const PLANTILLA_CONTENIDO_CONT_SUPERIOR =
    '<div class=\"contendor-info-parqueo [CLASE_ESTADO_PARQUEO]\"> \n' +
    '<div class=\"contenedor-estado-parqueo\"> \n' +
    '<p>[ESTADO_PARQUEO]</p> \n' +
    '</div> \n' +
    '<div class=\"contenedor-calificacion-parqueo\"> \n' +
    '<p>[CALIF_PARQUEO]</p> \n' +
    '</div> \n' +
    '</div> \n' +
    '</div>';

const PLANTILLA_CONTENIDO_CONT_INFERIOR =
    '<h3>[NOMBRE_PARQUEO]</h3> \n' +
    '<p>[UBI_PARQUEO]</p> \n';

//Elementos usados para filtros.
const ventana_filtros = document.querySelector('.sct-filtrar-parqueos');
const btn_ocultar_ventana_filtros = document.querySelector('#btn-salir');
const btn_reiniciar_filtros = document.querySelector('#btn-reiniciar-filtros');
const btn_aplicar_filtros = document.querySelector('#btn-aplicar-filtros');
const btn_mostrar_filtros = document.querySelector('#btn-filtros');

const chb_usar_filtros = document.querySelector('#chb-usar-filtros');
const chb_estado = document.querySelector('#chb-estado-abierto');
const chb_ubicacion_actual = document.querySelector('#chb-ubicacion-actual');
const slt_calificacion = document.querySelector('#slt-calificacion');

const txt_ubicacion = document.querySelector('#txt-ubicacion');
const txt_nombre = document.querySelector('#txt-nombre');

const txt_filtros = document.querySelector('#txt-filtros');

//#endregion

//#region Variables
let usando_filtros = false;
let filtrando_parqueos_abiertos = false;
let filtrando_por_ubicacion_actual = false;
let filtrando_por_calificacion = false;

let filtro_ubicacion = '';
let filtro_nombre = '';
let filtro_calificacion = 0;

let ubicacion_actual = 'San José';

//#endregion
//Esta función se usa para abrir el html de perfil de parqueos y mostrar los parámetros del parqueo seleccionado.
const abrir_perfil_parqueo = (p_nombre_parqueo) => {
    console.log('Se ha seleccionado el parqueo: ' + p_nombre_parqueo);

    //Se guarda la variable que dice cuál parqueo se seleccionó.
    localStorage.setItem('parqueo_seleccionado', p_nombre_parqueo);

    //Se redirige al html que muestra el perfil del parqueo.
    window.location.assign("reservas_perfil_parqueo.html");
}

const parqueo_cumple_con_filtros = (p_parqueo) => {
    let filtros_usados = 0;
    let filtros_cumplidos = 0;

    if (filtrando_parqueos_abiertos) {
        filtros_usados++;

        if (p_parqueo.abierto) {
            filtros_cumplidos++;
        }
    }
    if (filtrando_por_ubicacion_actual) {
        filtros_usados++;

        if (p_parqueo.ubicacion == ubicacion_actual) {
            filtros_cumplidos++;
        }
    }
    if (filtro_nombre != '') {
        filtros_usados++;

        if (p_parqueo.nombre == filtro_nombre) {
            filtros_cumplidos++;
        }
    }
    if (filtro_calificacion != 0) {
        filtros_usados++;

        if (p_parqueo.calificacion_promedio >= filtro_calificacion) {
            filtros_cumplidos++;
        }
    }
    if (filtro_ubicacion != '') {
        filtros_usados++;

        if (p_parqueo.ubicacion == filtro_ubicacion) {
            filtros_cumplidos++;
        }
    }

    return (filtros_usados == filtros_cumplidos);
};

//Esta funcion se utiliza para crear cartas de parqueos de forma dinámica.
//<p_estado> Se espera recibir un string que contenga el estado del parqueo (abierto, cerrado)
//<p_calificacion> Se espera recibir un string que posea el número promedio de estrellas con las que fue calificado el parqueo.
//<p_nombre> Se espera recibir un string con el nombre del parqueo.
//<p_nombre> Se espera recibir un string con la ubicación del parqueo.
const crear_carta_parqueo = (p_parqueo) => {
    if (usando_filtros) {
        if (!parqueo_cumple_con_filtros(p_parqueo)) {
            return;
        }
    }

    let nueva_carta = document.createElement('div');
    nueva_carta.classList.add('carta-parqueo');

    //Contenedor superior.
    let contenedor_superior = document.createElement('div');
    contenedor_superior.classList.add('contenedor-superior');

    let nueva_plantilla_cont_superior = PLANTILLA_CONTENIDO_CONT_SUPERIOR;
    let estado_parqueo;
    if (p_parqueo.abierto) {
        estado_parqueo = 'Abierto';
        nueva_plantilla_cont_superior = nueva_plantilla_cont_superior.replace('[CLASE_ESTADO_PARQUEO]', 'parqueo-abierto');
    } else {
        estado_parqueo = 'Cerrado'
        nueva_plantilla_cont_superior = nueva_plantilla_cont_superior.replace('[CLASE_ESTADO_PARQUEO]', 'parqueo-cerrado');
    }

    nueva_plantilla_cont_superior = nueva_plantilla_cont_superior.replace('[ESTADO_PARQUEO]', estado_parqueo);
    nueva_plantilla_cont_superior = nueva_plantilla_cont_superior.replace('[CALIF_PARQUEO]', p_parqueo.calificacion_promedio);
    contenedor_superior.innerHTML = nueva_plantilla_cont_superior;

    //Aplicar la imagen de previsualización a la carta de parqueo actual.
    let url = "url(" + "../../imgs/imgs_parqueos/" + p_parqueo.imagen_preview + ")";
    contenedor_superior.style.backgroundImage = url;

    //Contenedor inferior.
    let contenedor_inferior = document.createElement('div');
    contenedor_inferior.classList.add('contenedor-inferior');
    let nueva_plantilla_cont_inferior = PLANTILLA_CONTENIDO_CONT_INFERIOR;
    nueva_plantilla_cont_inferior = nueva_plantilla_cont_inferior.replace('[NOMBRE_PARQUEO]', p_parqueo.nombre);
    nueva_plantilla_cont_inferior = nueva_plantilla_cont_inferior.replace('[UBI_PARQUEO]', p_parqueo.ubicacion);

    contenedor_inferior.innerHTML = nueva_plantilla_cont_inferior;

    //Crear jerarquía.
    nueva_carta.appendChild(contenedor_superior);
    nueva_carta.appendChild(contenedor_inferior);

    contenedor_parqueos.appendChild(nueva_carta);

    //Se conecta el evento click de la carta creada.
    nueva_carta.addEventListener('click', () => {
        abrir_perfil_parqueo(p_parqueo.nombre);
    });
};

//Esta función se usa para mostrar las cartas de los parqueos existentes en la base de datos.
//No recibe parámetros porque los muestra todos.
const mostrar_parqueos = () => {
    contenedor_parqueos.innerHTML = '';
    for (let i = 1; i <= parqueos.cant_parqueos; i++) {
        let identificador_parqueo = ('parqueo_' + i);
        crear_carta_parqueo(parqueos[identificador_parqueo]);
    };
};


const mostrar_ventana_filtros = () => {
    ventana_filtros.classList.remove('oculto');
};

const ocultar_ventana_filtros = () => {
    ventana_filtros.classList.add('oculto');
};

const reiniciar_filtros = () => {
    //Reiniciar valores de variables
    usando_filtros = false;
    filtrando_parqueos_abiertos = false;
    filtrando_por_ubicacion_actual = false;
    filtrando_por_calificacion = false;

    filtro_ubicacion = '';
    filtro_nombre = '';
    filtro_calificacion = 0;

    //Reiniciar valores en la ventana de filtros.
    chb_usar_filtros.checked = usando_filtros;
    chb_estado.checked = filtrando_parqueos_abiertos;
    chb_ubicacion_actual.checked = filtrando_por_ubicacion_actual;

    txt_nombre.value = filtro_nombre;
    txt_ubicacion.value = filtro_ubicacion;
};

const aplicar_filtros = () => {
    filtro_calificacion = slt_calificacion.value;
    filtro_nombre = txt_nombre.value;
    filtro_ubicacion = txt_ubicacion.value;

    ocultar_ventana_filtros();
    mostrar_parqueos();

    console.log('filtrando estado: ' + filtrando_parqueos_abiertos);
    console.log('filtrando estrellas: ' + filtrando_por_calificacion);
    console.log('filtrando ubicacion actual: ' + filtrando_por_ubicacion_actual);

    console.log('filtro calificacion: ' + filtro_calificacion);
    console.log('filtro nombre: ' + filtro_nombre);
    console.log('filtro ubicacion: ' + filtro_ubicacion);
};

//Funciones que se llaman cuando se cambia el valor de un checkbox.
const al_cambiar_usar_filtros = () => {
    usando_filtros = chb_usar_filtros.checked;
};
const al_cambiar_filtro_estado = () => {
    filtrando_parqueos_abiertos = chb_estado.checked;
};
const al_cambiar_filtro_ubicacion = () => {
    filtrando_por_ubicacion_actual = chb_ubicacion_actual.checked;
}

//Eventos.
btn_mostrar_filtros.addEventListener('click', mostrar_ventana_filtros);
btn_ocultar_ventana_filtros.addEventListener('click', ocultar_ventana_filtros);
btn_reiniciar_filtros.addEventListener('click', reiniciar_filtros);
btn_aplicar_filtros.addEventListener('click', aplicar_filtros);

chb_usar_filtros.addEventListener('click', al_cambiar_usar_filtros);
chb_estado.addEventListener('click', al_cambiar_filtro_estado);
chb_ubicacion_actual.addEventListener('click', al_cambiar_filtro_ubicacion);

mostrar_parqueos();