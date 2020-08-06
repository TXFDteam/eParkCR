'use strict';


const btn_volver_perfil_parqueo = document.querySelector('#btn-volver-perfil-parqueo');

const volver_perfil_parqueo = () => {
    window.location.assign('../../html/htmls-parqueos/perfil_parqueo.html');
};



btn_volver_perfil_parqueo.addEventListener('click', volver_perfil_parqueo);

const btn_guardar_cambios_parqueo = document.querySelector('#btn-guardar-cambios-parqueo');


const nueva_cuenta_bancaria_parqueo = document.querySelector('#nueva-cuenta-bancaria-parqueo');


const guardar_cambios_parqueo = () => {

    //se validara la cuenta bancaria IBAN, en Costa Rica usualmente tienen 20 digitos


    let expresion_cuenta_bancaria = /^[0-9]{20,20}$/;
    let error = false;


    if (expresion_cuenta_bancaria.test(nueva_cuenta_bancaria_parqueo.value)) {
        console.log('Cuenta correcta');
        nueva_cuenta_bancaria_parqueo.classList.remove('error');

    } else {
        console.log('Cuenta no valida');
        error = true;
        nueva_cuenta_bancaria_parqueo.classList.add('error');

    }



    if (!error) {

        Swal.fire(
            'Perfil actualizado',
            'Si ha dejado algún espacio en blanco no requerido, la información se mantendrá como estaba previamente',
            'success'
        )
    }

}


btn_guardar_cambios_parqueo.addEventListener('click', guardar_cambios_parqueo);