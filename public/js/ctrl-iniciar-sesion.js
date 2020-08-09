'use strict';


let input_correo = document.querySelector('#correo');
let input_contrasenna = document.querySelector('#contrasenna');
let btn_iniciar_sesion = document.querySelector('#btn-iniciar-sesion');

let btn_cliente = document.querySelector('#btn-cliente');
let btn_parqueo = document.querySelector('#btn-parqueo');


btn_cliente.addEventListener('click', function() {
    window.location.assign("CI_registro_usuarios.html");
});
btn_parqueo.addEventListener('click', function() {
    window.location.assign("duenno-parqueo-peticion.html");
});



const validar = () => {
    let error;
    let campos_requeridos = document.querySelectorAll('[required]');

    campos_requeridos.forEach(campo => {
        if (campo.value == '') {
            campo.classList.add('error');
            error = true;
        } else {
            campo.classList.remove('error');
        }
    });
    return error;
};

const validarEmail = (email) => {
    let error = false;
    if (!(/@+/.test(email))) {
        error = true;
    }

    return error;
}


let obtener_datos_y_validar = async() => {
    let correo = input_correo.value;
    let contrasenna = input_contrasenna.value;

    validar();
    let errorCorreo = validarEmail(correo);

    if (errorCorreo) {
        input_correo.classList.add('error');
    } else {
        //input_correo.remove('error');
    }

    let info_admin = await obtener_admin();
    console.log(info_admin);
    //let info_clientes = 
    let info_duennos_parqueo = await obtener_duennos_parqueo();
    console.log(info_duennos_parqueo);

    //AQUI GUARDA LOCALMENTE LOS DATOS DE CORREO Y CONTRASEÑA
    localStorage.setItem('correo', input_correo.value);
    localStorage.setItem('contrasenna', input_contrasenna.value);

    //DETERMINAR EL DUEÑO DE PARQUEO PARA LOGEAR
    for (let c = 0; c < info_duennos_parqueo.length; c++) {
        if (correo == info_duennos_parqueo[c].correo && contrasenna == info_duennos_parqueo[c].contraseña) {

            window.location.assign("../../public/html/htmls-parqueos/prq_mis_parqueos.html");

            localStorage.setItem('correo_dueño', info_duennos_parqueo[c].correo);
            localStorage.setItem('contraseña_dueño', info_duennos_parqueo[c].contraseña);

            console.log(localStorage.getItem('correo_dueño'));
            console.log(localStorage.getItem('contraseña_dueño'));
            break;
        }
    }


    if (correo == info_admin[0].correo && contrasenna == info_admin[0].contraseña) {
        window.location.assign("../../public/html/htmls-admin/lista-solicitudes-registro.html");

    } else {
        Swal.fire({
            'title': "Datos incorrectos",
            'icon': 'warning',
            'text': 'Revise que el correo o contraseña sea el correcto'
        });
        /*for (let d = 1; d <= duennos_parqueos.cant_duennos; d++) {
            let identificador_duenno = ('duenno_parqueo' + d);
            if (correo == duennos_parqueos[identificador_duenno].correo_duenno && contrasenna == duennos_parqueos[identificador_duenno].contraseña) {
                window.location.assign("../../public/html/htmls-parqueos/prq_mis_parqueos.html");
            }
        }*/
    }
    /*for (let e = 1; e <= empresas.cant_empresas; e++) {
        let identificador_empresa = ('empresa_' + e);
        if (correo == empresas.lista_empresas[identificador_empresa].correo_empresa && contrasenna == empresas.lista_empresas[identificador_empresa].contrasenna_empresa) {
            window.location.assign("../../public/html/htmls-empresas/convenios-empresa.html");
        }
    }*/

};

//let validar_datos = () => {};

btn_iniciar_sesion.addEventListener('click', () => {
    obtener_datos_y_validar();
});