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

    '</div>';


const crear_cuadro_convenio = (p_convenio) => {

    let nuevo_cuadro = document.createElement('div');
    //Copia de la plantilla.
    let nueva_plantilla = PLANTILLA_CUADRO;

    nuevo_cuadro.classList.add('estilo-cuadro');
    //Reemplazar los datos en la plantilla por los recibidos como parámetros.
    nueva_plantilla = nueva_plantilla.replace('[EMPRESA]', p_convenio.empresa + ' + ' + p_convenio.parqueo);
    nueva_plantilla = nueva_plantilla.replace('[FECHA_VENCIMIENTO]', p_convenio.fecha_vencimiento_convenio);
    nueva_plantilla = nueva_plantilla.replace('[DESCUENTO]', p_convenio.porcentaje_convenio + '%');



    let input_eliminar_convenio = document.createElement('button');


    input_eliminar_convenio.innerText = 'Editar convenio';

    nuevo_cuadro.innerHTML = nueva_plantilla;
    nuevo_cuadro.appendChild(input_eliminar_convenio);
    tabla_convenios.appendChild(nuevo_cuadro);

    input_eliminar_convenio.addEventListener('click', () => {

        window.location.href = `../../html/htmls-parqueos/editar_convenios_parqueos.html?_id=${p_convenio._id}`;


    });

};

let correoD = localStorage.getItem('correo_dueño');
let contrasennaD = localStorage.getItem('contraseña_dueño');

let mostrar_convenios = async() => {

    let convenios_empresa = await obtener_convenios();
    let info_duenno_parqueo = await obtener_duennos_parqueo();
    let lista_parqueos = await obtener_parqueos();
    let id_duenno;



    //obtener ID del duenno del parqueo

    for (let d = 0; d < info_duenno_parqueo.length; d++) {
        if (correoD == info_duenno_parqueo[d].correo && contrasennaD == info_duenno_parqueo[d].contraseña) {
            id_duenno = info_duenno_parqueo[d]._id;
            break;
        }
    }


    tabla_convenios.innerHTML = '';

    let parqueos_duenno = [];
    let a = 0; //contador parqueos del duenno


    let duenno_parqueo_actual;

    for (let i = 0; i < info_duenno_parqueo.length; i++) {
        if (correoD == info_duenno_parqueo[i].correo) {
            duenno_parqueo_actual = info_duenno_parqueo[i];
            break;
        }
    }


    //Obtener solo los parqueos que pertenecen a este usuario.
    for (let i = 0; i < lista_parqueos.length; i++) {
        if (String(lista_parqueos[i].id_duenno) === String(duenno_parqueo_actual._id)) {
            parqueos_duenno[a] = lista_parqueos[i].nombre;
            a++;


        }
    }

    for (let p = 0; p < parqueos_duenno.length; p++) {
        console.log(parqueos_duenno[p]);
    }





    let mis_convenios = []; // arreglo convenios
    let q = 0; //contador de mis convenios


    for (let p = 0; p < parqueos_duenno.length; p++) { //recorro parqueos 

        for (let c = 0; c < convenios_empresa.length; c++) {

            if (parqueos_duenno[p] == convenios_empresa[c].parqueo) {

                mis_convenios[q] = convenios_empresa[c].empresa;
                q++;
                crear_cuadro_convenio(convenios_empresa[c]);

            }
        }






    }



    console.log('mis convenios son ' + mis_convenios);

    return mis_convenios;





};
mostrar_convenios();