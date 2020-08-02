'use strict';

const btn_prq_registro_crearPerfil = document.querySelector('#btn-prq-registro-crearPerfil');
const input_nombreSociedad = document.querySelector('#prq-registro-nombre');
const input_nombreParqueo = document.querySelector('#prq-registro-nombreParqueo');
const input_contrasena = document.querySelector('#prq-registro-contrasena');
const input_cedulaJuridica = document.querySelector('#prq-registro-jurídica');

const input_cuenta = document.querySelector('#prq-registro-cuenta');
const input_telefono = document.querySelector('#prq-registro-telefono');

const input_correo = document.querySelector('#prq-registro-correo');
const input_confirmarContrasena = document.querySelector('#prq-registro-confirmaContrasena');
const input_provincia = document.getElementById("provincias");
const input_canton = document.getElementById("cantones");
const input_distrito = document.getElementById("distritos");
const input_coordenadas = document.getElementById("coordenadas");

const label_permisoFuncionamiento = document.querySelector('#permisoFuncionamientoLabel');


const validarEmail = (email) => {
    let error = false;
    if (!(/@+/.test(email))) {
        error = true;
    }

    return error;
}

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


    let errorCorreo = validarEmail(input_correo.value);

    if (errorCorreo) {
        input_correo.classList.add('error');
    } else {
        input_correo.remove('error');
    }


    let telval = /[0-9]{4}[0-9]{4}/;
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


    var len = document.querySelectorAll('input[type="radio"]:checked').length
    if (len <= 0) {
        error = true;
        label_permisoFuncionamiento.classList.add('error');

    } else {
        label_permisoFuncionamiento.classList.remove('error');
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


        let nombreSociedad = input_nombreSociedad.value;
        let nombreParqueo = input_nombreParqueo.value;
        let contrasena = input_contrasena.value;
        let permiso = document.querySelector('input[name="permiso"]:checked').value;
        let cedulaJuridica = input_cedulaJuridica.value;

        let cuenta = input_cuenta.value;
        let telefono = input_telefono.value;

        let correo = input_correo.value;
        let confirmarContrasena = input_confirmarContrasena.value;
        let provincia = input_provincia.options[input_provincia.selectedIndex].text;
        let cantones = input_canton.options[input_canton.selectedIndex].text;
        let distritos = input_distrito.options[input_distrito.selectedIndex].text;
        let coordenadas = input_coordenadas.value;

        console.log('Nombre Sociedad: ', nombreSociedad);
        console.log('Nombre Parqueo: ', nombreParqueo);
        console.log('Contrasena: ', contrasena);
        console.log('Permiso funcionamiento: ', permiso);
        console.log('Cedula juridica: ', cedulaJuridica);

        console.log('Cuenta: ', cuenta);
        console.log('Telefono: ', telefono);

        console.log('Correo: ', correo);
        console.log('Confirmar contrasena: ', confirmarContrasena);
        console.log('Provincia: ', provincia);
        console.log('Canton: ', canton);
        console.log('Distrito: ', distrito);
        console.log('Direccion: ', direccion);


    }
};

btn_prq_registro_crearPerfil.addEventListener('click', obtener_datos);