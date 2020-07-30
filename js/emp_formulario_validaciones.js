'use strict';

const btn_emp_registro_crearPerfil = document.querySelector('#btn_emp_registro_crearPerfil');
const input_nombreEmpresa = document.querySelector('#emp_registro_nombre');
const input_nombreEncargado = document.querySelector('#emp_registro_nombreEncargado');
const input_contrasena = document.querySelector('#emp_registro_contrasena');
const input_cedulaJuridica = document.querySelector('#emp_registro_juridica');
const input_correo = document.querySelector('#emp_registro_correo');
const input_confirmarContrasena = document.querySelector('#emp_registro_confirmaContrasena');
const input_provincia = document.querySelector('#emp_registro_provincia');
const input_canton = document.querySelector('#emp_registro_canton');
const input_distrito = document.querySelector('#emp_registro_distrito');
const input_direccion = document.querySelector('#emp_registro_direccion');

const label_permisoFuncionamiento = document.querySelector('#permisoFuncionamientoLabel');




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


    var len = document.querySelectorAll('input[type="checkbox"]:checked').length
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


        const input_nombreEmpresa = document.querySelector('#emp_registro_nombre');
        const input_nombreEncargado = document.querySelector('#emp_registro_nombreEncargado');
        const input_contrasena = document.querySelector('#emp_registro_contrasena');
        const input_cedulaJuridica = document.querySelector('#emp_registro_juridica');
        const input_correo = document.querySelector('#emp_registro_correo');
        const input_confirmarContrasena = document.querySelector('#emp_registro_confirmaContrasena');
        const input_provincia = document.querySelector('#emp_registro_provincia');
        const input_canton = document.querySelector('#emp_registro_canton');
        const input_distrito = document.querySelector('#emp_registro_distrito');
        const input_direccion = document.querySelector('#emp_registro_direccion');


        let nombreEmpresa = input_nombreEmpresa.value;
        let nombreEncargado = input_nombreEncargado.value;
        let contrasena = input_contrasena.value;
        let permisoFuncionamiento = document.querySelector('.emp_registro_permiso:checked').value;
        let cedulaJuridica = input_cedulaJuridica.value;
        let correo = input_correo.value;
        let confirmarContrasena = input_confirmarContrasena.value;
        let provincia = input_provincia.value;
        let canton = input_canton.value;
        let distrito = input_distrito.value;
        let direccion = input_direccion.value;



        console.log('Nombre empresa: ', nombreEmpresa);
        console.log('Nombre encargado: ', nombreEncargado);
        console.log('Contrasena: ', contrasena);
        console.log('Permiso funcionamiento: ', permisoFuncionamiento);
        console.log('Cedula juridica: ', cedulaJuridica);
        console.log('Correo: ', correo);
        console.log('Confirmar contrasena: ', confirmarContrasena);
        console.log('Provincia: ', provincia);
        console.log('Canton: ', canton);
        console.log('Distrito: ', distrito);
        console.log('Direccion: ', direccion);


    }
};

btn_emp_registro_crearPerfil.addEventListener('click', obtener_datos);