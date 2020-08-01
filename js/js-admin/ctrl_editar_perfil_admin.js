'use strict';




const input_nombre_admin = document.querySelector('#nuevo-nombre-admin');
const input_telefono_admin = document.querySelector('#nuevo-telefono-admin');
const input_comision_admin = document.querySelector('#nueva-comision-admin');


const btn_guardar_cambios_admin = document.querySelector("#btn-guardar-cambios-admin");




const guardar_cambios_admin = () => {

    administrador.nombre = input_nombre_admin.value;
    administrador.comision = input_comision_admin.value;
    dministrador.telefono = input_telefono_admin.value;



    Swal.fire(
        'Perfil actualizado',
        'Por favor espera unos minutos para que los cambios se reflejen en el sistema',
        'success'
    )
};



btn_guardar_cambios_admin.addEventListener('click', guardar_cambios_admin);