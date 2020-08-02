'use strict';

const tabla_convenios = document.querySelector('#cuadros-convenios');

const PLANTILLA_CUADRO = '<div class=\"contenedor-cuadro\"> \n' +

    '<div class=\"contenedor-empresa\"> \n' +
    '<p>[EMPRESA]</p> \n' +
    '</div> \n' +
    '<div class=\"contenedor-fecha-vencimiento\"> \n' +
    '<p>Fecha de vencimiento: [FECHA_VENCIMIENTO]</p> \n' +
    '</div> \n' +
    '<div class=\"contenedor-descuento\"> \n' +
    '<p>Descuento: [DESCUENTO]</p> \n' +
    '</div> \n' +
    '<div class=\"contenedor-parqueo\"> \n' +
    '<p>Parqueo: [PARQUEO]</p> \n' +
    '</div> \n' +

    '</div>';


const crear_cuadro_convenio = (p_convenio) => {

    let nuevo_cuadro = document.createElement('div');
    //Copia de la plantilla.
    let nueva_plantilla = PLANTILLA_CUADRO;

    nuevo_cuadro.classList.add('estilo-cuadro');
    //Reemplazar los datos en la plantilla por los recibidos como parámetros.
    nueva_plantilla = nueva_plantilla.replace('[EMPRESA]', p_convenio.empresa + ' + eParkCR');
    nueva_plantilla = nueva_plantilla.replace('[FECHA_VENCIMIENTO]', p_convenio.fecha_vencimiento);
    nueva_plantilla = nueva_plantilla.replace('[DESCUENTO]', p_convenio.porcentaje_descuento + '%');
    nueva_plantilla = nueva_plantilla.replace('[PARQUEO]', p_convenio.parqueo);


    let input_eliminar_convenio = document.createElement('button');


    input_eliminar_convenio.innerText = 'Eliminar convenio';

    nuevo_cuadro.innerHTML = nueva_plantilla;
    nuevo_cuadro.appendChild(input_eliminar_convenio);
    tabla_convenios.appendChild(nuevo_cuadro);

    input_eliminar_convenio.addEventListener('click', () => {

        Swal.fire({
            title: 'Eliminar convenio',
            text: "¿Está seguro que desea eliminar el convenio seleccionado",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'No',
            confirmButtonText: 'Sí'
        }).then((result) => {
            if (result.value) {
                Swal.fire(
                    'Eliminar convenio',
                    'El convenio ha sido eliminado exitosamente',
                    'success'
                )
            }
        })



    });

};

let correo = localStorage.getItem('correo');
let contrasenna = localStorage.getItem('contrasenna');

let mostrar_convenios = () => {
    tabla_convenios.innerHTML = '';
    for (let d = 1; d <= duennos_parqueos.cant_duennos; d++) {
        let identificador_duenno = ('duenno_parqueo' + d);
        if (correo == duennos_parqueos[identificador_duenno].correo_duenno && contrasenna == duennos_parqueos[identificador_duenno].contraseña) {}

        for (let i = 1; i <= convenios_empresa.cant_convenios; i++) {
            let identificador_convenio = ('convenio' + i);
            crear_cuadro_convenio(convenios_empresa[identificador_convenio]);
        }
    }
};
mostrar_convenios();