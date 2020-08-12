'use strict';

const btn_crearParqueo = document.querySelector('#btn-crearParqueo');
const btn_cancelar = document.querySelector('#btn-cancelar');

const input_nombreParqueo = document.querySelector('#nombre_parqueo');
const input_cedulaJuridica = document.querySelector('#cedulaJuridica');

const input_correo = document.querySelector('#prq-registro-correo');

const input_tarifa = document.querySelector('#tarifa');
const input_horaApertura = document.querySelector('#horaApertura');
const input_horaCierre = document.querySelector('#horaCierre');

const input_pisosDropdown = document.querySelector('#pisosDropdown');
const input_pisos = document.querySelector('#pisos');

const input_espaciosDiscapacidad = document.querySelector('#espaciosDiscapacidad');
const input_espaciosMotos = document.querySelector('#espaciosMotos');
const input_espaciosAuto = document.querySelector('#espaciosAuto');

const input_facebook = document.querySelector('#facebook');
const input_twitter = document.querySelector('#twitter');
const input_instagram = document.querySelector('#instagram');

const input_provincia = document.getElementById("provincias");
const input_canton = document.getElementById("cantones");
const input_distrito = document.getElementById("distritos");
const input_coordenadas = document.getElementById("coordenadas");

const label_permisoFuncionamiento = document.querySelector('#labelPermiso');
const label_imagenPerfil = document.querySelector('#labelPerfil');
const label_imagenBanner = document.querySelector('#labelBanner');

//Esta variable se usa para ser enviada en el request.
let pisos_final;
//

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

    if (document.getElementById('provincias').value == 'Seleccione una opción') {
        error = true;
        input_provincia.classList.add('error');
    } else {
        input_provincia.classList.remove('error');
    }

    if (document.getElementById('cantones').value == 'Seleccione una opción') {
        error = true;
        input_canton.classList.add('error');
    } else {
        input_canton.classList.remove('error');
    }

    if (document.getElementById('distritos').value == 'Seleccione una opción') {
        error = true;
        input_distrito.classList.add('error');
    } else {
        input_distrito.classList.remove('error');
    }


    var file = document.getElementById("permiso");
    if (file.files.length == 0) {
        label_permisoFuncionamiento.classList.add('error');
    } else {
        label_permisoFuncionamiento.classList.remove('error');

    }

    var file = document.getElementById("imagenPerfil");
    if (file.files.length == 0) {
        label_imagenPerfil.classList.add('error');
    } else {
        label_imagenPerfil.classList.remove('error');

    }

    var file = document.getElementById("imagenBanner");
    if (file.files.length == 0) {
        label_imagenBanner.classList.add('error');
    } else {
        label_imagenBanner.classList.remove('error');

    }

    return error;
};

let contador_solicitudes_parqueo = 0;

const obtener_datos = () => {
    let error = validar();
    if (error == true) {
        Swal.fire({
            'title': "No se ha podido registrar el parqueo",
            'icon': 'warning',
            'text': 'Revise los campos resaltados'
        });

    } else {
        // Impresion de los valores del formulario


        let nombreParqueo = input_nombreParqueo.value;
        let cedulaJuridica = input_cedulaJuridica.value;

        let correo = input_correo.value;

        let permiso = document.getElementById('permiso').value;
        let imagenPerfil = document.getElementById('imagenPerfil').value;
        let imagenBanner = document.getElementById('imagenBanner').value;
        let tarifa = input_tarifa.value;
        let horaApertura = input_horaApertura.value;
        let horaCierre = input_horaCierre.value;
        let pisos = input_pisos.value;
        //let pisosDropdown = input_pisosDropdown.value;
        let espaciosDiscapacidad = input_espaciosDiscapacidad.value;
        let espaciosMotos = input_espaciosMotos.value;
        let espaciosAutos = input_espaciosAuto.value;

        let facebook = input_facebook.value;
        let twitter = input_twitter.value;
        let instagram = input_instagram.value;

        let provincia = input_provincia.value;
        let canton = input_canton.value;
        let distrito = input_distrito.value;
        let coordenadas = input_coordenadas.value;

        contador_solicitudes_parqueo += 1;
        registrar_solicitud_parqueo(contador_solicitudes_parqueo, correo, nombreParqueo, cedulaJuridica, tarifa, horaApertura, horaCierre, pisos, espaciosDiscapacidad, espaciosMotos, espaciosAutos, facebook, instagram, twitter, coordenadas);

        Swal.fire({
            'title': 'La solicitud del parqueo se envió correctamente',
            'icon': "success",
            'text': 'Pronto se habilitará'
        }).then(function() {
            window.location = '../../html/htmls-parqueos/prq_mis_parqueos.html';
        });

        console.log('Nombre parqueo: ', nombreParqueo);
        console.log('Cedula juridica: ', cedulaJuridica);
        console.log('Correo: ', correo);
        console.log('Permiso funcionamiento: ', permiso);
        console.log('Imagen perfil: ', imagenPerfil);
        console.log('Imagen banner: ', imagenBanner);
        console.log('Tarifa: ', tarifa);
        console.log('Hora de apertura: ', horaApertura);
        console.log('Hora de cierre: ', horaCierre);
        console.log('Pisos: ', pisos);
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


btn_crearParqueo.addEventListener('click', () => {

    obtener_datos();
});