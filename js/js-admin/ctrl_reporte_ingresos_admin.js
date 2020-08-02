'use strict'

//Relacionar la informacion del HTML
//const tabla_reporte_ingresos_header = document.querySelector('#tabla_reporte_ingresos thead');
const tabla_reporte_ingresos_body = document.querySelector('#tabla_reporte_ingresos tbody');
const btn_descargar = document.querySelector('#btn-descargar');


let array_reservas;

/* --------------------- Identificador de usuario actual -------------------- */
//Para probar el JS se preestablece usuario1: const id_usuario = usuarios.usuario1;

/*
const obtener_usuario_ingresado = () => {
    let contrasenna = localStorage.getItem('contrasenna');
    let correo = localStorage.getItem('correo');

    for (let i = 1; i < usuarios.cant_usuarios; i++) {
        let identificador_usuario = ('usuario' + i);
        let usuario_actual = usuarios[identificador_usuario];

        if (correo == usuario_actual.correo_usuario && contrasenna == usuario_actual.contraseña) {
            usuario_actual = usuarios[identificador_usuario].id_usuario;
            break;
        }
    }
};

obtener_usuario_ingresado();*/



//const id_usuario = obtener_usuario_ingresado();

btn_descargar.addEventListener('click', function() {
    let printContent = document.querySelector('#tabla_reporte_ingresos');

    window.print(printContent);

});




const listar_reporte = () => {


    for (let i = 1; i <= parqueos.cant_parqueos; i++) {
        let identificador_parqueo = ('parqueo_' + i);
        let nombre_parqueo = parqueos[identificador_parqueo].nombre;

        for (let j = 1; i <= reservas.cant_reservas; j++) {
            let identificador_reserva = ('reserva' + j);

            console.log('check 1 ' + reservas.reserva1.parqueo_seleccionado);
            console.log('check 2 ' + identificador_reserva);
            console.log('check 3 ' + reservas[identificador_reserva]);

            if (reservas[identificador_reserva].parqueo_seleccionado == nombre_parqueo) {


            }

        };
    };
};


listar_reporte();



/* let fila = tabla_hist_reserv_body.insertRow();


fila.insertCell().innerHTML = reservas[identificador_reserva].fecha_reserva;
fila.insertCell().innerHTML = reservas[identificador_reserva].parqueo_seleccionado;
fila.insertCell().innerHTML = reservas[identificador_reserva].hora_entrada;
fila.insertCell().innerHTML = reservas[identificador_reserva].hora_salida;


if (reservas[identificador_reserva].estado_reserva == 'Paga') {
fila.insertCell().innerHTML = reservas[identificador_reserva].monto_final;
fila.insertCell().innerHTML = 'Cancelado' + boton_recibo;

} else {
fila.insertCell().innerHTML = reservas[identificador_reserva].monto_total;
fila.insertCell().innerHTML = reservas[identificador_reserva].estado_reserva;
}



tabla_hist_reserv_body.appendChild(fila);*/