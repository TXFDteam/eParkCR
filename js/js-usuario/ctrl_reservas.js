'use strict';

//#region Constantes.
//Elementos que van a cambiar basado en los datos del parqueo.
const plantilla_carta_comentario =
    '<div id="contenedor-superior">\n' +
    '<div id="info-usuario">\n' +
    '<div id="foto-usuario"></div>\n' +

    '<div id="contenedor-nombre-fecha">\n' +
    '<h3>[NOMBRE_USUARIO]</h3>\n' +
    '<p>[FECHA_COMENTARIO]</p>\n' +
    '</div>\n' +
    '</div>\n' +

    '<div id="contenedor-calificacion">\n' +
    '<p>[CALIFICACION]</p>\n' +
    '</div>\n' +
    '</div>\n' +

    '<div id="contenedor-mensaje">\n' +
    '<p>[MENSAJE]</p>\n' +
    '</div>';

//Quemado para pruebas.
let usuario_ingresado;
let comentario_usuario_ingresado;

//Elementos usados para la creación y modificación de comentarios.
const ventana_crear_comentario = document.querySelector('.sct-crear-comentario');
const btn_cerrar_ventana_comentario = document.querySelector('#btn-salir');
const btn_crear_modificar_comentario = document.querySelector('#btn-opcion-comentario');

const btn_eliminar_comentario = document.querySelector('#btn-eliminar-comentario');
const btn_publicar_comentario = document.querySelector('#btn-publicar');

const txt_comentarios_nombre_parqueo = document.querySelector('#nombre-parqueo');
const ventana_crear_comentario_mensaje = document.querySelector('#txt-mensaje');
const ventana_crear_comentario_slt_calificacion = document.querySelector('#slt-calificacion');

//Información del parqueo.
const banner = document.querySelector('#sct-banner');
const lbl_nombre_parqueo = document.querySelector('#NOMBRE_PARQUEO');
const lbl_calificacion_promedio = document.querySelector('#CALIFICACION_PROMEDIO');
const contenedor_comentarios = document.querySelector('#contenedor-comentarios');

//Elementos para el form de la reserva.
const txt_estado_espacio = document.querySelector('#ESTADO_ESPACIO');
const txt_espacio_seleccionado = document.querySelector('#txt-espacio-seleccionado');
const txt_hora_entrada = document.querySelector('#txt-hora-entrada');
const txt_hora_salida = document.querySelector('#txt-hora-salida');
const btn_reservar_espacio = document.querySelector('#btn-reservar-espacio');
const datos_requeridos = document.querySelectorAll('[required]');
//#endregion

//#region Variables
//Se define por fuera para ser usado en este script.
let parqueo_seleccionado;
let info_espacio_seleccionado;
let elemento_espacio_seleccionado;

//#endregion

//#region lógica para reservas

//Esta función se usa para actualizar la información del espacio basado en el que se seleccionó.
//<p_info_espacio> JSON del espacio seleccionado.
//<p_espacio_elemento> referencia al elemento html que se seleccionó.
const actualizar_espacio_seleccionado = (p_info_espacio, p_espacio_elemento) => {
    //Remover clase seleccionado en el espacio anterior.
    if (elemento_espacio_seleccionado != null) {
        elemento_espacio_seleccionado.classList.remove('seleccionado');
    }

    //Uso de la información del espacio seleccionado.
    txt_espacio_seleccionado.value = p_info_espacio.id;
    info_espacio_seleccionado = p_info_espacio;

    if (p_info_espacio.ocupado) {
        txt_estado_espacio.textContent = 'El espacio seleccionado está ocupado.';
        txt_estado_espacio.classList.add('txt_alerta');
    } else {
        txt_estado_espacio.textContent = 'El espacio seleccionado está disponible.';
        txt_estado_espacio.classList.remove('txt_alerta');
        //Actualizar referencia el elemento espacio seleccionado.
        elemento_espacio_seleccionado = p_espacio_elemento;
        elemento_espacio_seleccionado.classList.add('seleccionado');
    }
};

const obtener_parqueo_actual = () => {
    //Se obtiene la variable que se guardó anteriormente que define el nombre del parqueo seleccionado.
    let nombre_parqueo_actual = localStorage.getItem('parqueo_seleccionado');

    //Se busca el parqueo que posee ese nombre.
    for (let i = 1; i <= parqueos.cant_parqueos; i++) {
        let identificador_parqueo = ('parqueo_' + i);
        let nombre_parqueo = parqueos[identificador_parqueo].nombre;

        if (nombre_parqueo == nombre_parqueo_actual) {
            return identificador_parqueo;
        }
    }

    return '';
};

