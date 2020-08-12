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
    let info_clientes = await obtener_clientes();
    console.log(info_clientes);
    let info_duennos_parqueo = await obtener_duennos_parqueo();
    console.log(info_duennos_parqueo);
    let info_empresas = await obtener_empresas();
    console.log(info_empresas);

    //AQUI GUARDA LOCALMENTE LOS DATOS DE CORREO Y CONTRASEÑA
    localStorage.setItem('correo', input_correo.value);
    localStorage.setItem('contrasenna', input_contrasenna.value);

    //DETERMINAR EL CLIENTE QUE SE LOGEA
    for (let c = 0; c < info_clientes.length; c++) {
        if (correo == info_clientes[c].correo && contrasenna == info_clientes[c].contraseña) {

            window.location.assign("../public/html/htmls-usuarios/perfil_cliente.html");

            localStorage.setItem('correo_cliente', info_clientes[c].correo);
            localStorage.setItem('contraseña_cliente', info_clientes[c].contraseña);

            console.log(localStorage.getItem('correo_cliente'));
            console.log(localStorage.getItem('contraseña_cliente'));
            break;
        }
    }
    //DETERMINAR LA EMPRESA PARA LOGEAR
    for (let e = 0; e < info_empresas.length; e++) {
        if (correo == info_empresas[e].correo && contrasenna == info_empresas[e].contraseña) {
            window.location.assign("../../public/html/htmls-empresas/perfil_empresa.html");
            localStorage.setItem('correo_empresa', info_empresas[e].correo);
            localStorage.setItem('contraseña_empresa', info_empresas[e].contraseña);

            console.log(localStorage.getItem('correo_empresa'));
            console.log(localStorage.getItem('contraseña_empresa'));
            break;
        }
    }

    //DETERMINAR EL DUEÑO DE PARQUEO PARA LOGEAR
    for (let d = 0; d < info_duennos_parqueo.length; d++) {
        if (correo == info_duennos_parqueo[d].correo && contrasenna == info_duennos_parqueo[d].contraseña) {

            window.location.assign("../public/html/htmls-parqueos/prq_mis_parqueos.html");

            localStorage.setItem('correo_dueño', info_duennos_parqueo[d].correo);
            localStorage.setItem('contraseña_dueño', info_duennos_parqueo[d].contraseña);

            console.log(localStorage.getItem('correo_dueño'));
            console.log(localStorage.getItem('contraseña_dueño'));
            break;
        }
    }


    if (correo == info_admin[0].correo && contrasenna == info_admin[0].contraseña) {
        window.location.assign("../public/html/htmls-admin/lista-solicitudes-registro.html");
        localStorage.setItem('correo_admin', info_admin[0].correo);
        localStorage.setItem('contraseña_admin', info_admin[0].contraseña);
        console.log(localStorage.getItem('correo_admin'));
        console.log(localStorage.getItem('contraseña_admin'));

    } else {
        Swal.fire({
            'title': "Datos incorrectos",
            'icon': 'warning',
            'text': 'Revise que el correo o contraseña sea el correcto'
        });


    };
};

//let validar_datos = () => {};

btn_iniciar_sesion.addEventListener('click', () => {
    obtener_datos_y_validar();
});