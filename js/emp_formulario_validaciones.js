'use strict';

const btn_yaTenesCuenta = document.querySelector('#btn_emp_registro_yaTenesCuenta');
const btn_emp_registro_crearPerfil = document.querySelector('#btn_emp_registro_crearPerfil');

const input_nombreEmpresa = document.querySelector('#emp_registro_nombre');
const input_nombreEncargado = document.querySelector('#emp_registro_nombreEncargado');
const input_contrasena = document.querySelector('#emp_registro_contrasena');
const input_cedulaJuridica = document.querySelector('#emp_registro_juridica');

const input_imagen = document.getElementById('myFile');

const input_correo = document.querySelector('#emp_registro_correo');
const input_confirmarContrasena = document.querySelector('#emp_registro_confirmaContrasena');




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

    let emailval = /^[^@]*@[^@]*$/;
    if (input_correo.value.match(emailval)) {
        input_correo.classList.remove('error');
    } else {
        error = true;
        input_correo.classList.add('error');
    }


    if (input_contrasena.value.match(input_confirmarContrasena.value)) {
        input_correo.classList.remove('error');
    } else {
        error = true;
        input_confirmarContrasena.classList.add('error');
    }


    return error;
};

const obtener_datos = () => {
    let error = validar();
    if (error == true) {
        Swal.fire({
            'title': "No te has podido registrar",
            'icon': 'warning',
            'text': 'Revisá los campos resaltados'
        });

    } else {
        // Impresion de los valores del formulario
        Swal.fire({
            'title': 'Te registraste correctamente',
            'icon': "success",
            'text': 'Revisá tu información'
        }).then(function() {
            window.location = '../../index.html';
        });


        let nombreEmpresa = input_nombreEmpresa.value;
        let nombreEncargado = input_nombreEncargado.value;
        let contrasena = input_contrasena.value;
        let imagen = input_imagen.value;
        let cedulaJuridica = input_cedulaJuridica.value;
        let correo = input_correo.value;
        let confirmarContrasena = input_confirmarContrasena.value;
        let provincia = input_provincia.options[input_provincia.selectedIndex].text;
        let cantones = input_canton.options[input_canton.selectedIndex].text;
        let distritos = input_distrito.options[input_distrito.selectedIndex].text;
        let coordenadas = input_coordenadas.value;

        console.log('Nombre empresa: ', nombreEmpresa);
        console.log('Nombre encargado: ', nombreEncargado);
        console.log('Contrasena: ', contrasena);

        console.log('Cedula juridica: ', cedulaJuridica);
        console.log('Imagen: ', imagen);
        console.log('Correo: ', correo);
        console.log('Confirmar contrasena: ', confirmarContrasena);
        console.log('Provincia: ', provincia);
        console.log('Canton: ', cantones);
        console.log('Distrito: ', distritos);
        console.log('Coordenada: ', coordenadas);



    }
};

btn_emp_registro_crearPerfil.addEventListener('click', obtener_datos);