'use strict';

const btn_crearParqueo = document.querySelector('#btn-crearParqueo');
const btn_cancelar = document.querySelector('#btn-cancelar');

const input_nombreParqueo = document.querySelector('#nombre_parqueo');
const input_cedulaJuridica = document.querySelector('#cedulaJuridica');

const input_correo = document.querySelector('#prq-registro-correo');

const input_tarifa = document.querySelector('#tarifa');
const input_horaApertura = document.querySelector('#horaApertura');
const input_horaCierre = document.querySelector('#horaCierre');
const input_pisos = document.querySelector('#pisos');
const input_pisosDropdown = document.querySelector('#pisosDropdown');
const input_espaciosDiscapacidad = document.querySelector('#espaciosDiscapacidad');
const input_espaciosMotos = document.querySelector('#espaciosMotos');
const input_espaciosAuto = document.querySelector('#espaciosAuto');

const input_facebook = document.querySelector('#facebook');

const input_instagram = document.querySelector('#instagram');

const input_provincia = document.getElementById("provincias");
const input_canton = document.getElementById("cantones");
const input_distrito = document.getElementById("distritos");
const input_coordenadas = document.getElementById("coordenadas");

const label_permisoFuncionamiento = document.querySelector('#permisoFuncionamientoLabel');

btn_cancelar.addEventListener('click', function() {
    window.location.assign('perfil_parqueo.html')
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
            'text': 'Revise su información'
        });


        let nombreParqueo = input_nombreParqueo.value;
        let cedulaJuridica = input_cedulaJuridica.value;

        let correo = input_correo.value;

        let permiso = document.querySelector('input[name="permiso"]:checked').value;
        let tarifa = input_tarifa.value;
        let horaApertura = input_horaApertura.value;
        let horaCierre = input_horaCierre.value;
        let pisos = input_pisos.value;
        let pisosDropdown = input_pisosDropdown.value;
        let espaciosDiscapacidad = input_espaciosDiscapacidad.value;
        let espaciosMotos = input_espaciosMotos.value;
        let espaciosAutos = input_espaciosAuto.value;

        let facebook = input_facebook.value;
        let instagram = input_instagram.value;

        let provincia = input_provincia.value;
        let canton = input_canton.value;
        let distrito = input_distrito.value;
        let coordenadas = input_coordenadas.value;

        console.log('Nombre parqueo: ', nombreParqueo);
        console.log('Cedula juridica: ', cedulaJuridica);
        console.log('Correo: ', correo);
        console.log('Permiso funcionamiento: ', permiso);
        console.log('Tarifa: ', tarifa);
        console.log('Hora de apertura: ', horaApertura);
        console.log('Hora de cierre: ', horaCierre);
        console.log('Pisos: ', pisos);
        console.log('Piso seleccionado: ', pisosDropdown);
        console.log('Espacios para personas con discapacidad: ', espaciosDiscapacidad);
        console.log('Espacios para motos: ', espaciosMotos);
        console.log('Espacios para autos: ', espaciosAutos);

        console.log('Enlace de Facebook: ', facebook);
        console.log('Enlace de Instagram: ', instagram);

        console.log('Provincia: ', provincia);
        console.log('Canton: ', canton);
        console.log('Distrito: ', distrito);
        console.log('Coordenadas: ', coordenadas);


    }
};

btn_crearParqueo.addEventListener('click', obtener_datos);