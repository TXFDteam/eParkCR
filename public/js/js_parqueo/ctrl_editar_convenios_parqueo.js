'use strict';

const btn_volver_convenios = document.querySelector('#btn-volver-convenios');

const volver_convenios = () => {
    window.location.assign('../../html/htmls-parqueos/prq_convenios_asociados.html');
};



btn_volver_convenios.addEventListener('click', volver_convenios);





const obtener_parametro_url = (valor) => {
    const location = new URL(window.location.href);
    const parametros = new URLSearchParams(location.search);
    let parametro_valor;
    if (parametros.get(valor)) {
        parametro_valor = parametros.get(valor).toLowerCase();
    } else {
        parametro_valor = '';
    }
    return parametro_valor;
};




const nuevo_porcentaje_convenio = document.querySelector('#nuevo-porcentaje-convenio');
const boton_guardar_datos_convenio = document.querySelector('#btn-guardar-datos-convenio');

let _id = obtener_parametro_url('_id');




const mostrar_datos_convenio = async() => {

    let convenio = await obtener_convenio_id(_id);

    nuevo_porcentaje_convenio.value = convenio.porcentaje_convenio;




}

mostrar_datos_convenio();


const validar_datos = () => {

    let error = false;
    let porcentaje = Number(nuevo_porcentaje_convenio.value);

    if (porcentaje < 5 || porcentaje > 100 || porcentaje == '') {
        error = true;
        nuevo_porcentaje_convenio.classList.add('error');
    } else {
        nuevo_porcentaje_convenio.classList.remove('error');
    }


    return error;





}


const guardar_datos_convenio = async() => {


    let error = validar_datos();
    let porcentaje = Number(nuevo_porcentaje_convenio.value);




    let convenio = await obtener_convenio_id(_id);





    if (!error) {
        modificar_convenio(_id, porcentaje);
        Swal.fire(
            'Convenio actualizado',
            'Por favor espera unos minutos para que los cambios se reflejen en el sistema',
            'success'
        ).then((willDelete) => {
            if (willDelete) {
                window.location.assign(`../../html/htmls-parqueos/prq_convenios_asociados.html`);

            }
        })

    }

}


boton_guardar_datos_convenio.addEventListener('click', guardar_datos_convenio);