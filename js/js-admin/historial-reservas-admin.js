'use strict';
const tabla_usuarios_header = document.querySelector('#tabla-reservas thead');
const tabla_usuarios = document.querySelector('#tabla-reservas tbody');

const btn_descargar = document.querySelector('#btn-descargar');


let head;
let fila;

/*
const nombre_solicitud = (p_nombre_solicitud) => {
    console.log('La solicitud es: ' + p_nombre_solicitud);

    //Se guarda la variable que dice cuál solicitud se seleccionó
    localStorage.setItem('solicitud_seleccionada', p_nombre_solicitud);

    //Se redirige al html que muestra la solicitud
    window.location.assign("../../html/htmls-admin/info-solicitud-parqueo-admin.html");
};*/

const listar_usuarios = (usuario) => {

    fila = tabla_usuarios.insertRow();

    fila.insertCell().innerHTML = usuario.id_usuario;
    fila.insertCell().innerHTML = usuario.nombre_usuario;
    fila.insertCell().innerHTML = usuario.parqueo_seleccionado;
    fila.insertCell().innerHTML = usuario.fecha_reserva;
    fila.insertCell().innerHTML = usuario.horas;
    fila.insertCell().innerHTML = usuario.descuento;
    fila.insertCell().innerHTML = usuario.monto_total;

    tabla_usuarios.appendChild(fila);

};
let mostrar_usuarios = () => {
    tabla_usuarios_header.innerHTML = '';
    tabla_usuarios.innerHTML = '';
    head = tabla_usuarios_header.insertRow();
    head.insertCell().innerHTML = 'Id';
    head.insertCell().innerHTML = 'Nombre';
    head.insertCell().innerHTML = 'Parqueo';
    head.insertCell().innerHTML = 'Fecha';
    head.insertCell().innerHTML = 'Cantidad de horas';
    head.insertCell().innerHTML = 'Porcentaje de descuento';
    head.insertCell().innerHTML = 'Monto pagado';
    tabla_usuarios_header.appendChild(head);



    for (let i = 1; i <= reservas.cant_reservas; i++) {
        let identificador_reserva = ('reserva' + i);
        //CALCULAR HORAS RESERVADAS
        let hEnt = parseFloat(reservas[identificador_reserva].hora_entrada);
        let hSal = parseFloat(reservas[identificador_reserva].hora_salida);
        console.log(hEnt);
        console.log(hSal);
        let horas = hSal - hEnt;
        reservas[identificador_reserva].horas = horas;

        //Este primer for busca el convenio
        for (let x = 1; x <= convenios_empresa.cant_convenios; x++) {
            let identificador_convenio = ('convenio' + x);
            //Por cada convenio identifica un usuario
            for (let l = 1; l <= convenios_empresa[identificador_convenio].cant_empleados; l++) {
                let identificador_empleado = ('empleado' + l);
                //Si el usuario analizado dentro del ciclo es igual a la reserva se le aplica el descuento de ese convenio, si no queda en blanco.
                if (convenios_empresa[identificador_convenio].empleados[identificador_empleado].id_empleado == reservas[identificador_reserva].id_usuario) {
                    reservas[identificador_reserva].descuento = convenios_empresa[identificador_convenio].porcentaje_descuento;
                }
                //Ciclo para analizar el parqueo en q reservó y asi poder calcular el monto según las horas q estuvo
                for (let p = 1; p <= parqueos.cant_parqueos; p++) {
                    let identificador_parqueo = ('parqueo_' + p);
                    if (parqueos[identificador_parqueo].nombre == reservas[identificador_reserva].parqueo_seleccionado) {
                        //monto1 calcula la cantidad de horas por la tarifa
                        let monto1 = reservas[identificador_reserva].horas * parqueos[identificador_parqueo].tarifa_hora;
                        //monto2 calcula el descuento aplicado
                        let monto2 = (monto1 * reservas[identificador_reserva].descuento) / 100;
                        //montoT es el monto toal pagado
                        let montoT = monto1 - monto2;
                        reservas[identificador_reserva].monto_total = montoT;

                        //Si el usuario no tiene descuento calcula solo la cantidad de horas por la tarifa
                        if (reservas[identificador_reserva].descuento == '') {
                            reservas[identificador_reserva].monto_total = reservas[identificador_reserva].horas * parqueos[identificador_parqueo].tarifa_hora;
                        }
                    }
                }
            }
            //console.log(reservas[identificador_reserva].descuento);
        }


        listar_usuarios(reservas[identificador_reserva]);
    }
};

mostrar_usuarios();

btn_descargar.addEventListener('click', function() {
    let printContent = document.querySelector('#printable-area');
    //let originalContent = document.body.innerHTML;

    //document.body.innerHTML = printContent;
    window.print(printContent);

    //document.body.innerHTML = originalContent;
});