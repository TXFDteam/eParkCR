'use strict';

//#region Constantes.
//Elementos que van a cambiar basado en los datos del parqueo.
const plantilla_carta_comentario =
    '<div id="contenedor-superior">\n' +
    '<div id="info-usuario">\n' +
    '<div id="foto-usuario" style="background-image:[URL_IMAGEN];"></div>\n' +

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

//Redes sociales.
const clase_facebook = 'fa-facebook';
const clase_twitter = 'fa-twitter';
const clase_instagram = 'fa-instagram';

const contenedor_redes_sociales = document.querySelector('#redes-sociales');

//Usuario.
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

let calificaciones_comentarios = [];

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
    txt_espacio_seleccionado.value = p_info_espacio.codigo;
    info_espacio_seleccionado = p_info_espacio;

    if (p_info_espacio.ocupado == '1') {
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

const obtener_parqueo_actual = async() => {
    //Se obtiene la variable que se guardó anteriormente que define el nombre del parqueo seleccionado.
    let id_parqueo_actual = localStorage.getItem('parqueo_seleccionado');
    //console.log('id parqueo actual= ' + id_parqueo_actual);

    //let lista_parqueos = await obtener_parqueos();

    let parqueo_encontrado = await obtener_parqueo_por_id(id_parqueo_actual);

    /*
    lista_parqueos.forEach(obj_parqueo => {
        console.log('Comprobación: ' + obj_parqueo._id + ' == ' + id_parqueo_actual);
        if (obj_parqueo._id == id_parqueo_actual) {
            return obj_parqueo;
        }
    });
    */

    return parqueo_encontrado;
    /*
    Viejo
    //Se busca el parqueo que posee ese nombre.
    for (let i = 1; i <= parqueos.cant_parqueos; i++) {
        let identificador_parqueo = ('parqueo_' + i);
        let nombre_parqueo = parqueos[identificador_parqueo].nombre;

        if (nombre_parqueo == nombre_parqueo_actual) {
            return identificador_parqueo;
        }
    }

    return '';
    */
};

//Esta función se usa para crear un icono de red social basado en los parámetros recibidos.
//<p_clase> La clase que corresponde al icono por mostrar.
//<p_enlace> El enlace a esa red social.
const crear_icono_red_social = (p_clase, p_enlace) => {
    let nuevo_icono = document.createElement('a');

    nuevo_icono.classList.add('fab');
    nuevo_icono.classList.add(p_clase);
    nuevo_icono.href = p_enlace;
    nuevo_icono.target = '_blank'

    contenedor_redes_sociales.appendChild(nuevo_icono);
};

//Funcion usada para llenar todo lo relacionado con redes sociales del parqueo seleccionado.
const llenar_info_redes_sociales = () => {
    parqueo_seleccionado.enlaces_redes.forEach(obj_enlace => {
        if (obj_enlace.enlace != '') {
            if (obj_enlace.nombre == 'facebook') {
                crear_icono_red_social(clase_facebook, obj_enlace.enlace);
            }
            if (obj_enlace.nombre == 'twitter') {
                crear_icono_red_social(clase_twitter, obj_enlace.enlace);
            }
            if (obj_enlace.nombre == 'instagram') {
                crear_icono_red_social(clase_instagram, obj_enlace.enlace);
            }
        }
    });
};

//Esta función se debe llamar al inicio para actualizar los datos de la página usando datos del parqueo seleccionado.
//<p_parqueo> El parqueo del que se va a obtener los datos.
const llenar_info_parqueo = (p_parqueo) => {
    if (parqueo_seleccionado == '') {
        return;
    }

    let url = "url(" + p_parqueo.imagen_perfil + ")";
    //Viejo
    //let url = "url(" + "../../imgs/imgs_parqueos/" + p_parqueo.imagen_perfil + ")";

    banner.style.backgroundImage = url;

    lbl_nombre_parqueo.textContent = p_parqueo.nombre;
    txt_comentarios_nombre_parqueo.textContent = p_parqueo.nombre;

    lbl_calificacion_promedio.textContent = 'Calificación promedio: ' + p_parqueo.calificacion_promedio;

    llenar_info_redes_sociales();

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
    let resultado = -1;
    let correcto = false;

    //Hora apertura parqueo.
    let completo_hora_apertura_parqueo = parqueo_seleccionado.hora_apertura;
    let hora_apertura_parqueo = Number(completo_hora_apertura_parqueo[0] + completo_hora_apertura_parqueo[1]);

    //Hora cierre parqueo.
    let completo_hora_cierre_parqueo = parqueo_seleccionado.hora_cierre;
    let hora_cierre_parqueo = Number(completo_hora_cierre_parqueo[0] + completo_hora_cierre_parqueo[1]);

    //Hora entrada elegida
    let fecha_entrada = txt_hora_entrada.value;
    let hora_entrada = Number((fecha_entrada[0] + fecha_entrada[1]));
    let minutos_entrada = Number((fecha_entrada[3] + fecha_entrada[4]));

    //Hora salida elegida.
    let fecha_salida = txt_hora_salida.value;
    let hora_salida = Number((fecha_salida[0] + fecha_salida[1]));
    let minutos_salida = Number((fecha_salida[3] + fecha_salida[4]));

    //Verifica si el rango elegido está dentro del horario del parqueo.
    if ((hora_entrada >= hora_apertura_parqueo && hora_entrada < hora_cierre_parqueo) &&
        (hora_salida >= hora_apertura_parqueo && hora_salida < hora_cierre_parqueo)) {

        //Verifica que la reserva se está haciendo como mínimo después de 30 minutos y como máximo 2 horas a partir de la hora actual.
        let fecha_actual = new Date();
        let hora_actual = fecha_actual.getHours();
        let minutos_actuales = fecha_actual.getMinutes();

        //tratar la hora entrada como minutos.
        let actual_en_minutos = (hora_actual * 60) + minutos_actuales;
        let entrada_en_minutos = (hora_entrada * 60) + minutos_entrada;

        //Si la reserva está a una diferencia como mínimo de 30 minutos y un máximo de 120 minutos(2 horas).
        if (((entrada_en_minutos >= (actual_en_minutos + 30))) &&
            (entrada_en_minutos <= (actual_en_minutos + 120))) {

            //Verificar si la hora de entrada es menor a la hora de salida.
            if (hora_entrada == hora_salida) {
                if (minutos_entrada < minutos_salida) {
                    correcto = true;
                }
            } else if (hora_entrada < hora_salida) {
                correcto = true;
            } else {
                resultado = 3;
            }
        } else {
            //La reserva excede el rango de tiempo minimo de 30 minutos o 2 horas de antelación.
            resultado = 2;
        }
    } else {
        //La hora de entrada o salida está por fuera del horario del parqueo.
        resultado = 1;
    }


    if (correcto) {
        txt_hora_entrada.classList.remove('error');
        txt_hora_salida.classList.remove('error');
        resultado = 0;
    } else {
        txt_hora_entrada.classList.add('error');
        txt_hora_salida.classList.add('error');
        //La hora de salida es menor o igual a la hora de entrada.
    }

    return resultado;
};

//Función para enviar la reserva al backend
const guardar_reserva = async() => {
    //Datos finales para guardar.

    let ref_id_usuario = usuario_ingresado._id;
    let ref_nombre_usuario = usuario_ingresado.nombre;

    let ref_id_parqueo = parqueo_seleccionado._id;
    let ref_nombre_parqueo = parqueo_seleccionado.nombre;


    let ref_espacio_seleccionado = info_espacio_seleccionado.codigo;

    let fecha_actual = new Date();
    let ref_fecha_reserva = fecha_actual.getDate() + '/' + fecha_actual.getMonth() + '/' + fecha_actual.getFullYear();

    //Obtener hora de entrada.
    let fecha_entrada = txt_hora_entrada.value;
    let hora_entrada = Number(fecha_entrada[0] + fecha_entrada[1]);
    let mins_entrada = Number(fecha_entrada[3] + fecha_entrada[4]);

    //Obtener hora de salida.
    let fecha_salida = txt_hora_salida.value;
    let hora_salida = Number(fecha_salida[0] + fecha_salida[1]);
    let mins_salida = Number(fecha_salida[3] + fecha_salida[4]);

    //Convertir la hora a minutos.
    let entrada_en_minutos = (hora_entrada * 60) + mins_entrada;
    let salida_en_minutos = (hora_salida * 60) + mins_salida;

    //Calcular la el total que se debe pagar.
    let horas_de_uso = ((salida_en_minutos - entrada_en_minutos) / 60);
    let total_por_pagar = horas_de_uso * parqueo_seleccionado.tarifa_por_hora;

    console.log('parqueo: ' + total_por_pagar);
    //console.log('Por ' + horas_de_uso + ' horas se va a pagar: ' + total_por_pagar);
    //console.log('De tarifa se paga : ' + parqueo_seleccionado.tarifa_hora);

    let reserva_creada = await guardar_nueva_reserva(ref_id_usuario, ref_nombre_usuario, ref_id_parqueo, ref_nombre_parqueo, ref_fecha_reserva, fecha_entrada, fecha_salida, horas_de_uso, total_por_pagar, ref_espacio_seleccionado);
    await modificar_reserva_activa_cliente(usuario_ingresado._id, reserva_creada._id);
    console.log(reserva_creada);
    //console.log('Cliente: ' + usuario_ingresado._id);
    //console.log('Reserva: ' + reserva_creada._id);
};

//Función usada para crear una reserva en el parqueo actual.
const crear_reserva = () => {
    //Para pruebas.
    //guardar_reserva();
    //return;

    //No se puede crear la reserva si el usuario ya tiene una activa.
    if (usuario_ingresado.reserva_activa != null) {
        Swal.fire({
            icon: 'warning',
            title: 'Oh no, hubo un problema al crear la reserva.',
            text: 'No podés crear una reserva, debido a que ya tenés una activa.',
        });
        return;
    }

    //Comprobaciones.
    if (info_espacio_seleccionado != null) {
        if (info_espacio_seleccionado.ocupado != '1') {
            if (!hay_espacios_vacios()) {

                let respuesta = horas_correctas();

                switch (respuesta) {
                    case 0:
                        //Todo correcto
                        Swal.fire({
                            icon: 'success',
                            title: 'Reserva creada con éxito',
                            text: 'Podés realizar el pago en el menú de reservas.',
                        }).then(() => {
                            window.location.assign("reservas_usuario.html");
                        });

                        //FUNCIÓN PARA GUARDAR LA RESERVA.
                        guardar_reserva();
                        break;
                    case 1:
                        //La hora de entrada o salida está por fuera del horario del parqueo.
                        Swal.fire({
                            icon: 'warning',
                            title: 'Oh no, hubo un problema al crear la reserva.',
                            text: 'El horario que has elegido está por fuera del horario de apertura de este parqueo.',
                        });
                        break;
                    case 2:
                        //La reserva excede el rango de tiempo minimo de 30 minutos o 2 horas de antelación.
                        Swal.fire({
                            icon: 'warning',
                            title: 'Oh no, hubo un problema al crear la reserva.',
                            text: 'La hora de entrada es incorrecta, recordá que las reservas se hacen con un tiempo de aniticipación como mínimo de 30 minutos y como máximo de 2 horas.',
                        });
                        break;
                    case 3:
                        //La hora de salida es menor o igual a la hora de entrada.
                        Swal.fire({
                            icon: 'warning',
                            title: 'Oh no, hubo un problema al crear la reserva.',
                            text: 'Revisá que la hora de salida sea mayor a la hora de entrada.',
                        });
                        break;
                    default:
                        Swal.fire({
                            icon: 'warning',
                            title: 'Oh no, hubo un problema al crear la reserva.',
                            text: 'Error desconocido, por favor intentá realizar la reserva de nuevo.',
                        });
                        return;
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

const actualizar_calificacion_promedio = async(p_estrellas = 0, p_comentario_eliminado) => {
    let acumulado = 0;
    let total_comentarios = calificaciones_comentarios.length
    for (let i = 0; i < total_comentarios; i++) {
        acumulado += calificaciones_comentarios[i];
    }

    if (p_comentario_eliminado == true) {
        acumulado -= p_estrellas;
        total_comentarios--;
    }

    let promedio = (total_comentarios > 0) ? acumulado / total_comentarios : 0;

    //ACTUALIZAR CALIFICACION EN PARQUEO.
    await actualizar_calificacion_promedio_parqueo(parqueo_seleccionado._id, promedio);
}

//Esta función obtiene el nombre de un usuario basado en su ID.
//<p_id>ID del usuario.
const obtener_usuario_en_comentario = async(p_id) => {
    let usuario = await obtener_cliente_id(p_id);
    return usuario;
    /*
    Viejo
    for (let i = 1; i < usuarios.cant_usuarios; i++) {
        let identificador = ('usuario' + i);
        let usuario_actual = usuarios[identificador];
        if (usuario_actual.id_usuario == p_id) {
            return usuario_actual.nombre_usuario;
        }
    }
    */
};

const crear_carta_comentario = async(p_comentario) => {
    let nueva_carta = document.createElement('div');
    nueva_carta.classList.add('carta-comentario');

    let nueva_plantilla = plantilla_carta_comentario;

    let usuario_comentario = await obtener_usuario_en_comentario(p_comentario.id_usuario);

    //Obtener la imagen de perfil del usuario del comentario actual.
    let url_foto_perfil = "url(" + usuario_comentario.foto_perfil + ")";

    nueva_plantilla = nueva_plantilla.replace('[URL_IMAGEN]', url_foto_perfil);
    nueva_plantilla = nueva_plantilla.replace('[NOMBRE_USUARIO]', usuario_comentario.nombre);
    nueva_plantilla = nueva_plantilla.replace('[FECHA_COMENTARIO]', p_comentario.fecha);
    nueva_plantilla = nueva_plantilla.replace('[CALIFICACION]', ('Calificación: ' + p_comentario.cantidad_estrellas));
    nueva_plantilla = nueva_plantilla.replace('[MENSAJE]', p_comentario.mensaje);

    nueva_carta.innerHTML = nueva_plantilla;

    contenedor_comentarios.appendChild(nueva_carta);
};

const obtener_comentarios = async() => {
    let lista_comentarios = await s_obtener_comentarios();
    contenedor_comentarios.innerHTML = '';
    if (lista_comentarios == null) {
        return;
    }

    let contador = 0;

    lista_comentarios.forEach(obj_comentario => {
        console.log(obj_comentario);

        //Muestra solo los comentarios que corresponden a este parqueo.
        if (String(obj_comentario.id_parqueo) == String(parqueo_seleccionado._id)) {
            //Guardar una copia del comentario que dejó el usuario en este parqueo.
            if (String(obj_comentario.id_usuario) == String(usuario_ingresado._id)) {
                console.log('Ya hay un comentario realizado por este usuario.');
                comentario_usuario_ingresado = obj_comentario;
                btn_crear_modificar_comentario.textContent = 'Modificar reseña';
                btn_eliminar_comentario.classList.remove('oculto');
            }

            calificaciones_comentarios[contador] = obj_comentario.cantidad_estrellas;
            crear_carta_comentario(obj_comentario);
        }
    });

    /*VIEJO
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
    */
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

const publicar_comentario = async() => {
    let fecha = new Date();
    let dia_actual = fecha.getDate();
    let mes_actual = fecha.getMonth();
    let anno_actual = fecha.getFullYear();

    //Datos para guardar.
    let ref_id_usuario = usuario_ingresado._id;
    let ref_id_parqueo = parqueo_seleccionado._id;
    let estrellas = ventana_crear_comentario_slt_calificacion.value;
    let fecha_actual = dia_actual + '/' + mes_actual + '/' + anno_actual;
    let mensaje = ventana_crear_comentario_mensaje.value;

    //Si ya existe un comentario lo modifica.
    if (comentario_usuario_ingresado != null) {
        await s_modificar_comentario(comentario_usuario_ingresado._id, estrellas, fecha_actual, mensaje);

        /*VIEJO
        console.log('Si pude entrar a editar!!!');
        comentario_usuario_ingresado.calificacion = ventana_crear_comentario_slt_calificacion.value;
        comentario_usuario_ingresado.mensaje = ventana_crear_comentario_mensaje.value;
        comentario_usuario_ingresado.fecha = fecha_actual;
        */
    } else {
        //Si no existe lo crea.
        await s_crear_comentario(ref_id_usuario, ref_id_parqueo, estrellas, fecha_actual, mensaje);
        btn_crear_modificar_comentario.textContent = 'Modificar reseña';
        btn_eliminar_comentario.classList.remove('oculto');
        /*VIEJO
        console.log('Creo nuevo comentario:');
        console.log('id_usuario: ' + usuario_ingresado.id_usuario);
        console.log('id_parqueo: ' + parqueo_seleccionado.codigo);
        console.log('cantidad_estrellas: ' + ventana_crear_comentario_slt_calificacion.value);
        console.log('fecha: ' + fecha_actual);
        console.log('mensaje: ' + ventana_crear_comentario_mensaje.value);
        */
    }

    ocultar_ventana_crear_comentario();
    //Actualiza los comentarios.

    actualizar_calificacion_promedio(estrellas, false);
    obtener_comentarios();
};

const eliminar_comentario = async() => {
    if (comentario_usuario_ingresado != null) {
        await s_eliminar_comentario(comentario_usuario_ingresado._id);
        comentario_usuario_ingresado = null;
        Swal.fire({
            icon: 'success',
            title: 'Reseña eliminada',
        });
        //Eliminar comentario del DB.
        //Actualizar lista de comentarios.
        btn_crear_modificar_comentario.textContent = 'Crear reseña';
        btn_eliminar_comentario.classList.add('oculto');
        actualizar_calificacion_promedio(0, true);
        obtener_comentarios();
    }
};

const obtener_usuario_ingresado = async() => {
    let contrasenna = localStorage.getItem('contrasenna');
    let correo = localStorage.getItem('correo');
    let info_clientes = await obtener_clientes();

    //c va a ser el  contador para encontrar los clientes
    for (let i = 0; i < info_clientes.length; i++) {
        if (correo == info_clientes[i].correo && contrasenna == info_clientes[i].contraseña) {
            return usuario_ingresado = info_clientes[i];
        }
    }

    return null;
};
/* 
Viejo
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
*/

//#endregion

const mostrar_info = async() => {
    //Mostrar info del parqueo.
    usuario_ingresado = await obtener_usuario_ingresado();
    parqueo_seleccionado = await obtener_parqueo_actual();
    //console.log(parqueo_seleccionado);

    //Viejo
    //parqueo_seleccionado = parqueos[obtener_parqueo_actual()];

    llenar_info_parqueo(parqueo_seleccionado);
    obtener_comentarios();
};


mostrar_info();
//Eventos.

//Comentarios.
btn_cerrar_ventana_comentario.addEventListener('click', ocultar_ventana_crear_comentario);
btn_crear_modificar_comentario.addEventListener('click', mostrar_ventana_crear_comentario);
btn_publicar_comentario.addEventListener('click', publicar_comentario);
btn_eliminar_comentario.addEventListener('click', eliminar_comentario);

//Mapa parqueo.
btn_reservar_espacio.addEventListener('click', crear_reserva);

//btn_reservar_espacio.addEventListener('click', horas_correctas);