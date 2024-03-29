'use strict';

const btn_prq_registro_crearPerfil = document.querySelector('#btn-prq-registro-crearPerfil');
const btn_yaTenesCuenta = document.querySelector('#btn-prq-registro-yaTenesCuenta');

const input_nombreSociedad = document.querySelector('#prq-registro-nombre');
const input_nombreParqueo = document.querySelector('#prq-registro-nombreParqueo');
const input_contrasena = document.querySelector('#prq-registro-contrasena');
const input_cedulaJuridica = document.querySelector('#prq-registro-jurídica');

const input_cuenta = document.querySelector('#prq-registro-cuenta');

const foto = document.querySelector('#duenno-parqueo-foto');

const input_telefono = document.querySelector('#prq-registro-telefono');
const label_permisoFuncionamiento = document.querySelector('#permisoFuncionamientoLabel');

const input_correo = document.querySelector('#prq-registro-correo');
const input_confirmarContrasena = document.querySelector('#prq-registro-confirmaContrasena');
const input_provincia = document.getElementById("provincias");
const input_canton = document.getElementById("cantones");
const input_distrito = document.getElementById("distritos");
const input_coordenadas = document.getElementById("coordenadas");


btn_yaTenesCuenta.addEventListener('click', function() {
    window.location.assign('iniciar-sesion.html')
});



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


    let mailformat = /^\S+@\S+$/;
    if (input_correo.value.match(mailformat)) {
        input_correo.classList.remove('error');
    } else {
        error = true;
        input_correo.classList.add('error');
    }





    let telval = /[0-9]{4}-[0-9]{4}/;
    if (input_telefono.value.match(telval)) {
        input_telefono.classList.remove('error');
    } else {
        error = true;
        input_telefono.classList.add('error');
    }


    if (input_contrasena.value.match(input_confirmarContrasena.value)) {
        input_correo.classList.remove('error');
    } else {
        error = true;
        input_confirmarContrasena.classList.add('error');
    }
    return error;
}





const obtener_datos = () => {
    let error = validar();
    if (error == true) {
        Swal.fire({
            'title': "No se ha podido registrar",
            'icon': 'warning',
            'text': 'Revise los campos resaltados'
        });

    } else {
        // Impresion de los valores del formulario
        let correo = input_correo.value;
        let nombreSociedad = input_nombreSociedad.value;
        let cedulaJuridica = input_cedulaJuridica.value;
        let contrasena = input_contrasena.value;
        let telefono = input_telefono.value;
        let cuenta = input_cuenta.value;
        let foto_url = foto.src;
        let confirmarContrasena = input_confirmarContrasena.value;

        registrar_duenno_parqueo(correo, nombreSociedad, cedulaJuridica, contrasena, telefono, cuenta, foto_url);


        console.log('Nombre Sociedad: ', nombreSociedad);
        console.log('Contrasena: ', contrasena);

        console.log('Cedula juridica: ', cedulaJuridica);

        console.log('Cuenta: ', cuenta);
        console.log('Telefono: ', telefono);

        console.log('Correo: ', correo);
        console.log('Confirmar contrasena: ', confirmarContrasena);

        Swal.fire({
            'title': 'Se registró correctamente',
            'icon': "success",
            'text': 'Revise su información'
        }).then(function() {
            window.location = 'index.html';
        });

    }
};

btn_prq_registro_crearPerfil.addEventListener('click', function() {
    obtener_datos();
});