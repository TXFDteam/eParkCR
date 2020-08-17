'use strict';



const btn_editar_parqueo = document.querySelector('#btn-editar-parqueo');

const editar_parqueos = () => {
    window.location.assign('../../html/htmls-parqueos/editar_parqueo.html');
};



btn_editar_parqueo.addEventListener('click', editar_parqueos);

const tabla_parqueos = document.querySelector('#cuadros-parqueos');

const PLANTILLA_CUADRO = '<div class=\"contenedor-cuadro\"> \n' +

    '<div class=\"contenedor-parqueo\"> \n' +
    '<p>[PARQUEO]</p> \n' +
    '</div> \n' +
    '<div class=\"contenedor-cantidad-espacios\"> \n' +
    '<p>Correo: [CANTIDAD_ESPACIOS]</p> \n' +
    '</div> \n' +
    '<div class=\"contenedor-tarifa\"> \n' +
    '<p>Tarifa: [TARIFA]</p> \n' +
    '</div> \n' +
    '<div class=\"contenedor-ubicacion\"> \n' +
    '<p>Ubicación: [UBICACION]</p> \n' +
    '</div> \n' +

    '</div>';


const crear_cuadro_parqueo = (p_parqueo) => {

    let nuevo_cuadro = document.createElement('div');
    //Copia de la plantilla.
    let nueva_plantilla = PLANTILLA_CUADRO;

    nuevo_cuadro.classList.add('estilo-cuadro');
    //Reemplazar los datos en la plantilla por los recibidos como parámetros.
    nueva_plantilla = nueva_plantilla.replace('[PARQUEO]', p_parqueo.nombre);
    nueva_plantilla = nueva_plantilla.replace('[CANTIDAD_ESPACIOS]', p_parqueo.email);
    nueva_plantilla = nueva_plantilla.replace('[TARIFA]', '₡' + p_parqueo.tarifa_por_hora);
    nueva_plantilla = nueva_plantilla.replace('[UBICACION]', p_parqueo.ubicacion);

    //Link a lista de usuarios
    let input_eliminar_parqueo = document.createElement('button');
    //lista_usuarios.href = "lista-usuarios-convenio.html";

    input_eliminar_parqueo.innerText = 'Eliminar parqueo';

    nuevo_cuadro.innerHTML = nueva_plantilla;
    nuevo_cuadro.appendChild(input_eliminar_parqueo);
    tabla_parqueos.appendChild(nuevo_cuadro);

    input_eliminar_parqueo.addEventListener('click', () => {

        Swal.fire({
            title: 'Eliminar parqueo',
            text: "¿Está seguro que desea eliminar el parqueo seleccionado?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'No',
            confirmButtonText: 'Sí'
        }).then((result) => {
            if (result.value) {
                Swal.fire(
                    'Eliminar parqueo',
                    'El parqueo ha sido eliminado exitosamente.',
                    'success'
                )
            }
        })



    });

};

let correo = localStorage.getItem('correo_dueño');

let mostrar_parqueos = async() => {
    let info_duennos_parqueo = await obtener_duennos_parqueo();
    let lista_parqueos = await obtener_parqueos();
    tabla_parqueos.innerHTML = '';
    for (let d = 0; d < info_duennos_parqueo.length; d++) {
        if (correo == info_duennos_parqueo[d].correo) {
            for (let i = 0; i < lista_parqueos.length; i++) {
                if (lista_parqueos[i].id_duenno === info_duennos_parqueo[d]._id && lista_parqueos[d].estado_general == 'DESACTIVAR') {
                    crear_cuadro_parqueo(lista_parqueos[i]);
                }
            }

        }
    }

}

mostrar_parqueos();