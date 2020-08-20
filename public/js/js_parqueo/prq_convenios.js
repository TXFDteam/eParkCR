'use strict';

const btn_registrarConvenio = document.querySelector('#btn-registrarConvenio');
const input_porcentajeDescuento = document.querySelector('#porcentajeDescuento');
const input_fechaVencimiento = document.querySelector('#fechaVencimientoConvenio');
const input_fechaInicio = document.querySelector('#fechaInicio');

const input_selectEmpresa = document.querySelector('#empresaAsociada');
const input_selectParqueo = document.querySelector('#parqueoAsociado');





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

/*función para mostrar las tarjetas de crédito en el select, pendiente a que se agreguen tarjetas para probar.*/

const select_empresas = async() => {
    let empresas = await obtener_empresas(); // se invoca al arreglo de tarjetas de la base de datos
    let select = document.querySelector('#empresaAsociada') // se invoca al select del editar_perfil_cliente.html


    for (let e = 0; e < empresas.length; e++) { // ciclo que recorre las tarjetas del cliente
        let option = document.createElement("option"); // se crea el elemento opcion
        option.innerHTML = empresas[e].nombre; //Se le da el valor a esa opcion
        select.appendChild(option); // se inserta la opcion en el select

    }
}

select_empresas();



const select_parqueos = async() => {
    let parqueos = await obtener_parqueos(); // se invoca al arreglo de tarjetas de la base de datos
    let select2 = document.querySelector('#parqueoAsociado') // se invoca al select del editar_perfil_cliente.html


    for (let p = 0; p < parqueos.length; p++) {
        if (id == parqueos[p].id_duenno) {
            let option = document.createElement("option");
            option.innerHTML = parqueos[p].nombre;
            select2.appendChild(option);
        }

    }
}

select_parqueos();



const validar = () => {
    let error;
    let campos_requeridos = document.querySelectorAll('[required]');

    let tamanno = campos_requeridos.length;



    for (let i = 0; i < tamanno; i++) {
        // Verifica si el campo de texto está en blanco
        if (campos_requeridos[i].value == '') {
            error = true;
            campos_requeridos[i].classList.add('error');
        } else {
            campos_requeridos[i].classList.remove('error');
        }
    }

    var now = new Date();
    var varDate = new Date(document.querySelector('#fechaVencimientoConvenio').value);

    if (varDate < now) {
        error = true;
        input_fechaVencimiento.classList.add('error');
    } else {
        input_fechaVencimiento.classList.remove('error');
    }



    return error;
};



const obtener_datos = () => {
    let error = validar();
    if (error == true) {
        Swal.fire({
            'title': "No se ha podido registrar el usuario",
            'icon': 'warning',
            'text': 'Revise los campos resaltados'
        });

    } else {
        // Impresion de los valores del formulario
        Swal.fire({
            'title': 'El usuario se registro correctamente',
            'icon': "success",
            'text': 'Revise su correo electronico'
        });



        let porcentajeDescuento = input_porcentajeDescuento.value;
        let fechaInicio = input_fechaInicio.value;
        let fechaVencimiento = input_fechaVencimiento.value;
        let selectEmpresa = input_selectEmpresa.value;
        let selectParqueo = input_selectParqueo.value;




        console.log('Porcentaje de descuento: ', porcentajeDescuento + '%');
        console.log('Fecha de inicio: ', fechaInicio);
        console.log('Fecha de vencimiento: ', fechaVencimiento);
        console.log('Empresa: ', selectEmpresa);
        console.log('Parqueo: ', selectParqueo);

        registrar_convenio();

    }
};

btn_registrarConvenio.addEventListener('click', obtener_datos);