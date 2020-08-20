'use strict';

//Formulario parqueo
//Gereral.
const txt_nombre = document.querySelector('#nombre-parqueo');
const txt_cedula = document.querySelector('#cedula-juridica');
const txt_correo = document.querySelector('#correo');
const txt_tarifa = document.querySelector('#tarifa');
const txt_hora_apertura = document.querySelector('#hora-apertura');
const txt_hora_cierre = document.querySelector('#hora-cierre');
const txt_ubicacion = document.querySelector('#ubicacion');

//Pisos y espacios
const txt_pisos = document.querySelector('#pisos');
const txt_pisos_dropdown = document.querySelector('#pisosDropdown');
const txt_espacios_discapacidad = document.querySelector('#espaciosDiscapacidad');
const txt_espacios_motos = document.querySelector('#espaciosMotos');
const txt_espacios_autos = document.querySelector('#espaciosAuto');

//Redes sociales
const txt_enlace_facebook = document.querySelector('#facebook');
const txt_enlace_instagram = document.querySelector('#instagram');
const txt_enlace_twitter = document.querySelector('#twitter');

//Botones
//const btn_cancelar = document.querySelector('#btn-cancelar');
const btn_guardar_cambios = document.querySelector('#btn-guardar-cambios');

//Imagenes del parqueo.
let imagen_carta;
let imagen_perfil;

let parqueo_seleccionado;

const obtener_parqueo_actual = async() => {
    //Se obtiene la variable que se guardó anteriormente que define el nombre del parqueo seleccionado.
    let id_parqueo_actual = localStorage.getItem('parqueo_para_editar');
    let parqueo_encontrado = await obtener_parqueo_por_id(id_parqueo_actual);

    return parqueo_encontrado;
};

const volver_parqueos = () => {
    window.location.assign('../../html/htmls-parqueos/prq_mis_parqueos.html');
};

const guardar_datos_parqueo = () => {
    let hora_apertura = Number(input_hora_apertura[0] + input_hora_apertura[1]);
    let hora_salida = Number(input_hora_salida[0] + input_hora_salida[1]);
    let error = false;

    if (hora_apertura >= hora_salida) {
        console.log('Horas no validas');
        error = true;
        input_hora_apertura.classList.add('error');
        input_hora_salida.classList.add('error');
    } else {
        input_hora_apertura.classList.remove('error');
        input_hora_salida.classList.remove('error');
    }

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
    txt_hora_apertura.value = p_parqueo.hora_apertura;
    txt_hora_cierre.value = p_parqueo.hora_cierre;
    txt_ubicacion.value = p_parqueo.ubicacion;

    //Pisos y espacios
    txt_pisos.value = 0;
    txt_pisos_dropdown.value = 0;
    txt_espacios_discapacidad.value = 0;
    txt_espacios_motos.value = 0;
    txt_espacios_autos.value = 0;

    //Redes sociales
    txt_enlace_facebook.value = p_parqueo.enlaces_redes[0].enlace;
    txt_enlace_twitter.value = p_parqueo.enlaces_redes[1].enlace;
    txt_enlace_instagram.value = p_parqueo.enlaces_redes[2].enlace;
};

const mostrar_info = async() => {
    parqueo_seleccionado = await obtener_parqueo_actual();
    llenar_info_parqueo(parqueo_seleccionado);
};

mostrar_info();

//btn_guardar_cambios.addEventListener('click', guardar_datos_parqueo);
//btn_cancelar.addEventListener('click', volver_parqueos);