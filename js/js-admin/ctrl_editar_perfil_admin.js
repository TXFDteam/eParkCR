'use strict';


const btn_volver_perfil_admin = document.querySelector('#btn-volver-perfil-admin');


const volver_perfil_admin = () => {
    window.location.assign('../../html/htmls-admin/perfil_administrador.html');
};

btn_volver_perfil_admin.addEventListener('click', volver_perfil_admin);


const input_nombre_admin = document.querySelector('#nuevo-nombre-admin');
const input_telefono_admin = document.querySelector('#nuevo-telefono-admin');
const input_comision_admin = document.querySelector('#nueva-comision');


const btn_guardar_cambios_admin = document.querySelector("#btn-guardar-cambios-admin");




const guardar_cambios_admin = () => {




    //validar datos, el numero no podrá exceder los 8 carácteres y deberá tener un - en medio, mientras que la comision deberá ser entre 1% y 99% máximo.
    let comision_admin = Number(input_comision_admin.value);
    let expresion_telefono = /^[0-9]{4,4}-[0-9]{4,4}$/;
    let error = false;

    if (expresion_telefono.test(input_telefono_admin.value)) {
        console.log('Telefono correcto');
        input_telefono_admin.classList.remove('error');

    } else {
        console.log('Telefono invalido');
        error = true;
        input_telefono_admin.classList.add('error');
    }

    if (comision_admin > 99 || comision_admin < 1) {
        error = true;
        input_comision_admin.classList.add('error');
    } else {
        input_comision_admin.classList.remove('error');
    }


    if (!error) {
        Swal.fire(
            'Perfil actualizado',
            'Por favor espera unos minutos para que los cambios se reflejen en el sistema',
            'success'
        )

    }



};



btn_guardar_cambios_admin.addEventListener('click', guardar_cambios_admin);