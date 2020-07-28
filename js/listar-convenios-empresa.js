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



const nombre_parqueo = (p_nombre_convenio) => {
    console.log('El convenio es: ' + p_nombre_convenio);

    //Se guarda la variable que dice cuál parqueo se seleccionó.
    localStorage.setItem('convenio_seleccionado', p_nombre_convenio);

    //Se redirige al html que muestra el perfil del parqueo.
    window.location.assign("lista-usuarios-convenio.html");

};

const crear_cuadro_convenio = (p_convenio) => {
    console.log(p_convenio.codigo_convenio);
    let nuevo_cuadro = document.createElement('div');
    //Copia de la plantilla.
    let nueva_plantilla = PLANTILLA_CUADRO;

    nuevo_cuadro.classList.add('estilo-cuadro');
    //Reemplazar los datos en la plantilla por los recibidos como parámetros.
    nueva_plantilla = nueva_plantilla.replace('[PARQUEO]', p_convenio.parqueo);
    nueva_plantilla = nueva_plantilla.replace('[FECHA_VENCIMIENTO]', p_convenio.fecha_vencimiento);
    nueva_plantilla = nueva_plantilla.replace('[EMPLEADOS]', p_convenio.cant_empleados);
    nueva_plantilla = nueva_plantilla.replace('[DESCUENTO]', p_convenio.porcentaje_descuento);

    //Link a lista de usuarios
    let lista_usuarios = document.createElement('a');
    //lista_usuarios.href = "lista-usuarios-convenio.html";
    lista_usuarios.id = p_convenio.parqueo;
    lista_usuarios.innerText = 'Lista de usuarios';

    nuevo_cuadro.innerHTML = nueva_plantilla;
    nuevo_cuadro.appendChild(lista_usuarios);
    tabla_convenios.appendChild(nuevo_cuadro);

    lista_usuarios.addEventListener('click', () => {
        nombre_parqueo(p_convenio.codigo_convenio);
        //lista_usuarios.href = "lista-usuarios-convenio.html";
    });

};
let mostrar_convenios = () => {
    tabla_convenios.innerHTML = '';
    for (let i = 1; i <= convenios_empresa.cant_convenios; i++) {
        let identificador_convenio = ('convenio' + i);
        console.log(identificador_convenio);
        crear_cuadro_convenio(convenios_empresa[identificador_convenio]);
    }
};
mostrar_convenios();

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