//Esta función se debe llamar al inicio para actualizar los datos de la página usando datos del parqueo seleccionado.
//<p_parqueo> El parqueo del que se va a obtener los datos.
const llenar_info_parqueo = (p_parqueo) => {
    parqueo_seleccionado = p_parqueo;

    if (parqueo_seleccionado == '') {
        return;
    }


    let url = "url(" + "../../imgs/imgs_parqueos/" + p_parqueo.imagen_perfil + ")";
    banner.style.backgroundImage = url;

    lbl_nombre_parqueo.textContent = p_parqueo.nombre;
    txt_comentarios_nombre_parqueo.textContent = p_parqueo.nombre;

    lbl_calificacion_promedio.textContent = 'Calificación promedio: ' + p_parqueo.calificacion_promedio;

    //Para mostrar los datos en el mapa.
    //Esta función está en ctrl_mapa_parqueo.js
    inicializar_mapa(parqueo_seleccionado, true);
};

const hay_espacios_vacios = () => {
    let error = false;

    datos_requeridos.forEach(obj_dato_requerido => {
        if (obj_dato_requerido.value == '') {
            obj_dato_requerido.classList.add('error');
            error = true;
        } else {
            obj_dato_requerido.classList.remove('error');
        }
    });

    return error;
};

//Función usada para las comprobaciones de hora de reserva.
const horas_correctas = () => {
    let correcto = false;

    let fecha_entrada = txt_hora_entrada.value;
    let hora_entrada = Number((fecha_entrada[0] + fecha_entrada[1]));
    let minutos_entrada = Number((fecha_entrada[3] + fecha_entrada[4]));

    let fecha_salida = txt_hora_salida.value;
    let hora_salida = Number((fecha_salida[0] + fecha_salida[1]));
    let minutos_salida = Number((fecha_salida[3] + fecha_salida[4]));

    if (hora_entrada == hora_salida) {
        if (minutos_entrada < minutos_salida) {
            correcto = true;
        }
    } else if (hora_entrada < hora_salida) {
        correcto = true;
    }

    if (correcto) {
        txt_hora_entrada.classList.remove('error');
        txt_hora_salida.classList.remove('error');
    } else {
        txt_hora_entrada.classList.add('error');
        txt_hora_salida.classList.add('error');
    }

    return correcto;
};

//Función usada para crear una reserva en el parqueo actual.
const crear_reserva = () => {
    if (info_espacio_seleccionado != null) {
        if (!info_espacio_seleccionado.ocupado) {
            if (!hay_espacios_vacios()) {
                if (horas_correctas()) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Reserva creada con éxito',
                        text: 'Podés realizar el pago en el menú de reservas.'
                    });
                } else {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Oh no, ha ocurrido un error al hacer la reserva.',
                        text: 'Revisá los espacios: Hora de entrada y hora de salida y aseguráte que tengan datos correctos.'
                    });
                }
            } else {
                Swal.fire({
                    icon: 'warning',
                    title: 'Oh no, ha ocurrido un error al hacer la reserva.',
                    text: 'Revisá que no haya espacios vacíos en el formulario.'
                });
            }
        } else {
            Swal.fire({
                icon: 'warning',
                title: 'Oh no, ha ocurrido un error al hacer la reserva.',
                text: 'No se puede realizar la reservación usando el espacio seleccionado porque ya está ocupado.'
            });
        }
    } else {
        Swal.fire({
            icon: 'warning',
            title: 'Oh no, ha ocurrido un error al hacer la reserva.',
            text: 'No se puede crear la reservación, tenés que seleccionar un espacio para seguir.'
        });
    }
};
//#endregion

//#region Comentarios
//Esta función obtiene el nombre de un usuario basado en su ID.
//<p_id>ID del usuario.
const obtener_nombre_usuario_en_comentario = (p_id) => {
    for (let i = 1; i < usuarios.cant_usuarios; i++) {
        let identificador = ('usuario' + i);
        let usuario_actual = usuarios[identificador];
        if (usuario_actual.id_usuario == p_id) {
            return usuario_actual.nombre_usuario;
        }
    }
};

