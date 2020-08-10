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
    nueva_plantilla = nueva_plantilla.replace('[TARIFA]', '₡' + p_parqueo.tarifa_hora);
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

let correo = localStorage.getItem('correo');
let contrasenna = localStorage.getItem('contrasenna');

let mostrar_parqueos = () => {
    tabla_parqueos.innerHTML = '';
    for (let d = 1; d <= duennos_parqueos.cant_duennos; d++) {
        let identificador_duenno = ('duenno_parqueo' + d);
        if (correo == duennos_parqueos[identificador_duenno].correo_duenno && contrasenna == duennos_parqueos[identificador_duenno].contraseña) {


            for (let i = 1; i <= parqueos.cant_parqueos; i++) {
                let identificador_parqueo = ('parqueo_' + i);
                if (duennos_parqueos[identificador_duenno].nombre == parqueos[identificador_parqueo].duenno_parqueo) {
                    crear_cuadro_parqueo(parqueos[identificador_parqueo]);
                    break;
                }
            }

        }
    }

}

mostrar_parqueos();

let mostrar_datos_dueño = async() => {

    let info_duennos_parqueo = await obtener_duennos_parqueo();



    //d va a ser el  contador para encontrar los duennos de los parqueos
    for (let c = 0; c < info_duennos_parqueo.length; c++) {
        if (correo == info_duennos_parqueo[c].correo && contrasenna == info_duennos_parqueo[c].contraseña) {

            break;
        }
    }
};
mostrar_datos_dueño();