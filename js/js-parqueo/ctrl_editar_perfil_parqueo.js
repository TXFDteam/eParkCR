'use strict';


const btn_editar_perfil_parqueo = document.querySelector('#btn-editar-perfil-parqueo');

const redireccionar_perfil_parqueo = () => {
    window.location.assign('../../html/htmls-parqueos/editar_perfil_parqueo.html');
};



btn_editar_perfil_parqueo.addEventListener('click', redireccionar_perfil_parqueo);

const btn_guardar_cambios_parqueo = document.querySelector('#btn-guardar-cambios-parqueo');

const nuevo_nombre_duenno_parqueo = document.querySelector('#nuevo-nombre-cliente');
const nueva_cuenta_bancaria_parqueo = document.querySelector('#nueva-cuenta-bancaria-parqueo');

const guardar_cambios_parqueo = (identificador_duenno) => {

    duennos_parqueos[identificador_duenno].nombre = nuevo_nombre_duenno_parqueo.value;
    duennos_parqueos[identificador_duenno].cuenta_bancaria = nueva_cuenta_bancaria_parqueo.value;


    Swal.fire(
        'Perfil actualizado',
        'Por favor espera unos minutos para que los cambios se reflejen en el sistema',
        'success'
    )
};



btn_guardar_cambios_parqueo.addEventListener('click', guardar_cambios_parqueo(identificador_duenno));