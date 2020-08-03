'use strict';

let no_hay_reservas = document.querySelector('#no-hay-reservas');
let contenedor_reservas = document.querySelector('#contenedor-reservas');
let parqueo_reserva = document.querySelector('#espacio-parqueo');
let fecha_reserva = document.querySelector('#espacio-fecha');
let hora_entrada_reserva = document.querySelector('#espacio-hora-entrada');
let hora_salida_reserva = document.querySelector('#espacio-hora-salida');
let estado_reserva = document.querySelector('#estado-reserva');




let btn_pagar = document.querySelector('#btn-pagar');

let correo_actual = localStorage.getItem('correo');
let contrasenna_actual = localStorage.getItem('contrasenna');
console.log(correo_actual);

console.log(contrasenna_actual);

btn_pagar.addEventListener('click', function() {
    window.location.assign("cl_pagar_pendientes.html");
});
btn_pagar.addEventListener('click', function() {
    window.location.assign("cl_pagar_pendientes.html");
});



for (let u = 1; u <= usuarios.cant_usuarios; u++) {
    let identificador_usuario = ('usuario' + u);
    //SI EL CORREO Y  CONTRASEÑA ALMACENADOS EN INICIAR SESION PROCEDE A ASIGNAR LOS VALORES DEL USUARIO LOGEADO
    if (usuarios[identificador_usuario].correo_usuario == correo_actual && usuarios[identificador_usuario].contraseña == contrasenna_actual) {
        console.log(usuarios[identificador_usuario].id_usuario);

        for (let r = 1; r <= reservas.cant_reservas; r++) {
            let identificador_reserva = ('reserva' + r);
            console.log(reservas[identificador_reserva].id_usuario);
            if (usuarios[identificador_usuario].id_usuario == reservas[identificador_reserva].id_usuario) {

                parqueo_reserva.innerHTML = reservas[identificador_reserva].parqueo_seleccionado;
                fecha_reserva.innerHTML = reservas[identificador_reserva].fecha_reserva;
                hora_entrada_reserva.innerHTML = reservas[identificador_reserva].hora_entrada;
                hora_salida_reserva.innerHTML = reservas[identificador_reserva].hora_salida;
                estado_reserva.innerHTML = reservas[identificador_reserva].estado_reserva;
                if (reservas[identificador_reserva].estado_reserva == 'Paga') {
                    contenedor_reservas.classList.add('esconder-contenedor');
                    no_hay_reservas.classList.remove('esconder-noHayReservas');
                } else {
                    no_hay_reservas.classList.add('esconder-noHayReservas');
                }
                break;

            }
        };
        break;
    };
};