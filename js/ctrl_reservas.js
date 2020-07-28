'use strict';

//#region Constantes.
//Elementos que van a cambiar basado en los datos del parqueo.
const lbl_nombre_parqueo = document.querySelector('#NOMBRE_PARQUEO');
const lbl_calificacion_promedio = document.querySelector('#CALIFICACION_PROMEDIO');
const contenedor_espacios_en_mapa = document.querySelector('#contenedor-espacios-parqueos');

//Elementos para el form de la reserva.
const txt_estado_espacio = document.querySelector('#ESTADO_ESPACIO');
const txt_espacio_seleccionado = document.querySelector('#txt-espacio-seleccionado');
const txt_fecha_entrada = document.querySelector('#txt-fecha-entrada');
const txt_hora_entrada = document.querySelector('#txt-hora-entrada');
const txt_fecha_salida = document.querySelector('#txt-fecha-salida');
const txt_hora_salida = document.querySelector('#txt-hora-salida');

const slt_piso_actual = document.querySelector('#slt-piso');

const btn_hoja_anterior = document.querySelector('#btn-hoja-anterior');
const txt_hoja_actual = document.querySelector('#txt-hoja-actual');
const btn_hoja_siguiente = document.querySelector('#btn-hoja-siguiente');
//#endregion

//#region Variables
//Se define por fuera para ser usado en este script.
let parqueo_actual;
let info_espacio_seleccionado;
let elemento_espacio_seleccionado;

//Para el mapa de parqueo.
let piso_actual = 1;
let max_espacios_por_piso = 19;
let cant_hoja_piso = 1;
let hoja_actual_piso = 1;
//#endregion

//#region lógica para reservas

//Esta función se usa para actualizar la información del espacio basado en el que se seleccionó.
//<p_info_espacio> JSON del espacio seleccionado.
//<p_espacio_elemento> referencia al elemento html que se seleccionó.
const actualizar_espacio_seleccionado = (p_info_espacio, p_espacio_elemento) => {
    //Remover clase seleccionado en el espacio anterior.
    if (elemento_espacio_seleccionado != null) {
        elemento_espacio_seleccionado.classList.remove('seleccionado');
    }


    //Uso de la información del espacio seleccionado.
    txt_espacio_seleccionado.value = p_info_espacio.id;

    if (p_info_espacio.ocupado) {
        txt_estado_espacio.textContent = 'El espacio seleccionado está ocupado.';
        txt_estado_espacio.classList.add('txt_alerta');
    } else {
        txt_estado_espacio.textContent = 'El espacio seleccionado está disponible.';
        txt_estado_espacio.classList.remove('txt_alerta');
        //Actualizar referencia el elemento espacio seleccionado.
        elemento_espacio_seleccionado = p_espacio_elemento;
        elemento_espacio_seleccionado.classList.add('seleccionado');
    }
};

//Esta función se usa para llenar el mapa del parqueo con espacios interactivos.
//<p_espacio_parqueo> referencia al espacio de un parqueo del que se va a obtener los datos.
const crear_espacio_parqueo = (p_espacio_parqueo) => {
    let nuevo_espacio = document.createElement('div');
    let id_espacio = document.createElement('h3');
    let icono_espacio = document.createElement('div');

    //Asignar clases y valores.
    id_espacio.textContent = p_espacio_parqueo.id;
    nuevo_espacio.classList.add('espacio-parqueo');
    icono_espacio.classList.add('icono-espacio');
    switch (p_espacio_parqueo.tipo_icono) {
        case 0:
            icono_espacio.classList.add('icono-espacio-carro');
            break;
        case 1:
            icono_espacio.classList.add('icono-espacio-moto');
            break;
        case 2:
            icono_espacio.classList.add('icono-espacio-discapacidad');
            break;
    };

    //Marcar en rojo si está ocupado.
    if (p_espacio_parqueo.ocupado) {
        nuevo_espacio.classList.add('ocupado');
    }

    //Crear jerarquía de elementos.
    nuevo_espacio.appendChild(id_espacio);
    nuevo_espacio.appendChild(icono_espacio);

    //Agregar el nuevo espacio al mapa del parqueo.
    contenedor_espacios_en_mapa.appendChild(nuevo_espacio);

    //Conectar el evento click para que se actualice el espacio seleccionado.
    nuevo_espacio.addEventListener('click', () => {
        actualizar_espacio_seleccionado(p_espacio_parqueo, nuevo_espacio);
    });
};

