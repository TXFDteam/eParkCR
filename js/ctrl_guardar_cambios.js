'use strict';

//Este código desplegará una alerta confirmando que los cambios hechos en "Editar perfil"

const boton_guardar_cambios = document.querySelector("#btn-guardar-cambios");


const guardar_cambios = () => {


    Swal.fire(
        'Perfil actualizado',
        'Por favor espera unos minutos para que los cambios se reflejen en el sistema',
        'success'
    )
}



boton_guardar_cambios.addEventListener('click', guardar_cambios);