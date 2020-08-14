'use strict';

let a_inicio_perfil = document.querySelector('#link-inicio');

const input_id = document.querySelector('#id');
const input_correo = document.querySelector('#correo_electronico');
const input_nombre = document.querySelector('#nombre_empresa');
const input_identificacion = document.querySelector('#cedula_juridica');
const input_contrasena = document.querySelector('#contrasena');
const input_encargado = document.querySelector('#nombreEncargado');
const input_ubicacion = document.querySelector('#ubicacion');

const input_foto_div = document.querySelector('#foto-perfil-emp');
const input_foto = document.querySelector('#foto-perfil-emp-img');


const input_estado = document.querySelector('#estado');

const btn_editar_perfil_empresa = document.querySelector('#btn-editar-perfil-empresa');



//let _id = obtener_parametro_url('_id');
let correoE = localStorage.getItem('correo_empresa');
console.log(correoE);
let contrasennaE = localStorage.getItem('contraseña_empresa');
console.log(contrasennaE);


let id_empresa;

const mostrar_info = async() => {
    //let _id = obtener_parametro_url('_id');
    //let empresa = await obtener_empresa_id(_id);

    let info_emp = await obtener_empresas();

    for (let e = 0; e <= info_emp.length; e++) {
        if (correoE == info_emp[e].correo && contrasennaE == info_emp[e].contraseña) {
            id_empresa = info_emp[e]._id;
            let foto = document.querySelector('img');
            foto.srcset = info_emp[e].foto_perfil
            foto.className = 'foto-perfil';
            foto.classList.add('foto-perfil');
            console.log(id_empresa);
            input_correo.value = info_emp[e].correo;
            input_nombre.value = info_emp[e].nombre;
            input_identificacion.value = info_emp[e].n_identificacion;
            input_encargado.value = info_emp[e].nombre_encargado;
            input_ubicacion.value = info_emp[e].ubicacion;

            input_estado.value = info_emp[e].estado_general;

            input_foto_div.appendChild(foto);
            break;
        }
    }

};

const obtener_datos = () => {
    modificar_empresa(_id, input_id.value, input_correo.value, input_nombre.value, input_identificacion.value, input_contrasena.value, input_encargado.value, input_ubicacion.value, input_foto.value, input_estado.value);
};

mostrar_info();


btn_editar_perfil_empresa.addEventListener('click', () => {
    window.location.href = '../../html/htmls-empresas/editar_perfil_empresa.html';
});