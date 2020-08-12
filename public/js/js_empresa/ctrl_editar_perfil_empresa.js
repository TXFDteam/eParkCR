'use strict';


const input_correo = document.querySelector('#correo_electronico');
const input_nombre = document.querySelector('#nombre_empresa');
const input_encargado = document.querySelector('#nombreEncargado');
const input_foto = document.querySelector('#fotoPerfil');

const boton_guardar_datos_empresa = document.querySelector('#btn-guardar-cambios-empresa');

const btn_volver_perfil_empresa = document.querySelector('#btn-volver-perfil-empresa');

let correoE = localStorage.getItem('correo_empresa');
let contrasennaE = localStorage.getItem('contraseña_empresa');
let id;
const mostrar_info = async() => {
    let info_empresas = await obtener_empresas();

    for (let e = 0; e < info_empresas.length; e++) {
        if (correoE == info_empresas[e].correo && contrasennaE == info_empresas[e].contraseña) {
            id = info_empresas[e]._id;
            input_correo.value = info_empresas[e].correo;
            input_nombre.value = info_empresas[e].nombre;
            input_encargado.value = info_empresas[e].nombre_encargado;
            input_foto.value = info_empresas[e].foto_perfil;
            break;
        }
    }



};




mostrar_info();

const guardar_datos_empresa = () => {

    modificar_empresa(id, input_correo.value, input_nombre.value, input_encargado.value, input_foto.value);
    console.log(id, input_correo.value, input_nombre.value, input_encargado.value, input_foto.value);

    Swal.fire(
            'Perfil actualizado',
            'Si ha dejado algún espacio en blanco no requerido, la información se mantendrá como estaba previamente',
            'success'
        )
        .then((willDelete) => {
            if (willDelete) {
                window.location.assign('../../html/htmls-empresas/perfil_empresa.html');
            }
        })
};


boton_guardar_datos_empresa.addEventListener('click', guardar_datos_empresa);






const volver_perfil_empresa = () => {
    window.location.assign('../../html/htmls-empresas/perfil_empresa.html');
};

btn_volver_perfil_empresa.addEventListener('click', volver_perfil_empresa);