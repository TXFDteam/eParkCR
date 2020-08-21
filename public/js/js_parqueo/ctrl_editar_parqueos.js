'use strict';

//Formulario parqueo
//Gereral.
const txt_nombre = document.querySelector('#nombre-parqueo');
const txt_cedula = document.querySelector('#cedula-juridica');
const txt_correo = document.querySelector('#correo');
const txt_tarifa = document.querySelector('#tarifa');
const txt_horaApertura = document.querySelector('#hora-apertura');
const txt_horaCierre = document.querySelector('#hora-cierre');
const txt_ubicacion = document.querySelector('#ubicacion');

//Pisos y espacios
const input_pisos = document.querySelector('#pisos');
const input_pisosDropdown = document.querySelector('#pisosDropdown');
const input_espaciosDiscapacidad = document.querySelector('#espaciosDiscapacidad');
const input_espaciosMotos = document.querySelector('#espaciosMotos');
const input_espaciosAuto = document.querySelector('#espaciosAuto');

//Redes sociales
const txt_enlace_facebook = document.querySelector('#facebook');
const txt_enlace_instagram = document.querySelector('#instagram');
const txt_enlace_twitter = document.querySelector('#twitter');

//Botones
const btn_cancelar = document.querySelector('#btn-cancelar');
const btn_crearParqueo = document.querySelector('#btn-guardar-cambios');

//Imagenes del parqueo.
const input_foto_perfil = document.querySelector('#imagen_parqueo_perfil');
const input_foto_banner = document.querySelector('#imagen_parqueo_banner');

let parqueo_seleccionado;

let pisos_final;
const obtener_parqueo_actual = async() => {
    //Se obtiene la variable que se guardó anteriormente que define el nombre del parqueo seleccionado.
    let id_parqueo_actual = localStorage.getItem('parqueo_para_editar');
    let parqueo_encontrado = await obtener_parqueo_por_id(id_parqueo_actual);
    return parqueo_encontrado;
};

const volver_parqueos = () => {
    window.location.assign('../../html/htmls-parqueos/prq_mis_parqueos.html');
};

const validar = () => {
    let hora_apertura = Number(txt_horaApertura[0] + txt_horaApertura[1]);
    let hora_salida = Number(txt_horaCierre[0] + txt_horaCierre[1]);
    let error = false;

    if (hora_apertura >= hora_salida) {
        console.log('Horas no validas');
        error = true;
        txt_horaApertura.classList.add('error');
        txt_horaApertura.classList.add('error');
    } else {
        txt_horaCierre.classList.remove('error');
        txt_horaCierre.classList.remove('error');
    }
};

const obtener_datos = () => {
    let error = validar();
    if (error == true) {
        Swal.fire({
            'title': "No se ha podido modificar el parqueo",
            'icon': 'warning',
            'text': 'Revise los campos resaltados'
        });
    }

    let tarifa = txt_tarifa.value;
    let horaApertura = txt_horaApertura.value;
    let horaCierre = txt_horaCierre.value;

    let facebook = txt_enlace_facebook.value;
    let twitter = txt_enlace_twitter.value;
    let instagram = txt_enlace_instagram.value;

    //Para obtener la opción como texto.
    //select.options[0].text

    let foto_perfil = input_foto_perfil.src;
    let foto_banner = input_foto_banner.src;

    let redes = [
        { 'nombre': 'facebook', 'enlace': '\"' + facebook + '\"' },
        { 'nombre': 'twitter', 'enlace': '\"' + twitter + '\"' },
        { 'nombre': 'instagram', 'enlace': '\"' + instagram + '\"' }
    ];

    let ubicacion = txt_ubicacion.value;

    console.log(parqueo_seleccionado._id);
    //modificar_parqueo(parqueo_seleccionado._id, )
    //directo_registrar_parqueo(nombreParqueo, foto_perfil, foto_banner, id_duenno, correo, cedulaJuridica, permiso, redes, ubicacion, coordenadas, 0, tarifa, horaApertura, horaCierre, pisos_final);

    modificar_parqueo(parqueo_seleccionado._id, tarifa, horaApertura, horaCierre, pisos_final, redes, foto_perfil, foto_banner);
    Swal.fire({
        'title': 'La solicitud del parqueo se envió correctamente',
        'icon': "success",
        'text': 'Serás notificado por medio de un correo una vez el parqueo registrado sea habilitado.'
    }).then(function() {
        //window.location = '../../html/htmls-parqueos/prq_mis_parqueos.html';
    });

    if (!error) {

        Swal.fire(
            'Parqueo actualizado',
            'Si ha dejado algún espacio en blanco no requerido, la información se mantendrá como estaba previamente',
            'success'
        )
    }
};

const llenar_info_parqueo = (p_parqueo) => {
    if (p_parqueo == null) {
        return;
    }

    txt_nombre.value = p_parqueo.nombre;
    txt_cedula.value = p_parqueo.cedula_juridica;
    txt_correo.value = p_parqueo.email;
    txt_tarifa.value = p_parqueo.tarifa_por_hora;
    txt_horaApertura.value = p_parqueo.hora_apertura;
    txt_horaCierre.value = p_parqueo.hora_cierre;
    txt_ubicacion.value = p_parqueo.ubicacion;

    //Pisos y espacios
    input_pisos.value = 0;
    input_pisosDropdown.value = 0;
    input_espaciosDiscapacidad.value = 0;
    input_espaciosMotos.value = 0;
    input_espaciosAuto.value = 0;

    //Redes sociales
    txt_enlace_facebook.value = p_parqueo.enlaces_redes[0].enlace;
    txt_enlace_twitter.value = p_parqueo.enlaces_redes[1].enlace;
    txt_enlace_instagram.value = p_parqueo.enlaces_redes[2].enlace;

    //Fotos.
    input_foto_perfil.src = p_parqueo.imagen_perfil;
    input_foto_banner.src = p_parqueo.imagen_carta;
};

const mostrar_info = async() => {
    parqueo_seleccionado = await obtener_parqueo_actual();
    llenar_info_parqueo(parqueo_seleccionado);
};

mostrar_info();

//btn_crearParqueo.addEventListener('click', guardar_datos_parqueo);
btn_cancelar.addEventListener('click', volver_parqueos);