const crear_carta_comentario = (p_comentario) => {
    let nueva_carta = document.createElement('div');
    nueva_carta.classList.add('carta-comentario');

    let nueva_plantilla = plantilla_carta_comentario;

    let nombre_usuario = obtener_nombre_usuario_en_comentario(p_comentario.id_usuario);
    nueva_plantilla = nueva_plantilla.replace('[NOMBRE_USUARIO]', nombre_usuario);
    nueva_plantilla = nueva_plantilla.replace('[FECHA_COMENTARIO]', p_comentario.fecha);
    nueva_plantilla = nueva_plantilla.replace('[CALIFICACION]', ('Calificación: ' + p_comentario.cantidad_estrellas));
    nueva_plantilla = nueva_plantilla.replace('[MENSAJE]', p_comentario.mensaje);

    nueva_carta.innerHTML = nueva_plantilla;

    contenedor_comentarios.appendChild(nueva_carta);
};

const obtener_comentarios = () => {
    for (let i = 1; i <= comentarios.total_comentarios; i++) {
        let identificador = ('comentario_' + i);
        let comentario_actual = comentarios[identificador];

        //Muestra solo los comentarios que corresponden a este parqueo.
        if (comentario_actual.id_parqueo == parqueo_seleccionado.codigo) {
            //Guardar una copia del comentario que dejó el usuario en este parqueo.
            if (comentario_actual.id_usuario == usuario_ingresado.id_usuario) {
                console.log('Ya hay un comentario realizado por este usuario.');
                comentario_usuario_ingresado = comentarios[identificador];
                btn_crear_modificar_comentario.textContent = 'Modificar reseña';
                btn_eliminar_comentario.classList.remove('oculto');
            }

            crear_carta_comentario(comentario_actual);
        }
    }
};


const mostrar_ventana_crear_comentario = () => {
    //Agregar datos del comentario que dejó el usuario anteriormente si lo hay.
    if (comentario_usuario_ingresado != null) {
        ventana_crear_comentario_mensaje.textContent = comentario_usuario_ingresado.mensaje;
    }
    ventana_crear_comentario.classList.remove('oculto');
};

const ocultar_ventana_crear_comentario = () => {
    ventana_crear_comentario.classList.add('oculto');
};

const publicar_comentario = () => {
    let fecha = new Date();
    let dia_actual = fecha.getDate();
    let mes_actual = fecha.getMonth();
    let anno_actual = fecha.getFullYear();

    let fecha_actual = dia_actual + '/' + mes_actual + '/' + anno_actual;

    //Si ya existe un comentario lo modifica.
    if (comentario_usuario_ingresado != null) {
        console.log('Si pude entrar a editar!!!');
        comentario_usuario_ingresado.calificacion = ventana_crear_comentario_slt_calificacion.value;
        comentario_usuario_ingresado.mensaje = ventana_crear_comentario_mensaje.value;
        comentario_usuario_ingresado.fecha = fecha_actual;
    } else {
        //Si no existe lo crea.
        console.log('Creo nuevo comentario:');
        console.log('id_usuario: ' + usuario_ingresado.id_usuario);
        console.log('id_parqueo: ' + parqueo_seleccionado.codigo);
        console.log('cantidad_estrellas: ' + ventana_crear_comentario_slt_calificacion.value);
        console.log('fecha: ' + fecha_actual);
        console.log('mensaje: ' + ventana_crear_comentario_mensaje.value);
    }

    ocultar_ventana_crear_comentario();
};

const eliminar_comentario = () => {
    if (comentario_usuario_ingresado != null) {
        Swal.fire({
            icon: 'success',
            title: 'Reseña eliminada',
        });
        //Eliminar comentario del DB.
    }
};


const obtener_usuario_ingresado = () => {
    let contrasenna = localStorage.getItem('contrasenna');
    let correo = localStorage.getItem('correo');

    for (let i = 1; i < usuarios.cant_usuarios; i++) {
        let identificador_usuario = ('usuario' + i);
        let usuario_actual = usuarios[identificador_usuario];

        if (correo == usuario_actual.correo_usuario && contrasenna == usuario_actual.contraseña) {
            return usuario_actual;
        }

    }
    usuario_ingresado = '';
};

//#endregion


//Mostrar info del parqueo.
usuario_ingresado = obtener_usuario_ingresado();
parqueo_seleccionado = parqueos[obtener_parqueo_actual()];
llenar_info_parqueo(parqueo_seleccionado);
obtener_comentarios();

//Eventos.

//Comentarios.
btn_cerrar_ventana_comentario.addEventListener('click', ocultar_ventana_crear_comentario);
btn_crear_modificar_comentario.addEventListener('click', mostrar_ventana_crear_comentario);
btn_publicar_comentario.addEventListener('click', publicar_comentario);
btn_eliminar_comentario.addEventListener('click', eliminar_comentario);

//Mapa parqueo.
btn_reservar_espacio.addEventListener('click', crear_reserva);

//btn_reservar_espacio.addEventListener('click', horas_correctas);