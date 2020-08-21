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


const label_foto_perfil = document.querySelector('#labelPerfil');
const label_foto_banner = document.querySelector('#labelBanner');
const label_permisoFuncionamiento = document.querySelector('#labelPermiso');

const input_foto_perfil = document.querySelector('#imagen_parqueo_perfil');
const input_foto_banner = document.querySelector('#imagen_parqueo_banner');


//Esta variable se usa para ser enviada en el request.
let pisos_final;
let nombre_duenno;
//

btn_cancelar.addEventListener('click', function() {
    window.location.assign('../../html/htmls-parqueos/prq_mis_parqueos.html');
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



    /*Validación foto perfil*/
    if (input_foto_perfil.src == '') {
        label_foto_perfil.classList.add('error');
        error = true;
    } else {
        label_foto_perfil.classList.remove('eror');
        error = false;
    }
    //Validación foto banner
    if (input_foto_banner.src == '') {
        label_foto_banner.classList.add('error');
        error = true;
    } else {
        label_foto_banner.classList.remove('eror');
        error = false;
    }

    var file = document.getElementById("input-permiso-funcionamiento");
    if (file.value == '') {
        file.classList.add('error');
        error = true;
    } else {
        file.classList.remove('error');
        error = false;
    }



    return error;
};

const obtener_datos = async() => {
    let error = validar();
    if (error == true) {
        Swal.fire({
            'title': "No se ha podido registrar el parqueo",
            'icon': 'warning',
            'text': 'Revise los campos resaltados'
        });

    } else {
        let correo_d = localStorage.getItem('correo_dueño');
        let info_duennos_parqueo = await obtener_duennos_parqueo();
        let id_duenno;
        for (let d = 0; d < info_duennos_parqueo.length; d++) {
            if (correo_d == info_duennos_parqueo[d].correo) {
                id_duenno = info_duennos_parqueo[d]._id;
                break;
            }

        }


        let nombreParqueo = input_nombreParqueo.value;
        let cedulaJuridica = input_cedulaJuridica.value;

        let correo = input_correo.value;

        let permiso = document.getElementById('input-permiso-funcionamiento').value;

        let tarifa = input_tarifa.value;
        let horaApertura = input_horaApertura.value;
        let horaCierre = input_horaCierre.value;

        let facebook = input_facebook.value;
        let twitter = input_twitter.value;
        let instagram = input_instagram.value;

        //Para obtener la opción como texto.
        //select.options[0].text
        let i_provincia = input_provincia.selectedIndex;
        let i_canton = input_canton.selectedIndex;
        let i_distrito = input_distrito.selectedIndex;

        let provincia = input_provincia.options[i_provincia].text;
        let canton = input_canton.options[i_canton].text;
        let distrito = input_distrito.options[i_distrito].text;

        let coordenadas = input_coordenadas.value;

        let foto_perfil = input_foto_perfil.src;
        let foto_banner = input_foto_banner.src;

        let redes = [
            { 'nombre': 'facebook', 'enlace': '\"' + facebook + '\"' },
            { 'nombre': 'twitter', 'enlace': '\"' + twitter + '\"' },
            { 'nombre': 'instagram', 'enlace': '\"' + instagram + '\"' }
        ];

        let ubicacion = distrito + ', ' + canton + ', ' + provincia;

        directo_registrar_parqueo(nombreParqueo, foto_perfil, foto_banner, id_duenno, correo, cedulaJuridica, permiso, redes, ubicacion, coordenadas, 0, tarifa, horaApertura, horaCierre, pisos_final);

        //Registro en la bitácora.
        let fecha_actual = new Date();
        let ref_fecha_actual = fecha_actual.getDate() + '/' + fecha_actual.getMonth() + '/' + fecha_actual.getFullYear();
        await crear_accion_app(duenno_actual.nombre, 'Dueño parqueo', nombreParqueo, ref_fecha_actual, 'Crear parqueo');

        Swal.fire({
            'title': 'La solicitud del parqueo se envió correctamente',
            'icon': "success",
            'text': 'Serás notificado por medio de un correo una vez el parqueo registrado sea habilitado.'
        }).then(function() {
            window.location = '../../html/htmls-parqueos/prq_mis_parqueos.html';
        });
    }
};

/*
Viejo
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

        let foto_perfil = input_foto_perfil.src;
        let foto_banner = input_foto_banner.src;


        registrar_solicitud_parqueo(correo, nombreParqueo, cedulaJuridica, tarifa, horaApertura, horaCierre, pisos, espaciosDiscapacidad, espaciosMotos, espaciosAutos, facebook, instagram, twitter, coordenadas, foto_perfil, foto_banner);

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
        console.log('Imagen perfil: ', foto_perfil);
        console.log('Imagen banner: ', foto_banner);
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
*/