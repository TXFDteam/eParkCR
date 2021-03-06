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

let correoC = localStorage.getItem('correo');
console.log(correoC);
let contrasennaC = localStorage.getItem('contrasenna');
console.log(contrasennaC);

let id_cliente;



btn_pagar.addEventListener('click', function() {
    window.location.assign("cl_pagar_pendientes.html");
});
btn_historial_reservas.addEventListener('click', function() {
    window.location.assign("historial_reservas_cliente.html");
});

//contenedor_principal.innerHTML = '';

const mostrar_reservas = async() => {
    let reservas = await obtener_reservas();
    let parqueos = await obtener_parqueos();
    let validarReserva = false;
    let info_clientes = await obtener_clientes();

    /*-----------Esto valida si el usuario no tiene reservas activas---------------*/
    for (let c = 0; c < info_clientes.length; c++) {
        if (correoC == info_clientes[c].correo && contrasennaC == info_clientes[c].contraseña) {
            id_cliente = info_clientes[c]._id;
            console.log(id_cliente);
            for (let r = 0; r < reservas.length; r++) {

                if (info_clientes[c]._id == reservas[r].id_usuario) {
                    if (reservas[r].estado_reserva == 'PENDIENTE' || reservas[r].estado_reserva == 'ACTIVA') {
                        validarReserva = true;
                        parqueo_reserva.innerHTML = reservas[r].nombre_parqueo;
                        fecha_reserva.innerHTML = reservas[r].fecha_reserva;
                        hora_entrada_reserva.innerHTML = reservas[r].hora_entrada;
                        hora_salida_reserva.innerHTML = reservas[r].hora_salida;
                        estado_reserva.innerHTML = reservas[r].estado_reserva;

                        btn_cancelar_reservacion.addEventListener('click', function() {
                            console.log('AQUI');
                            for (let p = 0; p < parqueos.length; p++) {
                                if (parqueos[p]._id == reservas[r].id_parqueo) {
                                    console.log('AQUI');
                                    for (let pi = 0; pi < parqueos[p].pisos.length; pi++) {
                                        if (reservas[r].id_piso_espacio_seleccionado == parqueos[p].pisos[pi]._id) {
                                            console.log('AQUI');
                                            for (let esp = 0; esp < parqueos[p].pisos[pi].espacios.length; esp++) {
                                                if (parqueos[p].pisos[pi].espacios[esp]._id == reservas[r].id_espacio_seleccionado) {

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
                                                            actualizar_estado_espacio(parqueos[p]._id, parqueos[p].pisos[pi]._id, parqueos[p].pisos[pi].espacios[esp]._id, '0');
                                                            modificar_estado_reserva_cancelada(reservas[r]._id, 'CANCELADA');
                                                            Swal.fire(
                                                                'Reservación cancelada',
                                                                'La reservación ha sido cancelada exitosamente.',
                                                                'success'
                                                            )
                                                        }
                                                    })
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        });
                    } else {
                        validarReserva = false;
                    }
                }
            }
        }
    }

    if (validarReserva == false) {
        console.log('aqui')
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
    console.log(validarReserva);
    /*----------------------------------------------------*/
    //c va a ser el  contador para encontrar los clientes
    /*
        for (let c = 0; c < info_clientes.length; c++) {
            if (correoC == info_clientes[c].correo && contrasennaC == info_clientes[c].contraseña) {
                id_cliente = info_clientes[c]._id;
                console.log(id_cliente);

                for (let r = 0; r < reservas.length; r++) {

                    if (info_clientes[c]._id == reservas[r].id_usuario) {

                        parqueo_reserva.innerHTML = reservas[r].nombre_parqueo;
                        fecha_reserva.innerHTML = reservas[r].fecha_reserva;
                        hora_entrada_reserva.innerHTML = reservas[r].hora_entrada;
                        hora_salida_reserva.innerHTML = reservas[r].hora_salida;
                        estado_reserva.innerHTML = reservas[r].estado_reserva;

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
                                    eliminar_reserva(reservas[r]._id);
                                    Swal.fire(
                                        'Reservación cancelada',
                                        'La reservación ha sido cancelada exitosamente.',
                                        'success'
                                    )
                                }
                            })
                        });
                        if (reservas[r].estado_reserva == 'Paga' || info_clientes[c].id_reserva_activa == 'null') {

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
                break;
            }
        }
    */



};
mostrar_reservas();