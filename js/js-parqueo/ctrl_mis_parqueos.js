'use strict';

const tabla_parqueos = document.querySelector('#cuadros-parqueos');

const PLANTILLA_CUADRO = '<div class=\"contenedor-cuadro\"> \n' +

    '<div class=\"contenedor-parqueo\"> \n' +
    '<p>[PARQUEO]</p> \n' +
    '</div> \n' +
    '<div class=\"contenedor-cantidad-espacios\"> \n' +
    '<p>Cantidad de espacios: [CANTIDAD_ESPACIOS]</p> \n' +
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
    nueva_plantilla = nueva_plantilla.replace('[CANTIDAD_ESPACIOS]', p_parqueo.cant_espacios);
    nueva_plantilla = nueva_plantilla.replace('[TARIFA]', p_parqueo.tarifa_hora);
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
            title: 'Cerrar cuenta',
            text: "¿Está seguro que desea cerrar la cuenta?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'No',
            confirmButtonText: 'Sí'
        }).then((result) => {
            if (result.value) {
                Swal.fire(
                    'Cerar cuenta',
                    'La cuenta ha sido cerrada exitosamente.',
                    'success'
                )
            }
        })



    });

};
let mostrar_parqueos = () => {
    tabla_parqueos.innerHTML = '';
    for (let i = 1; i <= parqueos.cant_parqueos; i++) {
        let identificador_parqueo = ('parqueo_' + i);
        console.log(identificador_parqueo);
        crear_cuadro_parqueo(parqueos[identificador_parqueo]);
    }
};
mostrar_parqueos();