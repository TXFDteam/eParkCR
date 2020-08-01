'use strict';

const btn_volver_perfil_empresa = document.querySelector('#btn-volver-perfil-empresa');

const volver_perfil_empresa = () => {
    window.location.assign('../../html/htmls-empresas/perfil_empresa.html');
};

btn_volver_perfil_empresa.addEventListener('click', volver_perfil_empresa);


const nuevo_nombre_empresa = document.querySelector('#nuevo-nombre-empresa');
const boton_guardar_datos_empresa = document.querySelector('#btn-guardar-cambios-empresa');


const guardar_datos_empresa = (identificador_empresa) => {

    empresas.lista_empresas[identificador_empresa].nombre_empresa = nuevo_nombre_empresa.value;


    Swal.fire(
        'Perfil actualizado',
        'Por favor espera unos minutos para que los cambios se reflejen en el sistema',
        'success'
    )
};


guardar_datos_empresa.addEventListener('click', guardar_datos_empresa(identificador_empresa));