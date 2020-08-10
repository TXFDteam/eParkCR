'use strict'

//Relacionar la informacion del HTML
const tabla_hist_reserv_header = document.querySelector('#tablahistorial thead');
const tabla_hist_reserv_body = document.querySelector('#tablahistorial tbody');
const btn_descargar = document.querySelector('#btn_descargar');



/* ------------------------ Boton de enlace al recibo ----------------------- */
let boton_recibo = '<br><a class=\"link_ver_recibo\" href=\"../htmls-usuarios/recibo_pago_clientes.html\"> (Ver recibo)</a>';



/* ----------------- Opcion descargar reporte para imprimir ----------------- */
btn_descargar.addEventListener('click', function() {
    let printContent = document.querySelector('#tablahistorial');

    window.print(printContent);

});


/* --------------------- Identificador de usuario actual -------------------- */
//Para probar el JS se preestablece usuario1: const id_usuario = usuarios.usuario1;

const obtener_usuario_ingresado = () => {
    let contrasenna = localStorage.getItem('contrasenna');
    let correo = localStorage.getItem('correo');

    for (let i = 1; i < usuarios.cant_usuarios; i++) {
        let identificador_usuario = ('usuario' + i);
        let usuario_actual = usuarios[identificador_usuario];

        if (correo == usuario_actual.correo_usuario && contrasenna == usuario_actual.contraseña) {
            return usuario_actual;
        }
    }

};




//const id_usuario = obtener_usuario_ingresado();
const id_usuario_actual = obtener_usuario_ingresado();



const listar_historial_reservas = () => {



    for (let i = 1; i <= reservas.cant_reservas; i++) {
        let identificador_reserva = ('reserva' + i);
        /*     console.log('check 2 ' + identificador_reserva);
               console.log('check 3 ' + reservas[identificador_reserva].id_usuario);
               console.log('check 4 ' + id_usuario_actual.id_usuario); */



        if (reservas[identificador_reserva].id_usuario == id_usuario_actual.id_usuario) {

            let fila = tabla_hist_reserv_body.insertRow();


            fila.insertCell().innerHTML = reservas[identificador_reserva].fecha_reserva;
            fila.insertCell().innerHTML = reservas[identificador_reserva].parqueo_seleccionado;
            fila.insertCell().innerHTML = reservas[identificador_reserva].hora_entrada;
            fila.insertCell().innerHTML = reservas[identificador_reserva].hora_salida;


            if (reservas[identificador_reserva].estado_reserva == 'Paga') {
                fila.insertCell().innerHTML = ('₡' + reservas[identificador_reserva].monto_final);
                fila.insertCell().innerHTML = 'Cancelado' + boton_recibo;

            } else {
                fila.insertCell().innerHTML = ('₡' + reservas[identificador_reserva].monto_total);
                fila.insertCell().innerHTML = reservas[identificador_reserva].estado_reserva;
            }



            tabla_hist_reserv_body.appendChild(fila);
        }


    };
};

listar_historial_reservas();