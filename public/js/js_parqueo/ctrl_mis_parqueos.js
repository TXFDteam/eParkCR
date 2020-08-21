'use strict';

const PLANTILLA_CUADRO = '<div class=\"contenedor-cuadro\"> \n' +

    '<div class=\"contenedor-parqueo\"> \n' +
    '<p>[PARQUEO]</p> \n' +
    '</div> \n' +
    '<div class=\"contenedor-cantidad-espacios\"> \n' +
    '<p>Espacios: [CANTIDAD_ESPACIOS]</p> \n' +
    '</div> \n' +
    '<div class=\"contenedor-tarifa\"> \n' +
    '<p>Tarifa: [TARIFA]</p> \n' +
    '</div> \n' +
    '<div class=\"contenedor-ubicacion\"> \n' +
    '<p>Ubicación: [UBICACION]</p> \n' +
    '</div> \n' +

    '</div>';

const btn_editar_parqueo = document.querySelector('#btn-editar-parqueo');
const tabla_parqueos = document.querySelector('#cuadros-parqueos');

let correo_duenno = localStorage.getItem('correo_dueño');


const editar_parqueo = (id_parqueo) => {
    //Se guarda la variable que dice cuál parqueo se seleccionó.
    localStorage.setItem('parqueo_para_editar', id_parqueo);

    //Se redirige al html que muestra el perfil del parqueo.
    window.location.assign("../../html/htmls-parqueos/editar_parqueo.html");

    //VIEJO
    //window.location.assign('../../html/htmls-parqueos/editar_parqueo.html');
};

const crear_carta_parqueo = (p_parqueo) => {

    let total_espacios_parqueo = obtener_total_espacios(p_parqueo);
    let nueva_carta = document.createElement('div');
    //Copia de la plantilla.
    let nueva_plantilla = PLANTILLA_CUADRO;

    nueva_carta.classList.add('estilo-cuadro');
    //Reemplazar los datos en la plantilla por los recibidos como parámetros.
    nueva_plantilla = nueva_plantilla.replace('[PARQUEO]', p_parqueo.nombre);
    nueva_plantilla = nueva_plantilla.replace('[CANTIDAD_ESPACIOS]', total_espacios_parqueo);
    nueva_plantilla = nueva_plantilla.replace('[TARIFA]', '₡' + p_parqueo.tarifa_por_hora);
    nueva_plantilla = nueva_plantilla.replace('[UBICACION]', p_parqueo.ubicacion);

    //Link a lista de usuarios
    //let input_eliminar_parqueo = document.createElement('button');
    //lista_usuarios.href = "lista-usuarios-convenio.html";

    //input_eliminar_parqueo.innerText = 'Eliminar parqueo';

    nueva_carta.innerHTML = nueva_plantilla;
    //nueva_carta.appendChild(input_eliminar_parqueo);
    tabla_parqueos.appendChild(nueva_carta);

    //Se conecta el evento click de la carta creada.
    nueva_carta.addEventListener('click', () => {
        editar_parqueo(p_parqueo._id);

        //Viejo
        //abrir_perfil_parqueo(p_parqueo.nombre);
    });

    /*
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
    */
};

let mostrar_parqueos = async() => {
    //Limpiar tabla.
    tabla_parqueos.innerHTML = '';

    let info_duennos_parqueo = await obtener_duennos_parqueo();
    let duenno_parqueo_actual;

    for (let i = 0; i < info_duennos_parqueo.length; i++) {
        if (correo_duenno == info_duennos_parqueo[i].correo) {
            duenno_parqueo_actual = info_duennos_parqueo[i];
            break;
        }
    }

    let lista_parqueos = await obtener_parqueos();

    //Obtener solo los parqueos que pertenecen a este usuario.
    for (let i = 0; i < lista_parqueos.length; i++) {
        if (String(lista_parqueos[i].id_duenno) === String(duenno_parqueo_actual._id)) {
            crear_carta_parqueo(lista_parqueos[i]);
        }
    }

}

mostrar_parqueos();