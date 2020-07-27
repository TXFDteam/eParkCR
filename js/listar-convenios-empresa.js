'use strict';

const tabla_convenios = document.querySelector('#cuadros-convenios');

const PLANTILLA_CUADRO = '<div class=\"contenedor-cuadro\"> \n' +

    '<div class=\"contenedor-parqueo\"> \n' +
    '<p>[PARQUEO]</p> \n' +
    '</div> \n' +
    '<div class=\"contenedor-fecha-vencimiento\"> \n' +
    '<p>Fecha de vencimiento: [FECHA_VENCIMIENTO]</p> \n' +
    '</div> \n' +
    '<div class=\"contenedor-empleados\"> \n' +
    '<p>Cantidad de empleados: [EMPLEADOS]</p> \n' +
    '</div> \n' +
    '<div class=\"contenedor-descuento\"> \n' +
    '<p>Descuento: [DESCUENTO]</p> \n' +
    '</div> \n' +

    '</div>';


const lista_convenios = convenios_empresa;


/*
let x = (l) => {
    l = document.getElementById(this);

}*/
const crear_cuadro_convenio = () => {
    tabla_convenios.innerHTML = '';
    for (let x = 1; x <= convenios_empresa.cant_convenios; x++) {
        let nuevo_cuadro = document.createElement('div');

        //Copia de la plantilla.
        let nueva_plantilla = PLANTILLA_CUADRO;

        nuevo_cuadro.classList.add('estilo-cuadro');

        let identificador_convenio = ('convenio' + x);
        console.log(identificador_convenio);

        //Reemplazar los datos en la plantilla por los recibidos como parámetros.
        nueva_plantilla = nueva_plantilla.replace('[PARQUEO]', lista_convenios[identificador_convenio].parqueo);
        nueva_plantilla = nueva_plantilla.replace('[FECHA_VENCIMIENTO]', lista_convenios[identificador_convenio].fecha_vencimiento);
        nueva_plantilla = nueva_plantilla.replace('[EMPLEADOS]', lista_convenios[identificador_convenio].cant_empleados);
        nueva_plantilla = nueva_plantilla.replace('[DESCUENTO]', lista_convenios[identificador_convenio].porcentaje_descuento);

        //Link a lista de usuarios
        let lista_usuarios = document.createElement('a');
        lista_usuarios.href = "lista-usuarios-convenio.html";
        lista_usuarios.id = lista_convenios[identificador_convenio].parqueo;
        let parq = lista_convenios[identificador_convenio].parqueo;
        //lista_usuarios.onclick = 
        localStorage.setItem('id_convenio' + x, lista_convenios[identificador_convenio].parqueo);

        //lista_usuarios.onclick = x(lista_usuarios);

        lista_usuarios.innerText = 'Lista de usuarios';
        nuevo_cuadro.insertAdjacentElement("beforeend", lista_usuarios);
        console.log(lista_usuarios);


        nuevo_cuadro.innerHTML = nueva_plantilla;
        nuevo_cuadro.appendChild(lista_usuarios);
        tabla_convenios.appendChild(nuevo_cuadro);

    }
};
crear_cuadro_convenio();
console.log(localStorage.getItem('id_convenio'))
    /*
            //Valores quemados para probar.
            crear_cuadro_convenio('PARQUEO 24', '24/07/2020', '16', '10');
            crear_cuadro_convenio('EL parqueo', '23/07/2020', '20', '5');
            crear_cuadro_convenio('Parqueo el parque', '29/07/2020', '50', '15');

            crear_cuadro_convenio('PARQUEO 24', '24/07/2020', '16', '10');
            crear_cuadro_convenio('EL parqueo', '23/07/2020', '20', '5');
            crear_cuadro_convenio('Parqueo el parque', '29/07/2020', '50', '15');
    */




/*
        const tabla_usuarios = document.querySelector('#tabla-convenios tbody');

        const PLANTILLA_CUADRO = '<table> \n' +

            '<tr> \n' +
            '<td>[PARQUEO]</td> \n' +
            '</tr> \n' +
            '<tr> \n' +
            '<td>Fecha de vencimiento: [FECHA_VENCIMIENTO]</td> \n' +
            '</tr> \n' +
            '<tr> \n' +
            '<td>Cantidad de empleados: [EMPLEADOS]</td> \n' +
            '</tr> \n' +
            '<tr> \n' +
            '<td>Descuento: [DESCUENTO]</td> \n' +
            '</tr> \n' +
            '<tr> \n' +
            '<td><a href=\"\">Lista de usuarios </a></td> \n' +
            '</tr> \n' +
            '</table>';
*/
/*
        const mostrar_convenio = (p_nombre_convenio) => {
            console.log('Se ha seleccionado el parqueo: ' + p_nombre_convenio);
        }
        const crear_cuadro_convenio = (p_parqueo, p_fecha, p_empleados, p_descuento) => {
            let nuevo_cuadro = document.createElement('table');

            //Copia de la plantilla.
            let nueva_plantilla = PLANTILLA_CUADRO;

            nuevo_cuadro.classList.add('estilo-cuadro');

            //Reemplazar los datos en la plantilla por los recibidos como parámetros.
            nueva_plantilla = nueva_plantilla.replace('[PARQUEO]', p_parqueo);
            nueva_plantilla = nueva_plantilla.replace('[FECHA_VENCIMIENTO]', p_fecha);
            nueva_plantilla = nueva_plantilla.replace('[EMPLEADOS]', p_empleados);
            nueva_plantilla = nueva_plantilla.replace('[DESCUENTO]', p_descuento);
            nuevo_cuadro.innerHTML = nueva_plantilla;
            tabla_usuarios.appendChild(nuevo_cuadro);

        }
    }
    */
/*
'<div class=\"contenedor-lista-usuarios\"> \n' +
    '<a href=\"lista-usuarios-convenio.html\" id="[PARQUEO]" >Lista de usuarios </a> \n' +
    '</div> \n' +
    */