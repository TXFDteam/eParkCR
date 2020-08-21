'use strict';

const slct_parqueos = document.querySelector('#parqueoSeleccionado');
const tabla_usuarios = document.querySelector('#tabla-usuarios tbody');


let correoD = localStorage.getItem('correo_dueño');
let contrasennaD = localStorage.getItem('contraseña_dueño');
let id;
const obtener_id = async() => {
    let info_duenno_parqueo = await obtener_duennos_parqueo();

    for (let d = 0; d < info_duenno_parqueo.length; d++) {
        if (correoD == info_duenno_parqueo[d].correo && contrasennaD == info_duenno_parqueo[d].contraseña) {
            id = info_duenno_parqueo[d]._id;
            console.log(id);
            break;
        }
    }
};

obtener_id();

const select_parqueos = async() => {
    let parqueos = await obtener_parqueos(); // se invoca al arreglo de parqueos


    for (let p = 0; p < parqueos.length; p++) {
        if (id == parqueos[p].id_duenno) {
            let option = document.createElement("option");
            option.innerHTML = parqueos[p].nombre;
            slct_parqueos.appendChild(option);
        }

    }
}
select_parqueos();

let parqueo_slct;



console.log(slct_parqueos.value);
let mostrar_reservas = async() => {
    tabla_usuarios.innerHTML = '';
    let reservas = await obtener_reservas();
    let parqueos = await obtener_parqueos();

    for (let p = 0; p < parqueos.length; p++) {
        if (parqueo_slct == parqueos[p].nombre) {
            for (let r = 0; r < reservas.length; r++) {
                if (reservas[r].nombre_parqueo == parqueo_slct) {
                    console.log('aqui');
                    let fila = tabla_usuarios.insertRow();
                    fila.insertCell().innerHTML = reservas[r].nombre_usuario;
                    fila.insertCell().innerHTML = reservas[r].fecha_reserva;
                    fila.insertCell().innerHTML = reservas[r].hora_entrada;
                    fila.insertCell().innerHTML = reservas[r].hora_salida;
                    fila.insertCell().innerHTML = reservas[r].monto_total;
                    fila.insertCell().innerHTML = reservas[r].monto_final;
                    //fila.insertCell().innerHTML = btn_activar;
                    tabla_usuarios.appendChild(fila);
                }
            }
        }

    }

};

slct_parqueos.addEventListener('change', () => {
    parqueo_slct = slct_parqueos.value;
    mostrar_reservas();
});