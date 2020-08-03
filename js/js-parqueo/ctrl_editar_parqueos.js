'use strict';


const btn_volver_parqueos = document.querySelector('#btn-volver-parqueos');

const volver_parqueos = () => {
    window.location.assign('../../html/htmls-parqueos/prq_mis_parqueos.html');
};



btn_volver_parqueos.addEventListener('click', volver_parqueos);


//datos editar parqueo

const btn_guardar_datos_parqueo = document.querySelector('#btn-guardar-datos-parqueo');
const input_hora_apertura = document.querySelector('#nueva-hora-apertura');
const input_hora_salida = document.querySelector('#nueva-hora-salida');

const guardar_datos_parqueo = () => {


    let hora_apertura = Number(input_hora_apertura[0] + input_hora_apertura[1]);
    let hora_salida = Number(input_hora_salida[0] + input_hora_salida[1]);
    let error = false;



    if (hora_apertura > hora_salida) {
        console.log('Horas no validas');
        error = true;
        input_hora_apertura.classList.add('error');
        input_hora_salida.classList.add('error');
    } else {
        input_hora_apertura.classList.remove('error');
        input_hora_salida.classList.remove('error');
    }


    if (!error) {
        Swal.fire(
            'Parqueo actualizado',
            'Si ha dejado algún espacio en blanco no requerido, la información se mantendrá como estaba previamente',
            'success'
        )
    }

};


btn_guardar_datos_parqueo.addEventListener('click', guardar_datos_parqueo);