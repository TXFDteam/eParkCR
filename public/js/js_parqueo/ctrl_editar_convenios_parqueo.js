'use strict';

const btn_volver_convenios = document.querySelector('#btn-volver-convenios');

const volver_convenios = () => {
    window.location.assign('../../html/htmls-parqueos/prq_convenios_asociados.html');
};



btn_volver_convenios.addEventListener('click', volver_convenios);



const nuevo_porcentaje_convenio = document.querySelector('#nuevo-porcentaje-convenio');
const boton_guardar_datos_convenio = document.querySelector('#btn-guardar-datos-convenio');


const guardar_datos_convenio = () => {



    Swal.fire(
        'Convenio actualizado',
        'Por favor espera unos minutos para que los cambios se reflejen en el sistema',
        'success'
    )
};


boton_guardar_datos_convenio.addEventListener('click', guardar_datos_convenio);