'use strict';

//Se define por fuera para ser usado en este script.
let parqueo_actual = parqueo_2;

//Elementos que van a cambiar basado en los datos del parqueo.
const lbl_nombre_parqueo = document.querySelector('#NOMBRE_PARQUEO');
const lbl_calificacion_promedio = document.querySelector('#CALIFICACION_PROMEDIO');
const contenedor_espacios_en_mapa = document.querySelector('#contenedor-espacios-parqueos');

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


    //Crear jerarquía de elementos.
    nuevo_espacio.appendChild(id_espacio);
    nuevo_espacio.appendChild(icono_espacio);

    //Agregar el nuevo espacio al mapa del parqueo.
    contenedor_espacios_en_mapa.appendChild(nuevo_espacio);

    addEventListener('click', () => {
        mostrar_nombre_parqueo(p_nombre);
    });
};

//Esta función se usa para mostrar TODOS los espacios de un piso.
//<p_piso> Es la referencia al piso del que se desea mostrar los espacios.
//<p_cant_espacios> Se usa para saber la cantidad de espacios que posee el piso.
const crear_espacios_en_mapa = (p_piso, p_cant_espacios) => {
    //Se crea un ciclo para ejecutar la función de crear espacios X cantidad de veces.
    for (let i = 1; i <= p_cant_espacios; i++) {
        let identificador_espacio = ('espacio_' + i); //Clave del JSON.
        crear_espacio_parqueo(p_piso.espacios[identificador_espacio]);
    };
};

//Esta función se debe llamar al inicio para actualizar los datos de la página usando datos del parqueo seleccionado.
//<p_parqueo> El parqueo del que se va a obtener los datos.
const llenar_info_parqueo = (p_parqueo) => {
    lbl_nombre_parqueo.textContent = p_parqueo.nombre;
    lbl_calificacion_promedio.textContent = "Calificación promedio: " + p_parqueo.calificacion_promedio;

    let piso = p_parqueo.pisos['piso_1'];
    let cantidad_de_espacios = piso.cant_espacios;
    crear_espacios_en_mapa(piso, cantidad_de_espacios)
};

llenar_info_parqueo(parqueo_actual);