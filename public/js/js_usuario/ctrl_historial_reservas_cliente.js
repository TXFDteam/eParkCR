'use strict'

//Relacionar la informacion del HTML
const tabla_hist_reserv_header = document.querySelector('#tablahistorial thead');
const tabla_hist_reserv_body = document.querySelector('#tablahistorial tbody');
const btn_descargar = document.querySelector('#btn_descargar');




/* ----------------- Opcion descargar reporte para imprimir ----------------- */
btn_descargar.addEventListener('click', function() {
    let printContent = document.querySelector('#tablahistorial');

    window.print(printContent);

});


/* --------------------- Identificador de usuario actual -------------------- */
let correoC = localStorage.getItem('correo');
console.log(correoC);
let contrasennaC = localStorage.getItem('contrasenna');
console.log(contrasennaC);



let buscar_info_cliente = async() => {

    let info_clientes = await obtener_clientes();
    let id;
    //c va a ser el  contador para encontrar los clientes
    for (let c = 0; c < info_clientes.length; c++) {
        if (correoC == info_clientes[c].correo && contrasennaC == info_clientes[c].contraseña) {
            id = info_clientes[c]._id;
            console.log(id);

        }
    }
    return id;
};

let id_cliente = buscar_info_cliente();
console.log(id_cliente);





const listar_historial_reservas = async() => {

    let reservas = obtener_reservas();

    reservas.forEach(reserva => {




        if (reserva.id_usuario == id_cliente) {

            let fila = tabla_hist_reserv_body.insertRow();


            fila.insertCell().innerHTML = reserva.fecha_reserva;
            fila.insertCell().innerHTML = reserva.nombre_parqueo;
            fila.insertCell().innerHTML = reserva.hora_entrada;
            fila.insertCell().innerHTML = reserva.hora_salida;


            if (reserva.estado_reserva == 'Paga') {
                fila.insertCell().innerHTML = ('₡' + reserva.monto_final);
                fila.insertCell().innerHTML = 'Cancelado';
                let celda_recibo = fila.insertCell();
                let enlace_recibo = document.createElement('button');
                enlace_recibo.type = 'button';
                enlace_recibo.innerText = 'Ver recibo';

                enlace_recibo.addEventListener('click', () => {
                    /* ************************* */
                    /*ENLACE AL RECIBO*/
                    /* ************************* */

                });

                celda_recibo.appendChild(enlace_recibo);


            } else {
                fila.insertCell().innerHTML = ('₡' + reserva.monto_total);
                fila.insertCell().innerHTML = reserva.estado_reserva;
            }



            tabla_hist_reserv_body.appendChild(fila);
        }


    });
};

listar_historial_reservas();