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





const listar_historial_reservas = async() => {

    let id_cliente = await buscar_info_cliente();
    console.log(id_cliente);

    let reservas = await obtener_reservas(id_cliente);
    console.log(reservas);

    reservas.forEach(reserva => {




        if (reserva.id_usuario == id_cliente) {

            let fila = tabla_hist_reserv_body.insertRow();


            fila.insertCell().innerHTML = reserva.fecha_reserva;
            fila.insertCell().innerHTML = reserva.nombre_parqueo;
            fila.insertCell().innerHTML = reserva.hora_entrada;
            fila.insertCell().innerHTML = reserva.hora_salida;


            if (reserva.estado_reserva == 'PAGA') {
                fila.insertCell().innerHTML = ('₡' + new Number(reserva.monto_final).toFixed(2));
                fila.insertCell().innerHTML = 'Pagado';
                let celda_recibo = fila.insertCell();
                let enlace_recibo = document.createElement('button');
                enlace_recibo.type = 'button';
                enlace_recibo.classList.add('recibo');
                enlace_recibo.innerText = '(Ver recibo)';

                enlace_recibo.addEventListener('click', () => {
                    window.location.href = `recibo_pago_clientes.html?_id=${reserva._id}`
                });

                celda_recibo.appendChild(enlace_recibo);


            } else if (reserva.estado_reserva == 'CANCELADA') {
                fila.insertCell().innerHTML = ('');
                fila.insertCell().innerHTML = 'Cancelada';
                fila.insertCell().innerHTML = ('');


            } else {
                fila.insertCell().innerHTML = ('₡' + new Number(reserva.monto_total).toFixed(2));
                fila.insertCell().innerHTML = reserva.estado_reserva;
                let celda_pagar = fila.insertCell();
                let enlace_pago = document.createElement('button');
                enlace_pago.type = 'button';
                enlace_pago.classList.add('recibo');
                enlace_pago.innerText = '(Pagar)';

                enlace_pago.addEventListener('click', () => {
                    window.location.href = 'cl_pagar_pendientes.html'
                });
                celda_pagar.appendChild(enlace_pago);
            }



            tabla_hist_reserv_body.appendChild(fila);
        }


    });
};

listar_historial_reservas();