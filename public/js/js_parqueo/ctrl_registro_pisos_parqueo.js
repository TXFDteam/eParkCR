'use strict';

let cantidad_pisos = 1;
let espacios_autos = [0];
let espacios_discapacitados = [0];
let espacios_motos = [0];

let espacios_totales;

let piso_seleccionado;

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

actualizar_datos_piso(0);