'use strict';
/*DIVS PARA OCULTAR LOS ESPACIOS DEPENDIENDO EL ESTADO DE LA RESERVA*/
let div_parqueo = document.querySelector('#div-parqueo');
let div_fecha = document.querySelector('#div-fecha');
let div_hora_entrada = document.querySelector('#div-hora-entrada');
let div_hora_salida = document.querySelector('#div-hora-salida');
let div_estado = document.querySelector('#div-estado');
let div_btn_cancelar = document.querySelector('#div-btn-cancelar');
let div_btn_pagar = document.querySelector('#div-btn-pagar');

/*------------------*/
let contenedor_principal = document.querySelector('#contenedor-principal');
let no_hay_reservas = document.querySelector('#no-hay-reservas');
let contenedor_reservas = document.querySelector('#contenedor-reservas');
let parqueo_reserva = document.querySelector('#espacio-parqueo');
let fecha_reserva = document.querySelector('#espacio-fecha');
let hora_entrada_reserva = document.querySelector('#espacio-hora-entrada');
let hora_salida_reserva = document.querySelector('#espacio-hora-salida');
let estado_reserva = document.querySelector('#estado-reserva');

let btn_cancelar_reservacion = document.querySelector('#btn-cancelar-reservacion');
let btn_pagar = document.querySelector('#btn-pagar');
let btn_historial_reservas = document.querySelector('#btn-historial-reservas');

let correo_actual = localStorage.getItem('correo');
let contrasenna_actual = localStorage.getItem('contrasenna');
console.log(correo_actual);

console.log(contrasenna_actual);

btn_cancelar_reservacion.addEventListener('click', function() {
    Swal.fire({
        title: 'Cancelar reservación',
        text: "¿Estás seguro que deseas cancelar la reservación?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'No',
        confirmButtonText: 'Sí'
    }).then((result) => {
        if (result.value) {
            Swal.fire(
                'Reservación cancelada',
                'La reservación ha sido cancelada exitosamente.',
                'success'
            )
        }
    })
});
btn_pagar.addEventListener('click', function() {
    window.location.assign("cl_pagar_pendientes.html");
});
btn_historial_reservas.addEventListener('click', function() {
    window.location.assign("historial_reservas_cliente.html");
});

//contenedor_principal.innerHTML = '';

const mostrar_reservas = () => {

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
                        div_parqueo.classList.add('o-ocultar');
                        div_fecha.classList.add('o-ocultar');
                        div_hora_entrada.classList.add('o-ocultar');
                        div_hora_salida.classList.add('o-ocultar');
                        div_estado.classList.add('o-ocultar');

                        div_btn_cancelar.classList.add('o-ocultar');
                        div_btn_pagar.classList.add('o-ocultar');
                    } else {
                        no_hay_reservas.classList.add('o-ocultar');
                    }
                    break;
                }

            }
        }
    }
};
mostrar_reservas();