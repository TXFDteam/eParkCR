'use strict';
//NOTAS
//Si se quiere que los espacios del parqueo sean interactuables cuando se presionan debe existir una función actualizar_espacio_seleccionado(p_espacio_parqueo, nuevo_espacio) para ser conectada.

const slt_piso_actual = document.querySelector('#slt-piso');
const contenedor_espacios_en_mapa = document.querySelector('#contenedor-espacios-parqueos');

let interactuable = false;

let piso_actual = 1;
let parqueo_actual;

//Esta función se usa para llenar el mapa del parqueo con espacios interactivos.
//<p_espacio_parqueo> referencia al espacio de un parqueo del que se va a obtener los datos.
const crear_espacio_parqueo = (p_espacio_parqueo) => {
    let nuevo_espacio = document.createElement('div');
    let id_espacio = document.createElement('h3');
    let icono_espacio = document.createElement('div');

    //Asignar clases y valores.
    id_espacio.textContent = p_espacio_parqueo.codigo;
    nuevo_espacio.classList.add('espacio-parqueo');
    icono_espacio.classList.add('icono-espacio');
    switch (p_espacio_parqueo.tipo) {
        case '0':
            icono_espacio.classList.add('icono-espacio-discapacidad');
            break;
        case '1':
            icono_espacio.classList.add('icono-espacio-moto');
            break;
        case '2':
            icono_espacio.classList.add('icono-espacio-carro');
            break;
    };

    //Marcar en rojo si está ocupado.
    if (interactuable) {
        if (p_espacio_parqueo.ocupado == '1') {
            nuevo_espacio.classList.add('ocupado');
        }
    }

    //Crear jerarquía de elementos.
    nuevo_espacio.appendChild(id_espacio);
    nuevo_espacio.appendChild(icono_espacio);

    //Agregar el nuevo espacio al mapa del parqueo.
    contenedor_espacios_en_mapa.appendChild(nuevo_espacio);

    //Conectar el evento click para que se actualice el espacio seleccionado.
    if (interactuable) {
        nuevo_espacio.addEventListener('click', () => {
            actualizar_espacio_seleccionado(p_espacio_parqueo, nuevo_espacio);
        });
    }
};

//Esta función se usa para mostrar TODOS los espacios de un piso.
//<p_piso> Es la referencia al piso del que se desea mostrar los espacios.
//<p_cant_espacios> Se usa para saber la cantidad de espacios que posee el piso.
const actualizar_espacios_mapa = (p_piso) => {
    //Limpiar el mapa.
    contenedor_espacios_en_mapa.innerHTML = '';

    //console.log(p_piso);

    //Se crea un ciclo para ejecutar la función de crear espacios X cantidad de veces.
    p_piso.espacios.forEach(obj_espacio => {
        crear_espacio_parqueo(obj_espacio);
    });

    /*
    //Viejo
    //Para que se muestren como máximo X cantidad de espacios.
    let cant_espacios = p_piso.cant_espacios;

    //Limpiar el mapa.
    contenedor_espacios_en_mapa.innerHTML = '';

    for (let i = 1; i <= cant_espacios; i++) {
        let identificador_espacio = ('espacio_' + i); //Clave del JSON.
        crear_espacio_parqueo(p_piso.espacios[identificador_espacio], true);
    };
    */
};

//Esta función se llama siempre que se quiere mostrar los espacios del piso seleccionado.
//<i_piso_seleccionado> El índice del piso que se seleccionó.
const cambiar_piso = (i_piso_seleccionado) => {
    let piso = parqueo_actual.pisos[i_piso_seleccionado];

    //Se muestran los espacios del piso seleccionado.
    actualizar_espacios_mapa(piso);

    //Viejo
    //let id_piso = ('piso_' + i_piso_seleccionado);

    //let piso = parqueo_actual.pisos[id_piso];
    //let cant_espacios = piso.cant_espacios;

};

//Se llama cuando el comboBox del piso cambia su valor.
const piso_actual_cambiado = () => {
    piso_actual = slt_piso_actual.value;
    piso_actual_reserva = piso_actual;

    cambiar_piso(piso_actual);
};

//Llamar a esta función para inicializar datos del mapa basado en el parqueo que se envía como parámetro.
//<p_parqueo> Parqueo del que se desea ver los datos.
const inicializar_mapa = (p_parqueo, p_interactuable = false) => {
    //Por defecto se muestra el piso 1.
    parqueo_actual = p_parqueo;
    piso_actual = 0;
    interactuable = p_interactuable;

    //Actualizar los datos del comboBox para el piso actual.
    slt_piso_actual.innerHTML = '';

    //Para actualizar datos que se usan en el script para reservas.
    if (interactuable) {
        piso_actual_reserva = 0;
    }

    let cont = 0;
    parqueo_actual.pisos.forEach(obj_piso => {
        //Guarda los ids de los pisos en el script de reservas.
        if (interactuable) {
            id_pisos[cont] = obj_piso._id;
        }

        //Para agregar las opciones al select.
        let nueva_opcion = document.createElement('option');
        nueva_opcion.textContent = ('Piso ' + (cont + 1));
        nueva_opcion.value = (cont);

        slt_piso_actual.appendChild(nueva_opcion);
        cont++;
    });

    //Viejo.
    /*
    for (let i = 1; i <= p_parqueo.cant_pisos; i++) {
        let nueva_opcion = document.createElement('option');
        nueva_opcion.textContent = ('Piso ' + i);
        nueva_opcion.value = (i);

        slt_piso_actual.appendChild(nueva_opcion);
    }
    */

    cambiar_piso(piso_actual);
};

//Eventos.
slt_piso_actual.addEventListener('change', piso_actual_cambiado);