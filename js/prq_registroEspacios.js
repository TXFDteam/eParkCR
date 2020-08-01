'use strict';

const btn_emp_registro_crearPerfil = document.querySelector('#btn_emp_registro_crearPerfil');

const btn_yaTenesCuenta = document.querySelector('#btn-yaTenesCuenta');

const input_nombreParqueo = document.querySelector('#nombre_parqueo');
const input_cedulaJuridica = document.querySelector('#cedulaJuridica');
const label_permisoFuncionamiento = document.querySelector('#permisoFuncionamientoLabel');
const input_tarifa = document.querySelector('#tarifa');
const input_horaApertura = document.querySelector('#horaApertura');
const input_horaCierre = document.querySelector('#horaCierre');
const input_pisos = document.querySelector('#pisos');
const input_pisosDropdown = document.querySelector('#pisosDropdown');
const input_espaciosDiscapacidad = document.querySelector('#espaciosDiscapacidad');
const input_espaciosMotos = document.querySelector('#espaciosMotos');
const input_espaciosAuto = document.querySelector('#espaciosAuto');
const input_provincia = document.querySelector('#emp_registro_provincia');
const input_canton = document.querySelector('#emp_registro_canton');
const input_distrito = document.querySelector('#emp_registro_distrito');
const input_direccion = document.querySelector('#emp_registro_direccion');


btn_yaTenesCuenta.addEventListener('click', function() {
    btn_yaTenesCuenta.href = 'iniciar-sesion.html';
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


        let nombreEmpresa = input_nombreParqueo.value;
        let cedulaJuridica = input_cedulaJuridica.value;
        let permisoFuncionamiento = label_permisoFuncionamiento.value;
        let tarifa = input_tarifa.value;
        let horaApertura = input_horaApertura.value;
        let horaCierre = input_horaCierre.value;
        let pisos = input_pisos.value;
        let pisosDropdown = input_pisosDropdown.value;
        let espaciosDiscapacidad = input_espaciosDiscapacidad.value;
        let espaciosMotos = input_espaciosMotos.value;
        let espaciosAutos = input_espaciosAuto.value;
        let provincia = input_provincia.value;
        let canton = input_canton.value;
        let distrito = input_distrito.value;
        let direccion = input_direccion.value;



        console.log('Nombre parqueo: ', nombreEmpresa);
        console.log('Cedula juridica: ', cedulaJuridica);
        console.log('Permiso funcionamiento: ', permisoFuncionamiento);
        console.log('Tarifa: ', tarifa);
        console.log('Hora de apertura: ', horaApertura);
        console.log('Hora de cierre: ', horaCierre);
        console.log('Pisos: ', pisos);
        console.log('Piso seleccionado: ', pisosDropdown);
        console.log('Espacios para personas con discapacidad: ', espaciosDiscapacidad);
        console.log('Espacios para motos: ', espaciosMotos);
        console.log('Espacios para autos: ', espaciosAutos);
        console.log('Provincia: ', provincia);
        console.log('Canton: ', canton);
        console.log('Distrito: ', distrito);
        console.log('Direccion: ', direccion);


    }
};

btn_emp_registro_crearPerfil.addEventListener('click', obtener_datos);