//Esta función se usa para mostrar TODOS los espacios de un piso.
//<p_piso> Es la referencia al piso del que se desea mostrar los espacios.
//<p_cant_espacios> Se usa para saber la cantidad de espacios que posee el piso.
const actualizar_espacios_mapa = (p_piso) => {
    //Se crea un ciclo para ejecutar la función de crear espacios X cantidad de veces.

    //Para que se muestren como máximo X cantidad de espacios.
    let primer_espacio = ((hoja_actual_piso - 1) * max_espacios_por_piso) + 1;
    let espacios_creados = 0;

    let cant_espacios = p_piso.cant_espacios;

    //Limpiar el mapa.
    contenedor_espacios_en_mapa.innerHTML = '';

    for (let i = primer_espacio; i <= cant_espacios; i++) {
        if (espacios_creados >= max_espacios_por_piso) {
            break;
        }

        let identificador_espacio = ('espacio_' + i); //Clave del JSON.
        crear_espacio_parqueo(p_piso.espacios[identificador_espacio]);

        espacios_creados++;
    };
};

//Esta función se llama siempre que se quiere mostrar los espacios del piso seleccionado.
//<i_piso_seleccionado> El índice del piso que se seleccionó.
const cambiar_piso = (i_piso_seleccionado) => {
    let id_piso = ('piso_' + i_piso_seleccionado);

    let piso = parqueo_actual.pisos[id_piso];
    let cant_espacios = piso.cant_espacios;

    //Se define cuantas hojas tendrá este piso basado en la cantidad de espacios.
    cant_hoja_piso = Math.ceil(cant_espacios / max_espacios_por_piso);
    hoja_actual_piso = 1;

    actualizar_espacios_mapa(piso);
};

const obtener_parqueo_actual = () => {
    //Se obtiene la variable que se guardó anteriormente que define el nombre del parqueo seleccionado.
    let nombre_parqueo_actual = localStorage.getItem('parqueo_seleccionado');

    //Se busca el parqueo que posee ese nombre.
    for (let i = 1; i <= parqueos.cant_parqueos; i++) {
        let identificador_parqueo = ('parqueo_' + i);
        let nombre_parqueo = parqueos[identificador_parqueo].nombre;

        if (nombre_parqueo == nombre_parqueo_actual) {
            return identificador_parqueo;
        }
    }

    return '';
};

//Esta función se debe llamar al inicio para actualizar los datos de la página usando datos del parqueo seleccionado.
//<p_parqueo> El parqueo del que se va a obtener los datos.
const llenar_info_parqueo = (p_parqueo) => {
    parqueo_actual = p_parqueo;

    if (parqueo_actual == '') {
        return;
    }

    lbl_nombre_parqueo.textContent = p_parqueo.nombre;
    lbl_calificacion_promedio.textContent = "Calificación promedio: " + p_parqueo.calificacion_promedio;

    //Por defecto se muestra el piso 1.
    piso_actual = 1;

    //Actualizar los datos del comboBox para el piso actual.
    slt_piso_actual.innerHTML = '';
    for (let i = 1; i <= p_parqueo.cant_pisos; i++) {
        let nueva_opcion = document.createElement('option');
        nueva_opcion.textContent = ('Piso ' + i);
        nueva_opcion.value = (i);

        slt_piso_actual.appendChild(nueva_opcion);
    }

    cambiar_piso(piso_actual);
};

//Se llama cuando el comboBox del piso cambia su valor.
const piso_actual_cambiado = () => {
    piso_actual = slt_piso_actual.value;
    cambiar_piso(piso_actual);
};

//Se llama cuando se presiona un botón para cambiar la hoja que se está mostrando.
const cambiar_hoja = () => {
    let id_piso = ('piso_' + piso_actual);
    let piso = parqueo_actual.pisos[id_piso];

    txt_hoja_actual.textContent = hoja_actual_piso;
    actualizar_espacios_mapa(piso);
};

const mostrar_hoja_anterior = () => {
    if (hoja_actual_piso > 1) {
        hoja_actual_piso -= 1;
        cambiar_hoja();
    }
};

const mostrar_hoja_siguiente = () => {
    if (hoja_actual_piso < cant_hoja_piso) {
        hoja_actual_piso += 1;
        cambiar_hoja();
    }
};

//#endregion

//#region Comentarios
const crear_carta_comentario = (p_comentario) => {

};

const obtener_comentarios = () => {

};

//#endregion


//Mostrar info del parqueo.
parqueo_actual = parqueos[obtener_parqueo_actual()];
llenar_info_parqueo(parqueo_actual);

//Eventos.
slt_piso_actual.addEventListener('change', piso_actual_cambiado);

btn_hoja_anterior.addEventListener('click', mostrar_hoja_anterior);
btn_hoja_siguiente.addEventListener('click', mostrar_hoja_siguiente);