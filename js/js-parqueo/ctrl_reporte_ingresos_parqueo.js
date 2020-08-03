'use strict'

const tabla_reporte_ingresos_body = document.querySelector('#tabla_reporte_ingresos_parqueo tbody');
const tabla_reporte_ingresos_header = document.querySelector('#tabla_reporte_ingresos_parqueo thead');
const btn_descargar = document.querySelector('#btn-descargar');



let array_reservas;
let head;
let fila;



//#region /* ----------------- Opcion descargar reporte para imprimir ----------------- */
btn_descargar.addEventListener('click', function() {
    let printContent = document.querySelector('#tabla_reporte_ingresos');

    window.print(printContent);

});
//#endregion



//#region /* --------------------- Identificador de usuario actual -------------------- */
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
    usuario_ingresado = '';
};
//#endregion
const id_usuario = obtener_usuario_ingresado();




/* ------------------------ Funcion imprimir en html ------------------------ */
const listar_datos_tabla = (parq, pingresos, pcomision, pganancias) => {
    let fila = tabla_reporte_ingresos_body.insertRow();

    fila.insertCell().innerHTML = parq.codigo;
    fila.insertCell().innerHTML = parq.nombre;
    fila.insertCell().innerHTML = '₡' + pingresos;
    fila.insertCell().innerHTML = '₡' + pcomision;
    fila.insertCell().innerHTML = '₡' + pganancias;




    tabla_reporte_ingresos_body.appendChild(fila);
};






const listar_reporte = () => {
    tabla_reporte_ingresos_header.innerHTML = '';
    tabla_reporte_ingresos_body.innerHTML = '';
    head = tabla_reporte_ingresos_header.insertRow();
    head.insertCell().innerHTML = 'Id';
    head.insertCell().innerHTML = 'Nombre del parqueo';
    head.insertCell().innerHTML = 'Ingresos totales';
    head.insertCell().innerHTML = 'Total comisión';
    head.insertCell().innerHTML = 'Ganancias del parqueo';

    tabla_reporte_ingresos_header.appendChild(head);

    //AQUÍ CREA LOS DATOS DE LA TABLA
    for (let i = 1; i <= parqueos.cant_parqueos; i++) {
        let identificador_num_parqueo = ('parqueo_' + i);
        let ingresos_totales = 0;
        let porcentaje_comision = administrador.comision / 100;
        let total_comision = 0;
        let ganancias_del_parqueo = 0;
        let id_parqueo = parqueos[identificador_num_parqueo].codigo;


        for (let j = 1; j <= reservas.cant_reservas; j++) {
            let identificador_reserva = ('reserva' + j);

            if (reservas[identificador_reserva].id_parqueo == id_parqueo) {
                ingresos_totales += new Number(reservas[identificador_reserva].monto_total);
            };
        };

        total_comision = ingresos_totales * porcentaje_comision;
        ganancias_del_parqueo = ingresos_totales - total_comision;

        listar_datos_tabla(parqueos[identificador_num_parqueo], ingresos_totales, total_comision, ganancias_del_parqueo);
    }
};



listar_reporte();