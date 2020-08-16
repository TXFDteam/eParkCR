'use strict';

//const btn_prueba = document.querySelector('#btn-probar');

let cantidad_pisos = 1;
let espacios_autos = [0];
let espacios_discapacitados = [0];
let espacios_motos = [0];

let espacios_totales;

let piso_seleccionado;

//Para generar espacios.
let pisos = [];

let ultimo_D = 1;
let ultimo_M = 1;
let ultimo_C = 1;

//Esta función crea un objeto piso para ser guardado en el json.
//<p_indice_piso> El índice del piso que se va a crear.
const generar_piso = (p_indice_piso) => {
    let json_piso = { espacios: [] };
    let contador_espacios = 0;

    //Crear espacios para discapacitados.
    for (let i = ultimo_D; i - ultimo_D < espacios_discapacitados[p_indice_piso]; i++) {
        //Formato.
        let codigo = (i < 10) ? ('D0' + i) : ('D' + i);

        json_piso.espacios[contador_espacios] = { "codigo": codigo, "tipo": "0", "ocupado": "0" };

        //console.log(json_piso.espacios[contador_espacios]);
        contador_espacios++;
    };

    //Para ser usado en el siguiente piso.
    ultimo_D = contador_espacios + 1;

    //Crear espacios para motos.
    for (let i = ultimo_M; i - ultimo_M < espacios_motos[p_indice_piso]; i++) {
        //Formato.
        let codigo = (i < 10) ? ('M0' + i) : ('M' + i);

        json_piso.espacios[contador_espacios] = { "codigo": codigo, "tipo": "1", "ocupado": "0" };
        contador_espacios++;
    };

    ultimo_M = contador_espacios + 1;

    //Crear espacios para autos.
    for (let i = ultimo_C; i - ultimo_C < espacios_autos[p_indice_piso]; i++) {
        //Formato.
        let codigo = (i < 10) ? ('C0' + i) : ('C' + i);

        json_piso.espacios[contador_espacios] = { "codigo": codigo, "tipo": "2", "ocupado": "0" };
        contador_espacios++;
    };

    ultimo_C = contador_espacios + 1;
    return json_piso;
};

const crear_pisos_parqueo = () => {
    //Reiniciar datos.
    pisos = [];
    ultimo_D = 1;
    ultimo_M = 1;
    ultimo_C = 1;

    //Para crear los pisos.
    for (let i = 0; i < cantidad_pisos; i++) {
        pisos[i] = generar_piso(i);
        //console.log(pisos[i]);

    }
    //console.log(pisos);

    //Se asigna el valor de los pisos creados al parámetro que se va a enviar en el request.
    pisos_final = pisos;

    //En el otro script.
    obtener_datos();
    //prueba_crear_parqueo();
};

//btn_prueba.addEventListener('click', crear_pisos_parqueo);

const al_cambiar_cantidad_de_pisos = () => {
    cantidad_pisos = input_pisos.value;
    input_pisosDropdown.innerHTML = '';

    for (let i = 1; i <= cantidad_pisos; i++) {
        let nueva_opcion = document.createElement('option');
        nueva_opcion.value = i;
        nueva_opcion.textContent = ('Piso ' + i);

        input_pisosDropdown.appendChild(nueva_opcion);
    }
};

const actualizar_datos_piso = (indice_piso) => {
    input_espaciosAuto.value = (espacios_autos[indice_piso] != undefined) ? espacios_autos[indice_piso] : 0;
    input_espaciosDiscapacidad.value = (espacios_discapacitados[indice_piso] != undefined) ? espacios_discapacitados[indice_piso] : 0;
    input_espaciosMotos.value = (espacios_motos[indice_piso] != undefined) ? espacios_motos[indice_piso] : 0;
};

const al_cambiar_de_piso = () => {
    piso_seleccionado = input_pisosDropdown.value;
    actualizar_datos_piso(piso_seleccionado - 1);
};

const actualizar_espacios = () => {
    let indice_piso = piso_seleccionado - 1;

    espacios_autos[indice_piso] = input_espaciosAuto.value;
    espacios_discapacitados[indice_piso] = input_espaciosDiscapacidad.value;
    espacios_motos[indice_piso] = input_espaciosMotos.value;
};

input_pisosDropdown.addEventListener('change', al_cambiar_de_piso);
input_pisos.addEventListener('change', al_cambiar_cantidad_de_pisos);

input_espaciosAuto.addEventListener('change', actualizar_espacios);
input_espaciosDiscapacidad.addEventListener('change', actualizar_espacios);
input_espaciosMotos.addEventListener('change', actualizar_espacios);


input_pisos.value = 1;
al_cambiar_cantidad_de_pisos();
al_cambiar_de_piso();

actualizar_datos_piso(0);


//Eventos
btn_crearParqueo.addEventListener('click', crear_pisos_parqueo);