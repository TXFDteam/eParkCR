'use strict';

const obtener_total_espacios = (p_parqueo) => {
    let total_espacios = 0;

    for (let i = 0; i < p_parqueo.pisos.length; i++) {
        total_espacios += p_parqueo.pisos[i].espacios.length;
    }

    return total_espacios;
}