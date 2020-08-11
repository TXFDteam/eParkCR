// 'use strict';

// const btn_volver_perfil_empresa = document.querySelector('#btn-volver-perfil-empresa');

// const volver_perfil_empresa = () => {
//     window.location.assign('../../html/htmls-empresas/perfil_empresa.html');
// };

// btn_volver_perfil_empresa.addEventListener('click', volver_perfil_empresa);


// const nuevo_nombre_empresa = document.querySelector('#nuevo-nombre-empresa');
// const boton_guardar_datos_empresa = document.querySelector('#btn-guardar-cambios-empresa');


// const guardar_datos_empresa = () => {




//     Swal.fire(
//         'Perfil actualizado',
//         'Si ha dejado algún espacio en blanco no requerido, la información se mantendrá como estaba previamente',
//         'success'
//     )
// };


// boton_guardar_datos_empresa.addEventListener('click', guardar_datos_empresa);



'use strict';

const input_id = document.querySelector('#id');
const input_correo = document.querySelector('#correo-electronico');
const input_nombre = document.querySelector('#nombre-empresa');
const input_identificacion = document.querySelector('#cedula-juridica');
const input_contrasena = document.querySelector('#contrasena');
const input_encargado = document.querySelector('#nombreEncargado');
const input_ubicacion = document.querySelector('#ubicacion');
const input_foto = document.querySelector('#foto_perfil');
const input_estado = document.querySelector('#estado');

const boton_guardar_datos_empresa = document.querySelector('#btn-guardar-cambios-empresa');

const obtener_parametro_url = (valor) => {
    const location = new URL(window.location.href);
    const parametros = new URLSearchParams(location.search);
    let parametro;
    if (parametros.get(valor)) {
        parametro = parametros.get(valor).toLowerCase();
    } else {
        parametro = '';
    }


    return parametro;
};

let _id = obtener_parametro_url('_id');

const mostrar_info = async() => {
    let _id = obtener_parametro_url('_id');
    let empresa = await obtener_empresa_id(_id);

    input_id.value = empresa.id;
    input_correo.value = empresa.correo;
    input_nombre.value = empresa.nombre;
    input_identificacion.value = empresa.n_identificacion;
    input_contrasena.value = empresa.contraseña;
    input_encargado.value = empresa.nombre_encargado;
    input_ubicacion.value = empresa.ubicacion;
    input_foto.value = empresa.foto_perfil;
    input_estado.value = empresa.estado_general;

};

const obtener_datos = () => {
    modificar_producto(_id, input_id.value, input_correo.value, input_nombre.value, input_identificacion.value, input_contrasena.value, input_encargado.value, input_ubicacion.value, input_foto.value, input_estado.value);
};

mostrar_info();


boton_guardar_datos_empresa.addEventListener('click', obtener_datos);